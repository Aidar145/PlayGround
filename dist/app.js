const app = document.getElementById('jarvis-app')
const clockEl = document.getElementById('clock')
const dateEl = document.getElementById('date')
const greetingPrefix = document.getElementById('greeting-prefix')
const sublineEl = document.getElementById('subline')
const hintEl = document.getElementById('hint')
const logList = document.getElementById('log-list')
const logCount = document.getElementById('log-count')
const logStatus = document.getElementById('log-status')
const voiceStatus = document.getElementById('voice-status')
const recognitionState = document.getElementById('recognition-state')
const micState = document.getElementById('mic-state')
const uptimeEl = document.getElementById('uptime')
const coreMeter = document.getElementById('core-meter')
const reactor = document.getElementById('reactor')
const micButton = document.getElementById('mic-button')
const micLabel = document.getElementById('mic-label')
const commandForm = document.getElementById('command-form')
const commandInput = document.getElementById('command-input')
const restartButton = document.getElementById('restart-button')
const shutdownEl = document.getElementById('shutdown')

const synth = 'speechSynthesis' in window ? window.speechSynthesis : null
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
const startedAt = Date.now()

let recognition = null
let listening = false
let searchMode = false
let spokenCount = 0
let totalEntries = 0
let logSequence = 0

function formatTime(date = new Date()) {
  return date.toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit', second: '2-digit' })
}

function pad(value) {
  return String(value).padStart(2, '0')
}

function formatUptime(ms) {
  const total = Math.floor(ms / 1000)
  return `${pad(Math.floor(total / 3600))}:${pad(Math.floor(total / 60) % 60)}:${pad(total % 60)}`
}

function updateClock() {
  const now = new Date()
  clockEl.textContent = formatTime(now)
  dateEl.textContent = now.toLocaleDateString('ru-RU', {
    weekday: 'long',
    day: '2-digit',
    month: 'long',
    year: 'numeric'
  })
  uptimeEl.textContent = formatUptime(Date.now() - startedAt)
}

function greetingFor(hour) {
  if (hour < 6) return 'Доброй ночи,'
  if (hour < 12) return 'Доброе утро,'
  if (hour < 18) return 'Добрый день,'
  return 'Добрый вечер,'
}

function addLog(message, kind = 'info', time = formatTime()) {
  logSequence += 1
  totalEntries += 1
  const entry = document.createElement('li')
  entry.className = `log-entry log-entry--${kind}`
  entry.style.animationDelay = `${Math.min(logSequence * 30, 180)}ms`

  const stamp = document.createElement('time')
  stamp.textContent = time

  const text = document.createElement('p')
  text.textContent = message

  entry.append(stamp, text)
  logList.prepend(entry)

  while (logList.children.length > 9) logList.lastElementChild.remove()
  logCount.textContent = pad(Math.min(totalEntries, 99))
  return entry
}

function setSubline(text) {
  sublineEl.textContent = text
}

function setHint(text) {
  hintEl.textContent = text
}

function setMicState(text, tone = 'idle') {
  micState.textContent = text
  micState.className = `system-state ${tone === 'ok' ? 'is-ok' : tone === 'live' ? 'is-live' : tone === 'off' ? 'is-off' : 'is-idle'}`
}

function setRecognitionState(text, tone = 'ok') {
  recognitionState.textContent = text
  recognitionState.className = `system-state ${tone === 'ok' ? 'is-ok' : tone === 'live' ? 'is-live' : 'is-off'}`
}

function selectRussianVoice() {
  if (!synth) return null
  const voices = synth.getVoices()
  return voices.find(voice => /^ru/i.test(voice.lang)) || voices.find(voice => /russian|русск/i.test(voice.name)) || null
}

function speak(text) {
  spokenCount += 1
  addLog(`Джарвис: ${text}`, 'voice')
  setSubline(text)
  if (!synth) {
    voiceStatus.textContent = 'СИНТЕЗ · НЕДОСТУПЕН'
    return
  }
  try {
    synth.cancel()
    const utterance = new SpeechSynthesisUtterance(text)
    utterance.lang = 'ru-RU'
    utterance.rate = 1
    utterance.pitch = 0.9
    const voice = selectRussianVoice()
    if (voice) utterance.voice = voice
    synth.speak(utterance)
  } catch {
    voiceStatus.textContent = 'СИНТЕЗ · ОШИБКА'
  }
}

