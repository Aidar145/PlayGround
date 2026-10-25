import { cp, mkdir, readdir, rm } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const source = join(root, 'src')
const dist = join(root, 'dist')
const started = performance.now()

await rm(dist, { recursive: true, force: true })
await mkdir(dist, { recursive: true })

const files = await readdir(source)
for (const file of files) {
  await cp(join(source, file), join(dist, file), { recursive: true })
}

console.log(`[build] ${files.length} assets copied to ${dist} in ${Math.round(performance.now() - started)}ms`)
