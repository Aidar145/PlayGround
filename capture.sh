#!/usr/bin/env bash
set -euo pipefail

PROJECT_DIR="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd -P)"
cd "$PROJECT_DIR"

: "${CAPTURE_URL:?CAPTURE_URL is required}"
: "${CAPTURE_DIR:?CAPTURE_DIR is required}"

overall_start="$(date +%s%N)"
set +e
node --input-type=module - <<'NODE'
import { createRequire } from 'node:module'
import { mkdirSync, readFileSync, statSync } from 'node:fs'
import { join, relative, resolve, sep } from 'node:path'
import { performance } from 'node:perf_hooks'

const url = process.env.CAPTURE_URL
const output = resolve(process.env.CAPTURE_DIR)
const project = process.cwd()
const relativeOutput = relative(project, output)
const outsideProject = relativeOutput === '..' || relativeOutput.startsWith(`..${sep}`)
if (!outsideProject) {
  throw Object.assign(new Error(`CAPTURE_DIR must be outside the project source: ${output}`), { exitCode: 1 })
}
mkdirSync(output, { recursive: true })

const runtime = join(process.env.HOME, '.local/share/omgithub-playwright')
const require = createRequire(join(runtime, 'package.json'))
const { chromium, devices } = require('playwright')
const configPath = join(runtime, process.platform === 'darwin' ? 'metal.json' : 'linux.json')
const config = JSON.parse(readFileSync(configPath, 'utf8'))
if (process.platform === 'linux' && !process.env.DISPLAY) {
  process.env.DISPLAY = ':' + readFileSync(join(runtime, 'display'), 'utf8').trim()
}

const started = performance.now()
const elapsed = (label, start = started) => {
  console.log(`[timing] ${label}: ${Math.round(performance.now() - start)} ms`)
}
const transient = error => Object.assign(error instanceof Error ? error : new Error(String(error)), { exitCode: 75 })
const defect = message => Object.assign(new Error(message), { exitCode: 1 })
const browserGone = error => /Target page, context or browser has been closed|Protocol error|Browser closed|browser has been closed|WebSocket error|Target closed|Page crashed|Out of memory/i.test(error?.message || '')