function resetSearchMode() {
  searchMode = false
  commandInput.placeholder = 'Или введите команду, сэр...'
  setHint('Нажмите микрофон или введите команду. Голосовой ввод работает в Chromium.')
}

function clearSublineAfter(text, delay = 4200) {
  window.setTimeout(() => {
    if (sublineEl.textContent === text) setSubline('Системы активированы. Чем я могу помочь?')
  }, delay)
}

function runSearch(query) {
  resetSearchMode()
  if (!query) {
    speak('Поисковый запрос пуст, сэр.')
    return
  }
  addLog(`Поиск: ${query}`, 'action')
  speak(`Ищу ${query}`)
  try {
    window.open(`https://www.google.com/search?q=${encodeURIComponent(query)}`, '_blank', 'noopener')
  } catch {
    addLog('Браузер заблокировал переход. Разрешите всплывающие окна.', 'warn')
  }
  clearSublineAfter(`Ищу ${query}`)
}

function shutdown() {
  speak('Отключаюсь. Хорошего дня, сэр.')
  if (recognition && listening) {
    try {
      recognition.stop()
    } catch {
      listening = false
    }
  }
  setMicState('ОТКЛЮЧЕН', 'off')
  setRecognitionState('ОФЛАЙН', 'off')
  logStatus.textContent = 'СЕАНС ЗАВЕРШЁН'
  window.setTimeout(() => {
    shutdownEl.hidden = false
    restartButton.focus()
  }, 850)
}

function processCommand(raw) {
  const query = String(raw || '').trim().replace(/\s+/g, ' ')
  if (!query) return

  addLog(`Вы: ${query}`, 'user')
  commandInput.value = ''

  const lower = query.toLowerCase()

  if (lower.includes('отбой') || lower.includes('выход') || lower === 'стоп') {
    shutdown()
    return
  }

  if (searchMode) {
    if (['отмена', 'назад', 'не надо'].includes(lower)) {
      resetSearchMode()
      speak('Поиск отменён, сэр.')
      return
    }
    runSearch(query)
    return
  }

  if (lower.includes('время') || lower.includes('час')) {
    const time = new Date().toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' })
    speak(`Текущее время: ${time}`)
    clearSublineAfter(`Текущее время: ${time}`)
    return
  }

  if (lower.includes('youtube') || lower.includes('ютуб')) {
    speak('Открываю YouTube')
    addLog('Запуск: youtube.com', 'action')
    window.open('https://www.youtube.com', '_blank', 'noopener')
    clearSublineAfter('Открываю YouTube')
    return
  }

  if (lower.includes('браузер') || lower.includes('гугл') || lower.includes('google')) {
    speak('Открываю Google')
    addLog('Запуск: google.com', 'action')
    window.open('https://www.google.com', '_blank', 'noopener')
    clearSublineAfter('Открываю Google')
    return
  }

  if (lower.includes('поиск') || lower.includes('найди') || lower.includes('найти')) {
    searchMode = true
    commandInput.placeholder = 'Что именно найти в интернете?'
    setHint('Режим поиска активен. Введите запрос или произнесите его — «отмена» сбросит режим.')
    speak('Что именно вы хотите найти в интернете?')
    commandInput.focus()
    return
  }

  const reply = 'Не распознал команду, сэр. Попробуйте: время, открой YouTube, поиск или отбой.'
  speak(reply)
  clearSublineAfter(reply)
}

function setListening(value) {
  listening = value
  reactor.dataset.state = value ? 'listening' : 'idle'
  micButton.classList.toggle('is-listening', value)
  micLabel.textContent = value ? 'СЛУШАЮ...' : 'СКАЗАТЬ КОМАНДУ'
  setMicState(value ? 'АКТИВЕН' : 'ОЖИДАНИЕ', value ? 'live' : 'idle')
  setRecognitionState(value ? 'СЛУШАЮ' : 'ГОТОВО', value ? 'live' : 'ok')
}

