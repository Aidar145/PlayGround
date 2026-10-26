import { cp, mkdir, readdir, rm } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { build } from 'esbuild'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const source = join(root, 'src')
const dist = join(root, 'dist')
const started = performance.now()

await rm(dist, { recursive: true, force: true })
await mkdir(dist, { recursive: true })

await build({
  entryPoints: [join(source, 'app.js')],
  outfile: join(dist, 'app.js'),
  bundle: true,
  format: 'iife',
  target: ['es2020'],
  minify: false,
  sourcemap: false,
  logLevel: 'warning'
})

const assets = (await readdir(source)).filter(file => file !== 'app.js')
for (const file of assets) {
  await cp(join(source, file), join(dist, file), { recursive: true })
}

console.log(`[build] app.js bundled + ${assets.length} assets copied to ${dist} in ${Math.round(performance.now() - started)}ms`)