async function openPage(browser, name, options) {
  const contextStart = performance.now()
  let context
  let page
  try {
    context = await browser.newContext(options)
    page = await context.newPage()
    page.setDefaultTimeout(15000)
  } catch (error) {
    throw transient(error)
  }
  elapsed(`${name} context`, contextStart)

  const pageErrors = []
  const consoleErrors = []
  page.on('pageerror', error => pageErrors.push(error.message))
  page.on('console', message => {
    if (message.type() === 'error') consoleErrors.push(message.text())
  })

  const navStart = performance.now()
  let response
  try {
    response = await page.goto(url, { waitUntil: 'load', timeout: 45000 })
  } catch (error) {
    throw transient(error)
  }
  elapsed(`${name} navigate`, navStart)
  if (!response) throw transient(new Error(`No navigation response for ${url}`))
  if (!response.ok()) {
    const status = response.status()
    const code = !status || [408, 429, 500, 502, 503, 504].includes(status) ? 75 : 1
    throw Object.assign(new Error(`HTTP ${status} loading ${url}`), { exitCode: code })
  }

  const title = await page.title().catch(() => '')
  if (/just a moment|attention required|cloudflare/i.test(title)) {
    throw transient(new Error(`Navigation reached an interstitial page: ${title}`))
  }

  const readyStart = performance.now()
  try {
    await page.locator('#game').waitFor({ state: 'visible', timeout: 20000 })
    await page.waitForFunction(() => {
      const play = document.querySelector('#play')
      return Boolean(play && !play.disabled && window.__mc3d && window.__mc3d.world && window.__mc3dTimings)
    }, null, { timeout: 60000 })
  } catch (error) {
    const currentTitle = await page.title().catch(() => title)
    if (browserGone(error)) throw transient(error)
    if (/just a moment|attention required|cloudflare/i.test(currentTitle)) throw transient(error)
    throw defect(`App did not become render-ready on ${name}: ${error.message}`)
  }
  elapsed(`${name} world ready`, readyStart)

  if (pageErrors.length) throw defect(`Page error on ${name}: ${pageErrors[0]}`)

  const playStart = performance.now()
  try {
    await page.locator('#play').click({ timeout: 15000 })
    await page.waitForFunction(() => {
      const hud = document.getElementById('hud')
      return window.__mc3d?.mode === 'playing' && hud && !hud.classList.contains('hidden')
    }, null, { timeout: 15000 })
  } catch (error) {
    if (browserGone(error)) throw transient(error)
    throw defect(`Could not start gameplay on ${name}: ${error.message}`)
  }
  elapsed(`${name} gameplay start`, playStart)
  await page.waitForTimeout(1200)

  if (name === 'mobile') {
    const touchLayout = await page.evaluate(() => {
      const touch = document.getElementById('touch')
      const hotbar = document.getElementById('slots')?.getBoundingClientRect()
      return {
        touchVisible: Boolean(touch && getComputedStyle(touch).display !== 'none'),
        hotbarFits: Boolean(hotbar && hotbar.left >= 0 && hotbar.right <= innerWidth)
      }
    })
    console.log(`[capture] mobile layout: touch=${touchLayout.touchVisible ? 'visible' : 'hidden'} hotbar=${touchLayout.hotbarFits ? 'fits' : 'overflow'}`)
    if (!touchLayout.touchVisible) throw defect('Mobile touch controls did not render')
    if (!touchLayout.hotbarFits) throw defect('Mobile hotbar overflows the viewport')
  }

  if (pageErrors.length) throw defect(`Page error on ${name}: ${pageErrors[0]}`)
  if (consoleErrors.length) console.log(`[capture] ${name} console errors: ${consoleErrors.length}`)

  const shotStart = performance.now()
  const shotPath = join(output, `final-${name}.png`)
  let buffer
  try {
    buffer = await page.screenshot({ path: shotPath, timeout: 30000 })
  } catch (error) {
    if (browserGone(error) || error.name === 'TimeoutError') throw transient(error)
    throw error
  }
  elapsed(`${name} screenshot`, shotStart)

  const size = statSync(shotPath).size
  if (buffer.length < 24 || buffer.readUInt32BE(0) !== 0x89504e47) throw defect(`${shotPath} is not a valid PNG`)
  const width = buffer.readUInt32BE(16)
  const height = buffer.readUInt32BE(20)
  if (width < 300 || height < 500) throw defect(`${shotPath} has an implausible size: ${width}x${height}`)
  if (size < 20000) throw defect(`${shotPath} looks blank (${size} bytes)`)
  console.log(`[capture] ${name}: ${shotPath} (${width}x${height}, ${size} bytes)`)

  await page.close().catch(error => console.log(`[capture] ${name} page close: ${error.message}`))
  await context.close().catch(error => console.log(`[capture] ${name} context close: ${error.message}`))
}

let browser
let exitCode = 0
try {
  const launchStart = performance.now()
  try {
    browser = await chromium.launch({ ...config.browser.launchOptions, timeout: 30000 })
  } catch (error) {
    throw transient(error)
  }
  elapsed('browser launch', launchStart)

  await openPage(browser, 'desktop', { viewport: { width: 1440, height: 900 } })

  const iphone = devices?.['iPhone 15']
  let mobileOptions
  if (iphone) {
    const { defaultBrowserType: _defaultBrowserType, ...rest } = iphone
    mobileOptions = { ...rest, deviceScaleFactor: 1 }
  } else {
    mobileOptions = { viewport: { width: 390, height: 844 }, deviceScaleFactor: 1, isMobile: true, hasTouch: true }
  }
  await openPage(browser, 'mobile', mobileOptions)
} catch (error) {
  console.error(`[capture] ${error.stack || error}`)
  exitCode = error.exitCode || (browserGone(error) ? 75 : 1)
} finally {
  if (browser) {
    const closeStart = performance.now()
    try {
      await browser.close()
    } catch (error) {
      console.error(`[capture] browser close failed: ${error.message}`)
      if (!exitCode) exitCode = 75
    }
    elapsed('browser close', closeStart)
  }
}
process.exitCode = exitCode
NODE
status=$?
set -e

overall_end="$(date +%s%N)"
printf '[timing] capture.sh total: %d ms\n' "$(( (overall_end - overall_start) / 1000000 ))"
exit "$status"