function setupRecognition() {
  if (!SpeechRecognition) {
    voiceStatus.textContent = 'ТЕКСТОВЫЙ РЕЖИМ'
    setRecognitionState('НЕДОСТУПНО', 'off')
    setMicState('ТЕКСТ', 'idle')
    setHint('Голосовой ввод недоступен в этом браузере. Введите команду в поле ниже.')
    return
  }

  recognition = new SpeechRecognition()
  recognition.lang = 'ru-RU'
  recognition.continuous = false
  recognition.interimResults = false
  recognition.maxAlternatives = 1

  recognition.onstart = () => {
    setListening(true)
    setHint('Слушаю вас, сэр...')
  }

  recognition.onresult = event => {
    const transcript = event.results?.[0]?.[0]?.transcript || ''
    setListening(false)
    setHint('Нажмите микрофон или введите команду. Голосовой ввод работает в Chromium.')
    if (transcript) processCommand(transcript)
  }

  recognition.onerror = event => {
    setListening(false)
    const reason = event.error || 'unknown'
    if (reason === 'not-allowed' || reason === 'service-not-allowed') {
      setRecognitionState('НЕТ ДОСТУПА', 'off')
      setHint('Доступ к микрофону запрещён. Разрешите его в настройках браузера или введите команду.')
      addLog('Микрофон недоступен: нет разрешения.', 'warn')
    } else if (reason === 'no-speech') {
      addLog('Речь не обнаружена. Повторите, пожалуйста.', 'warn')
      setHint('Речь не обнаружена. Нажмите микрофон и попробуйте снова.')
    } else if (reason === 'network') {
      setRecognitionState('СЕТЬ', 'off')
      addLog('Распознавание недоступно: сетевая ошибка сервиса.', 'warn')
      setHint('Сервис распознавания недоступен. Используйте текстовое поле.')
    } else if (reason !== 'aborted') {
      addLog(`Ошибка распознавания: ${reason}`, 'warn')
    }
  }

  recognition.onend = () => setListening(false)
}

function toggleListening() {
  if (!recognition) {
    commandInput.focus()
    setHint('Голосовой ввод недоступен. Введите команду в поле ниже.')
    return
  }
  if (listening) {
    try {
      recognition.stop()
    } catch {
      setListening(false)
    }
    return
  }
  try {
    recognition.start()
  } catch {
    setListening(false)
  }
}

function seedLog() {
  const now = Date.now()
  addLog('Загрузка ядра J.A.R.V.I.S. · MARK II', 'ok', formatTime(new Date(now - 14000)))
  addLog('Синтез речи: Web Speech API · ru-RU', 'info', formatTime(new Date(now - 9000)))
  addLog('Микрофон переведён в режим ожидания', 'info', formatTime(new Date(now - 5000)))
  addLog('Системы активированы. Чем я могу помочь?', 'voice', formatTime(new Date(now - 1000)))
}

function init() {
  greetingPrefix.textContent = greetingFor(new Date().getHours())
  updateClock()
  window.setInterval(updateClock, 1000)

  seedLog()
  setupRecognition()

  if (!synth) voiceStatus.textContent = 'СИНТЕЗ · НЕДОСТУПЕН'
  if (synth) synth.addEventListener?.('voiceschanged', () => selectRussianVoice())

  micButton.addEventListener('click', toggleListening)
  commandForm.addEventListener('submit', event => {
    event.preventDefault()
    const value = commandInput.value.trim()
    if (!value) return
    processCommand(value)
  })
  document.getElementById('chips').addEventListener('click', event => {
    const button = event.target.closest('button[data-command]')
    if (button) processCommand(button.dataset.command)
  })
  restartButton.addEventListener('click', () => window.location.reload())

  coreMeter.addEventListener('animationiteration', () => {
    coreMeter.style.opacity = '1'
  })

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      app.dataset.ready = 'true'
    })
  })
}

init()
