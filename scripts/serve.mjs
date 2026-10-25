import { createServer } from 'node:http'
import { readFile, stat } from 'node:fs/promises'
import { dirname, extname, join, resolve, sep } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = resolve(process.env.DIST_DIR || join(dirname(fileURLToPath(import.meta.url)), '..', 'dist'))
const port = Number(process.env.PORT || 3000)

const types = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
  '.woff2': 'font/woff2',
  '.wasm': 'application/wasm',
  '.glb': 'model/gltf-binary'
}

function safePath(pathname) {
  const decoded = decodeURIComponent(pathname)
  const target = resolve(root, `.${decoded}`)
  if (target !== root && !target.startsWith(root + sep)) return null
  return target
}

const server = createServer(async (request, response) => {
  try {
    const url = new URL(request.url || '/', 'http://localhost')

    if (url.pathname === '/healthz') {
      response.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8', 'Cache-Control': 'no-store' })
      response.end('ok')
      return
    }

    let target = safePath(url.pathname)
    if (!target) {
      response.writeHead(403, { 'Content-Type': 'text/plain; charset=utf-8' })
      response.end('Forbidden')
      return
    }

    const info = await stat(target).catch(() => null)
    if (info?.isDirectory()) target = join(target, 'index.html')
    let file = target
    let fileInfo = await stat(file).catch(() => null)
    if (!fileInfo?.isFile()) {
      file = join(root, 'index.html')
      fileInfo = await stat(file).catch(() => null)
    }
    if (!fileInfo?.isFile()) {
      response.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' })
      response.end('Not found')
      return
    }

    const body = await readFile(file)
    response.writeHead(200, {
      'Content-Type': types[extname(file).toLowerCase()] || 'application/octet-stream',
      'Content-Length': body.length,
      'Cache-Control': 'no-cache, no-store, must-revalidate',
      'X-Content-Type-Options': 'nosniff'
    })
    response.end(request.method === 'HEAD' ? undefined : body)
  } catch (error) {
    console.error(`[serve] ${error.message}`)
    if (!response.headersSent) response.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' })
    response.end('Internal error')
  }
})

server.listen(port, '0.0.0.0', () => {
  console.log(`[serve] J.A.R.V.I.S. ready on http://0.0.0.0:${port}`)
  console.log(`[serve] static directory: ${root}`)
})

function stop(signal) {
  console.log(`[serve] ${signal} received, closing`)
  server.close(() => process.exit(0))
  setTimeout(() => process.exit(0), 3000).unref()
}

process.on('SIGTERM', () => stop('SIGTERM'))
process.on('SIGINT', () => stop('SIGINT'))
