import { execFileSync } from 'node:child_process'
import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const tmp = join(root, '.icon-tmp')
const res = join(root, 'android/app/src/main/res')
const chromium = process.env.CHROMIUM || 'chromium'

const defs = `
  <defs>
    <radialGradient id="core" cx="35%" cy="30%" r="70%">
      <stop offset="0" stop-color="#ffffff"/>
      <stop offset=".42" stop-color="#5fe7ff"/>
      <stop offset="1" stop-color="#0a4d63"/>
    </radialGradient>
  </defs>`

const mark = `
  <path d="M32 5 55 18v28L32 59 9 46V18Z" fill="none" stroke="#5fe7ff" stroke-width="1.6" opacity=".8"/>
  <circle cx="32" cy="32" r="13" fill="none" stroke="#5fe7ff" stroke-width="1.4" opacity=".55"/>
  <circle cx="32" cy="32" r="9" fill="url(#core)"/>`

const square = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">${defs}
  <rect width="64" height="64" rx="14" fill="#04080f"/>${mark}</svg>`

const round = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">${defs}
  <circle cx="32" cy="32" r="32" fill="#04080f"/>${mark}</svg>`

const foreground = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 108 108">${defs}
  <g transform="translate(54 54) scale(1.1) translate(-32 -32)">${mark}</g></svg>`

async function render(name, svg, size) {
  const html = join(tmp, `${name}-${size}.html`)
  const png = join(tmp, `${name}-${size}.png`)
  await writeFile(html, `<!doctype html><html><head><style>
    html,body{margin:0;width:${size}px;height:${size}px;overflow:hidden;background:transparent}
    img{display:block;width:${size}px;height:${size}px}
  </style></head><body><img src="data:image/svg+xml;base64,${Buffer.from(svg).toString('base64')}"></body></html>`)
  execFileSync(chromium, [
    '--headless=new',
    '--no-sandbox',
    '--disable-gpu',
    '--hide-scrollbars',
    '--force-device-scale-factor=1',
    '--default-background-color=00000000',
    `--window-size=${size},${size}`,
    `--screenshot=${png}`,
    `file://${html}`
  ], { stdio: 'ignore' })
  return readFile(png)
}

const densities = [
  ['mdpi', 48, 108],
  ['hdpi', 72, 162],
  ['xhdpi', 96, 216],
  ['xxhdpi', 144, 324],
  ['xxxhdpi', 192, 432]
]

await mkdir(tmp, { recursive: true })

for (const [density, size, fgSize] of densities) {
  const dir = join(res, `mipmap-${density}`)
  await mkdir(dir, { recursive: true })
  await writeFile(join(dir, 'ic_launcher.png'), await render('square', square, size))
  await writeFile(join(dir, 'ic_launcher_round.png'), await render('round', round, size))
  await writeFile(join(dir, 'ic_launcher_foreground.png'), await render('foreground', foreground, fgSize))
}

console.log('[icons] android launcher icons generated')
