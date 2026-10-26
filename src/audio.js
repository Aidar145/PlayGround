export class SoundEngine {
  constructor() {
    this.ctx = null
    this.master = null
    this.noise = null
    this.muted = false
  }

  unlock() {
    if (!this.ctx) {
      const Ctx = window.AudioContext || window.webkitAudioContext
      if (!Ctx) return
      this.ctx = new Ctx()
      this.master = this.ctx.createGain()
      this.master.gain.value = 0.55
      this.master.connect(this.ctx.destination)
      const length = Math.floor(this.ctx.sampleRate * 0.7)
      this.noise = this.ctx.createBuffer(1, length, this.ctx.sampleRate)
      const data = this.noise.getChannelData(0)
      for (let i = 0; i < length; i++) data[i] = Math.random() * 2 - 1
    }
    if (this.ctx.state === 'suspended') this.ctx.resume()
  }

  setMuted(value) {
    this.muted = value
    if (this.master) this.master.gain.value = value ? 0 : 0.55
  }

  noiseBurst(duration, frequency, gain, type = 'bandpass', q = 0.9, sweep = 0) {
    if (!this.ctx || this.muted) return
    const now = this.ctx.currentTime
    const src = this.ctx.createBufferSource()
    src.buffer = this.noise
    const filter = this.ctx.createBiquadFilter()
    filter.type = type
    filter.frequency.setValueAtTime(frequency, now)
    if (sweep) filter.frequency.exponentialRampToValueAtTime(Math.max(60, frequency + sweep), now + duration)
    filter.Q.value = q
    const envelope = this.ctx.createGain()
    envelope.gain.setValueAtTime(0.0001, now)
    envelope.gain.exponentialRampToValueAtTime(gain, now + 0.012)
    envelope.gain.exponentialRampToValueAtTime(0.0001, now + duration)
    src.connect(filter)
    filter.connect(envelope)
    envelope.connect(this.master)
    src.start(now)
    src.stop(now + duration + 0.03)
  }

  tone(frequency, duration, gain, type = 'sine', slideTo = null, delay = 0) {
    if (!this.ctx || this.muted) return
    const now = this.ctx.currentTime + delay
    const osc = this.ctx.createOscillator()
    osc.type = type
    osc.frequency.setValueAtTime(frequency, now)
    if (slideTo) osc.frequency.exponentialRampToValueAtTime(slideTo, now + duration)
    const envelope = this.ctx.createGain()
    envelope.gain.setValueAtTime(0.0001, now)
    envelope.gain.exponentialRampToValueAtTime(gain, now + 0.008)
    envelope.gain.exponentialRampToValueAtTime(0.0001, now + duration)
    osc.connect(envelope)
    envelope.connect(this.master)
    osc.start(now)
    osc.stop(now + duration + 0.02)
  }

  breakBlock(sound) {
    this.unlock()
    if (sound === 'wood') {
      this.noiseBurst(0.16, 520, 0.18, 'bandpass', 1.2, -260)
      this.tone(150, 0.1, 0.05, 'triangle', 90)
    } else if (sound === 'glass') {
      this.noiseBurst(0.2, 2600, 0.14, 'highpass', 0.7)
      this.tone(880, 0.12, 0.035, 'sine', 1400)
      this.tone(1320, 0.08, 0.02, 'sine', 900, 0.03)
    } else if (sound === 'sand') {
      this.noiseBurst(0.14, 900, 0.1, 'lowpass', 0.5)
    } else if (sound === 'grass' || sound === 'dirt') {
      this.noiseBurst(0.13, 700, 0.1, 'bandpass', 0.6, -280)
    } else if (sound === 'snow') {
      this.noiseBurst(0.12, 1100, 0.07, 'highpass', 0.6)
    } else if (sound === 'water') {
      this.noiseBurst(0.3, 1100, 0.1, 'highpass', 0.6, -500)
    } else {
      this.noiseBurst(0.16, 600, 0.17, 'bandpass', 1.1, -300)
      this.tone(120, 0.09, 0.04, 'triangle', 80)
    }
  }

  placeBlock(sound) {
    this.unlock()
    this.noiseBurst(0.075, sound === 'wood' ? 700 : 950, 0.08, 'bandpass', 1.4)
    this.tone(sound === 'wood' ? 180 : 240, 0.05, 0.035, 'square', sound === 'wood' ? 140 : 200)
  }

  step(sound, intensity = 1) {
    this.unlock()
    const base = sound === 'grass' || sound === 'dirt' ? 480 : sound === 'sand' ? 850 : sound === 'snow' ? 1000 : 620
    this.noiseBurst(0.055, base + Math.random() * 180, 0.045 * intensity, 'bandpass', 0.7)
  }

  jump() {
    this.unlock()
    this.noiseBurst(0.05, 500, 0.04, 'lowpass', 0.5)
  }

  land() {
    this.unlock()
    this.noiseBurst(0.09, 280, 0.08, 'lowpass', 0.6)
  }

  splash() {
    this.unlock()
    this.noiseBurst(0.32, 1500, 0.11, 'highpass', 0.5, -900)
  }

  click() {
    this.unlock()
    this.tone(620, 0.035, 0.03, 'square', 480)
  }
}
