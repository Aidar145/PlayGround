import { createRequire } from 'node:module'
import { mkdirSync, readFileSync, statSync } from 'node:fs'
import { homedir } from 'node:os'
import { isAbsolute, join, resolve } from 'node:path'

const started = performance.now()
const transientPattern = /(timeout|ERR_|ECONN|ENOTFOUND|EAI_AGAIN|net::|Target closed|browser has been closed|socket hang up)/i

function elapsed(label, from) {
  console.log(`[timing] ${label}: ${Math.round(performance.now() - from)}ms`)
}

function fail(message, code = 1) {
  const error = new Error(message)
  error.exitCode = code
  throw error
}

const url = process.env.CAPTURE_URL
const captureDir = process.env.CAPTURE_DIR ? resolve(process.env.CAPTURE_DIR) : ''

if (!url) fail('CAPTURE_URL is required.', 1)
if (!isAbsolute(captureDir)) fail('CAPTURE_DIR must resolve to an absolute directory.', 1)

const prepareStarted = performance.now()
mkdirSync(captureDir, { recursive: true })
elapsed('prepare capture directory', prepareStarted)

const runtimeDir = join(homedir(), '.local/share/omgithub-playwright')
let chromium
try {
  const require = createRequire(join(runtimeDir, 'package.json'))
  chromium = require('playwright').chromium
} catch (error) {
  fail(`Unable to load Playwright runtime: ${error.message}`, 75)
}

let config = {}
try {
  const configFile = join(runtimeDir, process.platform === 'darwin' ? 'metal.json' : 'linux.json')
  config = JSON.parse(readFileSync(configFile, 'utf8'))
} catch (error) {
  fail(`Unable to read Playwright launch config: ${error.message}`, 75)
}

if (process.platform === 'linux' && !process.env.DISPLAY) {
  try {
    process.env.DISPLAY = `:${readFileSync(join(runtimeDir, 'display'), 'utf8').trim()}`
  } catch {
    process.env.DISPLAY = ':0'
  }
}

const views = [
  { name: 'desktop', width: 1440, height: 900, mobile: false },
  { name: 'mobile', width: 390, height: 844, mobile: true }
]

let browser

try {
  const launchStarted = performance.now()
  browser = await chromium.launch({ ...config.browser?.launchOptions, timeout: 30000 }).catch(error => {
    error.transient = true
    throw error
  })
  elapsed('launch browser', launchStarted)

  for (const view of views) {
    const viewStarted = performance.now()
    let page

    try {
      page = await browser.newPage({
        viewport: { width: view.width, height: view.height },
        deviceScaleFactor: 1,
        isMobile: view.mobile,
        hasTouch: view.mobile
      }).catch(error => {
        error.transient = true
        throw error
      })
      page.setDefaultTimeout(30000)

      const pageErrors = []
      page.on('pageerror', error => {
        pageErrors.push(error.message)
        console.error(`[capture] ${view.name} page error: ${error.message}`)
      })

      const response = await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 45000 }).catch(error => {
        if (transientPattern.test(error.message)) error.transient = true
        throw error
      })

      if (!response) fail(`No HTTP response while loading ${url}`, 75)
      if (!response.ok()) {
        const code = response.status() >= 500 || [408, 429].includes(response.status()) ? 75 : 1
        fail(`HTTP ${response.status()} while loading ${url}`, code)
      }

      await page.waitForSelector('#jarvis-app[data-ready="true"]', { state: 'attached', timeout: 30000 })
      await page.locator('#jarvis-app[data-ready="true"]').waitFor({ state: 'visible', timeout: 30000 })
      await page.evaluate(() => document.fonts.ready.then(() => true))

      const rendered = await page.evaluate(() => ({
        ready: document.querySelector('#jarvis-app')?.dataset.ready,
        greeting: document.querySelector('.greeting')?.textContent?.trim() || '',
        reactor: Boolean(document.querySelector('.reactor')),
        logEntries: document.querySelectorAll('.log-entry').length,
        textLength: document.body.innerText.trim().length
      }))

      if (rendered.ready !== 'true') fail(`${view.name}: app did not report ready state.`, 1)
      if (!rendered.reactor) fail(`${view.name}: reactor visual is missing.`, 1)
      if (!rendered.greeting) fail(`${view.name}: greeting is missing.`, 1)
      if (rendered.logEntries < 3) fail(`${view.name}: command log did not render.`, 1)
      if (rendered.textLength < 120) fail(`${view.name}: rendered content is incomplete.`, 1)
      if (pageErrors.length) fail(`${view.name}: page errors: ${pageErrors.join('; ')}`, 1)

      await page.waitForTimeout(1200)
      const screenshotPath = join(captureDir, `final-${view.name}.png`)
      await page.screenshot({ path: screenshotPath, timeout: 30000 }).catch(error => {
        if (error.name === 'TimeoutError' || !browser.isConnected()) error.transient = true
        throw error
      })

      const bytes = statSync(screenshotPath).size
      if (bytes < 10000) fail(`${view.name}: screenshot is suspiciously small (${bytes} bytes).`, 1)
      console.log(`[capture] ${view.name}: ${rendered.greeting} · ${rendered.logEntries} log entries · ${bytes} bytes`)
      elapsed(`capture ${view.name}`, viewStarted)
    } finally {
      await page?.close().catch(error => {
        console.error(`[capture] ${view.name} close failed: ${error.message}`)
      })
    }
  }
} catch (error) {
  const code = error.exitCode || ((error.transient || transientPattern.test(error.message)) ? 75 : 1)
  console.error(`[capture] ${error.message}`)
  process.exitCode = code
} finally {
  if (browser) {
    const closeStarted = performance.now()
    await browser.close().catch(error => {
      console.error(`[capture] browser close failed: ${error.message}`)
      process.exitCode ||= 75
    })
    elapsed('close browser', closeStarted)
  }
  elapsed('total capture', started)
}
