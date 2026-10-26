import * as THREE from '../vendor/three.module.js'
import { BLOCKS, AIR, TILES, TILE_SIZE, ATLAS_COLS, ATLAS_ROWS, ATLAS_WIDTH, ATLAS_HEIGHT, tileForFace } from './textures.js'

export const WORLD_SIZE = 128
export const WORLD_HEIGHT = 48
export const CHUNK_SIZE = 16
export const CHUNKS = WORLD_SIZE / CHUNK_SIZE
export const SEA_LEVEL = 18
export const WATER_SURFACE = SEA_LEVEL + 1

const WATER_ID = 11
const GLASS_ID = 8
const BEDROCK_ID = 14

function clamp(v, lo, hi) { return v < lo ? lo : v > hi ? hi : v }
function lerp(a, b, t) { return a + (b - a) * t }
function smooth(t) { return t * t * (3 - 2 * t) }

function hash2(ix, iy, seed) {
  let h = Math.imul(ix, 374761393) ^ Math.imul(iy, 668265263) ^ Math.imul(seed, 362437)
  h = Math.imul(h ^ (h >>> 13), 1274126177)
  return ((h ^ (h >>> 16)) >>> 0) / 4294967296
}

function hash3(ix, iy, iz, seed) {
  let h = Math.imul(ix, 374761393) ^ Math.imul(iy, 668265263) ^ Math.imul(iz, 2246822519) ^ Math.imul(seed, 362437)
  h = Math.imul(h ^ (h >>> 13), 1274126177)
  h = Math.imul(h ^ (h >>> 15), 2246822519)
  return ((h ^ (h >>> 16)) >>> 0) / 4294967296
}

export function valueNoise2(x, y, seed) {
  const x0 = Math.floor(x), y0 = Math.floor(y)
  const fx = smooth(x - x0), fy = smooth(y - y0)
  const v00 = hash2(x0, y0, seed)
  const v10 = hash2(x0 + 1, y0, seed)
  const v01 = hash2(x0, y0 + 1, seed)
  const v11 = hash2(x0 + 1, y0 + 1, seed)
  return lerp(lerp(v00, v10, fx), lerp(v01, v11, fx), fy)
}

export function fbm2(x, y, octaves, seed, gain = 0.5, lacunarity = 2) {
  let amp = 0.5, freq = 1, sum = 0, norm = 0
  for (let i = 0; i < octaves; i++) {
    sum += amp * valueNoise2(x * freq, y * freq, seed + i * 1013)
    norm += amp
    amp *= gain
    freq *= lacunarity
  }
  return sum / norm
}

export function valueNoise3(x, y, z, seed) {
  const x0 = Math.floor(x), y0 = Math.floor(y), z0 = Math.floor(z)
  const fx = smooth(x - x0), fy = smooth(y - y0), fz = smooth(z - z0)
  const c000 = hash3(x0, y0, z0, seed)
  const c100 = hash3(x0 + 1, y0, z0, seed)
  const c010 = hash3(x0, y0 + 1, z0, seed)
  const c110 = hash3(x0 + 1, y0 + 1, z0, seed)
  const c001 = hash3(x0, y0, z0 + 1, seed)
  const c101 = hash3(x0 + 1, y0, z0 + 1, seed)
  const c011 = hash3(x0, y0 + 1, z0 + 1, seed)
  const c111 = hash3(x0 + 1, y0 + 1, z0 + 1, seed)
  const x00 = lerp(c000, c100, fx), x10 = lerp(c010, c110, fx)
  const x01 = lerp(c001, c101, fx), x11 = lerp(c011, c111, fx)
  return lerp(lerp(x00, x10, fy), lerp(x01, x11, fy), fz)
}

function fbm3(x, y, z, octaves, seed) {
  let amp = 0.5, freq = 1, sum = 0, norm = 0
  for (let i = 0; i < octaves; i++) {
    sum += amp * valueNoise3(x * freq, y * freq, z * freq, seed + i * 1337)
    norm += amp
    amp *= 0.5
    freq *= 2
  }
  return sum / norm
}

export class World {
  constructor(seed = 1337, edits = []) {
    this.seed = seed >>> 0
    this.size = WORLD_SIZE
    this.height = WORLD_HEIGHT
    this.data = new Uint8Array(this.size * this.size * this.height)
    this.heights = new Int16Array(this.size * this.size)
    this.edits = new Map()
    this.pendingEdits = edits
  }

  index(x, y, z) {
    return x + this.size * (z + this.size * y)
  }

  inside(x, y, z) {
    return x >= 0 && z >= 0 && y >= 0 && x < this.size && z < this.size && y < this.height
  }

  get(x, y, z) {
    if (y < 0) return BEDROCK_ID
    if (y >= this.height) return AIR
    if (x < 0 || z < 0 || x >= this.size || z >= this.size) return AIR
    return this.data[this.index(x, y, z)]
  }

  setRaw(x, y, z, id) {
    if (!this.inside(x, y, z)) return
    this.data[this.index(x, y, z)] = id
  }

  setBlock(x, y, z, id, record = true) {
    if (!this.inside(x, y, z)) return false
    this.data[this.index(x, y, z)] = id
    if (record) this.edits.set(`${x},${y},${z}`, [x, y, z, id])
    return true
  }

  getHeight(x, z) {
    if (x < 0 || z < 0 || x >= this.size || z >= this.size) return SEA_LEVEL
    return this.heights[x + z * this.size]
  }

  isSolid(x, y, z) {
    if (y < 0) return true
    if (y >= this.height) return false
    if (x < 0 || z < 0 || x >= this.size || z >= this.size) return true
    const id = this.data[this.index(x, y, z)]
    const block = BLOCKS[id]
    return !!(block && block.solid)
  }

  isWater(x, y, z) {
    return this.get(Math.floor(x), Math.floor(y), Math.floor(z)) === WATER_ID
  }

  isOccluder(x, y, z) {
    const id = this.get(x, y, z)
    const block = BLOCKS[id]
    return !!(block && block.opaque)
  }

  applyPendingEdits() {
    for (const [x, y, z, id] of this.pendingEdits) this.setBlock(x, y, z, id, true)
    this.pendingEdits = []
  }

  generate() {
    const { size, heights } = this
    const rng = mulberry32(this.seed)
    const half = (size - 1) / 2

    for (let z = 0; z < size; z++) {
      for (let x = 0; x < size; x++) {
        const continent = fbm2(x * 0.011, z * 0.011, 4, this.seed)
        const hills = fbm2(x * 0.038, z * 0.038, 3, this.seed + 71)
        const ridge = fbm2(x * 0.0065 + 37, z * 0.0065 - 19, 3, this.seed + 149)
        const mountain = smooth(clamp((ridge - 0.6) / 0.28, 0, 1))
        let h = SEA_LEVEL + 2 + (continent - 0.5) * 27 + (hills - 0.5) * 8 + mountain * 17

        h += (fbm2(x * 0.105, z * 0.105, 2, this.seed + 883) - 0.5) * 2.6

        const basin = fbm2(x * 0.021 - 17, z * 0.021 + 41, 3, this.seed + 907)
        const lake = smooth(clamp((basin - 0.56) / 0.22, 0, 1))
        h -= lake * 13

        const dx = (x - half) / half
        const dz = (z - half) / half
        const dist = Math.min(1, Math.sqrt(dx * dx + dz * dz))
        const edge = smooth(clamp((dist - 0.68) / 0.3, 0, 1))
        h = lerp(h, SEA_LEVEL - 6, edge)
        h = clamp(Math.round(h), 3, WORLD_HEIGHT - 6)
        heights[x + z * size] = h

        const beach = h <= SEA_LEVEL + 2
        const snowy = h >= 33
        let top = 1
        if (beach) top = h < SEA_LEVEL - 2 ? 18 : 4
        else if (snowy) top = 12

        for (let y = 0; y <= h; y++) {
          let id
          if (y === 0) id = BEDROCK_ID
          else if (y === h) id = top
          else if (y > h - 4) {
            id = top === 4 ? 4 : top === 18 ? 18 : top === 12 ? 2 : 2
          } else id = 3

          if (id) this.setRaw(x, y, z, id)
        }

        for (let y = h + 1; y <= SEA_LEVEL; y++) this.setRaw(x, y, z, WATER_ID)
      }
    }

    this.computeWaterDistance()
    this.plantTrees(rng)
    this.plantFlora(rng)
    this.scatterRocks(rng)
    this.scatterBushes(rng)
    this.applyPendingEdits()
  }

  computeWaterDistance() {
    const size = this.size
    const dist = new Int16Array(size * size)
    dist.fill(9999)
    const queue = new Int32Array(size * size)
    let head = 0, tail = 0
    for (let i = 0; i < size * size; i++) {
      if (this.heights[i] < SEA_LEVEL) { dist[i] = 0; queue[tail++] = i }
    }
    while (head < tail) {
      const index = queue[head++]
      const x = index % size
      const z = (index / size) | 0
      const next = dist[index] + 1
      const neighbors = [
        x > 0 ? index - 1 : -1,
        x < size - 1 ? index + 1 : -1,
        z > 0 ? index - size : -1,
        z < size - 1 ? index + size : -1
      ]
      for (const n of neighbors) {
        if (n < 0 || dist[n] <= next) continue
        dist[n] = next
        queue[tail++] = n
      }
    }
    this.waterDist = dist
  }

  plantTrees(rng) {
    const { size, heights } = this
    for (let z = 4; z < size - 4; z++) {
      for (let x = 4; x < size - 4; x++) {
        const h = heights[x + z * size]
        if (h <= SEA_LEVEL + 1 || h >= 33) continue
        const forest = fbm2(x * 0.028, z * 0.028, 2, this.seed + 500)
        const chance = 0.0038 + Math.max(0, forest - 0.5) * 0.16
        if (rng() > chance) continue
        if (this.get(x, h, z) !== 1) continue
        let flat = true
        for (const [ox, oz] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {
          if (this.getHeight(x + ox, z + oz) !== h) { flat = false; break }
        }
        if (!flat) continue
        const trunk = 4 + Math.floor(rng() * 3)
        const base = h + 1
        const topY = base + trunk
        for (let y = base; y < topY; y++) this.setRaw(x, y, z, 5)
        for (let ly = topY - 2; ly <= topY + 1; ly++) {
          const radius = ly >= topY ? 1 : 2
          for (let dx = -radius; dx <= radius; dx++) {
            for (let dz = -radius; dz <= radius; dz++) {
              if (Math.abs(dx) === radius && Math.abs(dz) === radius && rng() < 0.58) continue
              if (dx === 0 && dz === 0 && ly < topY) continue
              if (this.get(x + dx, ly, z + dz) === AIR) this.setRaw(x + dx, ly, z + dz, 6)
            }
          }
        }
        this.setRaw(x, topY, z, 6)
      }
    }
  }

  plantFlora(rng) {
    const { size, heights } = this
    for (let z = 1; z < size - 1; z++) {
      for (let x = 1; x < size - 1; x++) {
        const h = heights[x + z * size]
        if (h <= SEA_LEVEL + 1) continue
        if (this.get(x, h, z) !== 1) continue
        if (this.get(x, h + 1, z) !== AIR) continue
        const r = rng()
        if (r < 0.088) this.setRaw(x, h + 1, z, 15)
        else if (r < 0.114) this.setRaw(x, h + 1, z, rng() < 0.5 ? 16 : 17)
      }
    }
  }

  scatterRocks(rng) {
    const { size, heights } = this
    for (let z = 2; z < size - 2; z++) {
      for (let x = 2; x < size - 2; x++) {
        const h = heights[x + z * size]
        if (h <= SEA_LEVEL + 1 || h >= 33) continue
        if (this.get(x, h, z) !== 1 || rng() > 0.0019) continue
        const radius = rng() < 0.3 ? 1 : 0
        for (let dz = -radius; dz <= radius; dz++) {
          for (let dx = -radius; dx <= radius; dx++) {
            if (dx * dx + dz * dz > radius * radius + 0.4) continue
            const bx = x + dx, bz = z + dz
            const bh = this.getHeight(bx, bz)
            if (Math.abs(bh - h) > 1) continue
            if (this.get(bx, bh, bz) !== 1) continue
            if (this.get(bx, bh + 1, bz) !== AIR) continue
            const id = rng() < 0.76 ? 10 : 19
            this.setRaw(bx, bh + 1, bz, id)
            if (radius === 1 && Math.abs(dx) + Math.abs(dz) <= 1 && rng() < 0.4) {
              this.setRaw(bx, bh + 2, bz, id)
            }
          }
        }
      }
    }
  }

  scatterBushes(rng) {
    const { size, heights } = this
    for (let z = 2; z < size - 2; z++) {
      for (let x = 2; x < size - 2; x++) {
        const h = heights[x + z * size]
        if (h <= SEA_LEVEL + 1 || h >= 33) continue
        if (this.get(x, h, z) !== 1 || rng() > 0.0075) continue
        if (this.get(x, h + 1, z) !== AIR) continue
        this.setRaw(x, h + 1, z, 6)
        if (rng() < 0.5) this.setRaw(x, h + 2, z, 6)
        for (const [ox, oz] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {
          const nx = x + ox, nz = z + oz
          if (this.getHeight(nx, nz) !== h) continue
          if (this.get(nx, h + 1, nz) !== AIR) continue
          if (rng() < 0.45) this.setRaw(nx, h + 1, nz, 6)
        }
      }
    }
  }

  saveEdits() {
    return Array.from(this.edits.values())
  }

  hasHeadroom(x, h, z) {
    if (this.get(x, h, z) !== 1) return false
    for (let y = h + 1; y <= h + 3; y++) {
      if (this.isSolid(x, y, z)) return false
    }
    return true
  }

  viewScore(x, h, z, yaw) {
    const size = this.size
    const dx = -Math.sin(yaw)
    const dz = -Math.cos(yaw)
    const px = -dz
    const pz = dx
    let score = 0

    for (let d = 2; d <= 9; d += 1.5) {
      const bx = Math.round(x + dx * d)
      const bz = Math.round(z + dz * d)
      if (bx < 0 || bz < 0 || bx >= size || bz >= size) return -60
      if (this.getHeight(bx, bz) > h + 2) return -50
      for (let y = h + 1; y <= h + 2; y++) {
        if (this.isSolid(bx, y, bz)) return -40
      }
    }

    let trees = 0
    let water = 0
    let near = 0
    for (let d = 6; d <= 32; d += 2) {
      for (let l = -10; l <= 10; l += 2) {
        const bx = Math.round(x + dx * d + px * l)
        const bz = Math.round(z + dz * d + pz * l)
        if (bx < 1 || bz < 1 || bx >= size - 1 || bz >= size - 1) continue
        const gh = this.getHeight(bx, bz)
        if (gh > h + 5) continue
        let canopy = false
        for (let y = h + 1; y <= h + 9; y++) {
          const id = this.get(bx, y, bz)
          if (id === 5 || id === 6) { canopy = true; break }
        }
        if (canopy) {
          trees += d < 14 ? 0.7 : 1
          if (d < 9) near++
        }
        if (this.get(bx, SEA_LEVEL, bz) === WATER_ID && this.get(bx, SEA_LEVEL + 1, bz) === AIR) {
          water += d > 12 ? (d > 24 ? 0.55 : 1) : 0.15
        }
      }
    }

    let ahead = 0, n = 0
    for (let d = 6; d <= 20; d += 2) {
      ahead += this.getHeight(Math.round(x + dx * d), Math.round(z + dz * d))
      n++
    }
    ahead /= n
    const drop = h - ahead
    if (drop > 0 && drop <= 9) score += Math.min(drop, 5) * 0.9
    else if (drop < -2) score -= 4
    score += Math.min(trees, 18) * 0.62
    score += Math.min(water, 10) * 0.75
    score -= near * 1.4
    if (trees < 2) score -= 4
    if (water < 0.5) score -= 1.5
    return score
  }

  findSpawn() {
    const size = this.size
    const center = size / 2
    const candidates = []
    for (let z = 6; z < size - 6; z += 2) {
      for (let x = 6; x < size - 6; x += 2) {
        const h = this.heights[x + z * size]
        if (h < SEA_LEVEL + 3 || h > 34) continue
        if (!this.hasHeadroom(x, h, z)) continue
        if (this.waterDist[x + z * size] < 5) continue
        const dCenter = Math.hypot(x - center, z - center)
        const base = -Math.abs(h - 27) * 0.9 - Math.max(0, Math.abs(dCenter - 22) - 14) * 0.3
        candidates.push({ x, z, h, base })
      }
    }
    candidates.sort((a, b) => b.base - a.base)

    let best = null
    let bestScore = -Infinity
    for (const c of candidates.slice(0, 70)) {
      for (let i = 0; i < 24; i++) {
        const yaw = (i / 24) * Math.PI * 2
        const score = c.base + this.viewScore(c.x, c.h, c.z, yaw)
        if (score > bestScore) {
          bestScore = score
          best = { x: c.x, z: c.z, h: c.h, yaw }
        }
      }
    }

    if (!best) {
      for (let r = 0; r < 45 && !best; r++) {
        for (let a = 0; a < Math.max(1, r * 8); a++) {
          const angle = (a / Math.max(1, r * 8)) * Math.PI * 2
          const x = Math.floor(center + Math.cos(angle) * r)
          const z = Math.floor(center + Math.sin(angle) * r)
          if (x < 2 || z < 2 || x > size - 3 || z > size - 3) continue
          const h = this.heights[x + z * size]
          if (h <= SEA_LEVEL + 1 || h > 32) continue
          if (!this.hasHeadroom(x, h, z)) continue
          best = { x, z, h, yaw: -0.62 }
        }
      }
    }
    if (!best) {
      const x = Math.floor(center), z = Math.floor(center)
      best = { x, z, h: this.getHeight(x, z), yaw: -0.62 }
    }
    return { x: best.x + 0.5, y: best.h + 1, z: best.z + 0.5, yaw: best.yaw, pitch: -0.09 }
  }
}

function mulberry32(seed) {
  let a = seed >>> 0
  return function () {
    a = (a + 0x6d2b79f5) >>> 0
    let t = a
    t = Math.imul(t ^ (t >>> 15), t | 1)
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61)
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

const AO_FACTOR = [0.52, 0.68, 0.84, 1]

const FACES = [
  {
    name: 'top', dir: [0, 1, 0], shade: 1,
    corners: [
      { p: [0, 1, 1], uv: [0, 0] }, { p: [1, 1, 1], uv: [1, 0] },
      { p: [1, 1, 0], uv: [1, 1] }, { p: [0, 1, 0], uv: [0, 1] }
    ]
  },
  {
    name: 'bottom', dir: [0, -1, 0], shade: 0.5,
    corners: [
      { p: [0, 0, 0], uv: [0, 0] }, { p: [1, 0, 0], uv: [1, 0] },
      { p: [1, 0, 1], uv: [1, 1] }, { p: [0, 0, 1], uv: [0, 1] }
    ]
  },
  {
    name: 'east', dir: [1, 0, 0], shade: 0.82,
    corners: [
      { p: [1, 0, 1], uv: [0, 0] }, { p: [1, 0, 0], uv: [1, 0] },
      { p: [1, 1, 0], uv: [1, 1] }, { p: [1, 1, 1], uv: [0, 1] }
    ]
  },
  {
    name: 'west', dir: [-1, 0, 0], shade: 0.8,
    corners: [
      { p: [0, 0, 0], uv: [0, 0] }, { p: [0, 0, 1], uv: [1, 0] },
      { p: [0, 1, 1], uv: [1, 1] }, { p: [0, 1, 0], uv: [0, 1] }
    ]
  },
  {
    name: 'south', dir: [0, 0, 1], shade: 0.89,
    corners: [
      { p: [0, 0, 1], uv: [0, 0] }, { p: [1, 0, 1], uv: [1, 0] },
      { p: [1, 1, 1], uv: [1, 1] }, { p: [0, 1, 1], uv: [0, 1] }
    ]
  },
  {
    name: 'north', dir: [0, 0, -1], shade: 0.82,
    corners: [
      { p: [1, 0, 0], uv: [0, 0] }, { p: [0, 0, 0], uv: [1, 0] },
      { p: [0, 1, 0], uv: [1, 1] }, { p: [1, 1, 0], uv: [0, 1] }
    ]
  }
]

function tileUV(tile, uq, vq) {
  const col = tile % ATLAS_COLS
  const row = Math.floor(tile / ATLAS_COLS)
  const u0 = col / ATLAS_COLS
  const u1 = (col + 1) / ATLAS_COLS
  const vTop = 1 - row / ATLAS_ROWS
  const vBottom = 1 - (row + 1) / ATLAS_ROWS
  return [u0 + uq * (u1 - u0), vBottom + vq * (vTop - vBottom)]
}

class GeoBuilder {
  constructor() {
    this.position = []
    this.normal = []
    this.uv = []
    this.color = []
    this.index = []
  }

  quad(positions, normal, uvs, colors) {
    const base = this.position.length / 3
    for (let i = 0; i < 4; i++) {
      this.position.push(positions[i][0], positions[i][1], positions[i][2])
      this.normal.push(normal[0], normal[1], normal[2])
      this.uv.push(uvs[i][0], uvs[i][1])
      this.color.push(colors[i], colors[i], colors[i])
    }
    this.index.push(base, base + 1, base + 2, base, base + 2, base + 3)
  }

  isEmpty() { return this.index.length === 0 }

  build() {
    if (!this.index.length) return null
    const g = new THREE.BufferGeometry()
    g.setAttribute('position', new THREE.Float32BufferAttribute(this.position, 3))
    g.setAttribute('normal', new THREE.Float32BufferAttribute(this.normal, 3))
    g.setAttribute('uv', new THREE.Float32BufferAttribute(this.uv, 2))
    g.setAttribute('color', new THREE.Float32BufferAttribute(this.color, 3))
    g.setIndex(this.index)
    g.computeBoundingSphere()
    return g
  }
}

function isOccluderAt(world, x, y, z) {
  const id = world.get(x, y, z)
  const b = BLOCKS[id]
  return b && b.opaque ? 1 : 0
}

function cornerAO(world, x, y, z, face, corner) {
  const axes = face.dir[0] === 0 ? [1, 2] : face.dir[1] === 0 ? [0, 2] : [0, 1]
  const a1 = axes[0], a2 = axes[1]
  const s1 = corner.p[a1] === 1 ? 1 : -1
  const s2 = corner.p[a2] === 1 ? 1 : -1
  const bx = x + face.dir[0], by = y + face.dir[1], bz = z + face.dir[2]
  const o1 = [bx, by, bz]; o1[a1] += s1
  const o2 = [bx, by, bz]; o2[a2] += s2
  const oc = [bx, by, bz]; oc[a1] += s1; oc[a2] += s2
  const side1 = isOccluderAt(world, o1[0], o1[1], o1[2])
  const side2 = isOccluderAt(world, o2[0], o2[1], o2[2])
  const cornerSolid = isOccluderAt(world, oc[0], oc[1], oc[2])
  if (side1 && side2) return 0
  return 3 - (side1 + side2 + cornerSolid)
}

export function buildChunkGeometry(world, cx, cz) {
  const opaque = new GeoBuilder()
  const transparent = new GeoBuilder()
  const plants = new GeoBuilder()
  const baseX = cx * CHUNK_SIZE
  const baseZ = cz * CHUNK_SIZE

  for (let lz = 0; lz < CHUNK_SIZE; lz++) {
    const z = baseZ + lz
    for (let lx = 0; lx < CHUNK_SIZE; lx++) {
      const x = baseX + lx
      for (let y = 0; y < world.height; y++) {
        const id = world.get(x, y, z)
        if (id === AIR) continue
        const block = BLOCKS[id]
        if (!block) continue
        if (block.liquid) continue

        if (block.plant) {
          const tile = block.tile
          const jitter = hash2(x, z, world.seed + 31) * 0.14 - 0.07
          const tint = 0.9 + hash2(x * 3, z * 7, world.seed + 53) * 0.1
          const uv = (u, v) => tileUV(tile, u, v)
          const p1 = [[0.12 + jitter, 0, 0.12 + jitter], [0.88 + jitter, 0, 0.88 + jitter], [0.88 + jitter, 1, 0.88 + jitter], [0.12 + jitter, 1, 0.12 + jitter]]
          const p2 = [[0.12 + jitter, 0, 0.88 - jitter], [0.88 + jitter, 0, 0.12 - jitter], [0.88 + jitter, 1, 0.12 - jitter], [0.12 + jitter, 1, 0.88 - jitter]]
          const worldP = ps => ps.map(p => [lx + p[0], y + p[1], lz + p[2]])
          const shade = [0.92, 0.92, 1.0, 1.0]
          plants.quad(worldP(p1), [0, 0.85, 0.53], [uv(0, 0), uv(1, 0), uv(1, 1), uv(0, 1)], shade.map(s => s * tint))
          plants.quad(worldP(p2), [0.53, 0.85, 0], [uv(0, 0), uv(1, 0), uv(1, 1), uv(0, 1)], shade.map(s => s * tint))
          continue
        }

        const isGlass = id === GLASS_ID
        const target = isGlass ? transparent : opaque

        for (const face of FACES) {
          const nx = x + face.dir[0], ny = y + face.dir[1], nz = z + face.dir[2]
          const neighbor = world.get(nx, ny, nz)
          if (neighbor !== AIR) {
            if (neighbor === id && (id === GLASS_ID || id === WATER_ID)) continue
            const nb = BLOCKS[neighbor]
            if (nb && nb.opaque) continue
          }
          const tile = tileForFace(block, face.name)
          const positions = face.corners.map(c => [lx + c.p[0], y + c.p[1], lz + c.p[2]])
          const uvs = face.corners.map(c => tileUV(tile, c.uv[0], c.uv[1]))
          const colors = face.corners.map(c => {
            if (isGlass) return face.shade
            return face.shade * AO_FACTOR[cornerAO(world, x, y, z, face, c)]
          })
          target.quad(positions, face.dir, uvs, colors)
        }
      }
    }
  }

  return { opaque: opaque.build(), transparent: transparent.build(), plants: plants.build() }
}

export function raycastVoxel(world, origin, direction, maxDistance = 6) {
  const dir = direction.clone().normalize()
  let x = Math.floor(origin.x)
  let y = Math.floor(origin.y)
  let z = Math.floor(origin.z)
  const stepX = dir.x > 0 ? 1 : dir.x < 0 ? -1 : 0
  const stepY = dir.y > 0 ? 1 : dir.y < 0 ? -1 : 0
  const stepZ = dir.z > 0 ? 1 : dir.z < 0 ? -1 : 0
  const tDeltaX = stepX ? Math.abs(1 / dir.x) : Infinity
  const tDeltaY = stepY ? Math.abs(1 / dir.y) : Infinity
  const tDeltaZ = stepZ ? Math.abs(1 / dir.z) : Infinity
  let tMaxX = stepX > 0 ? (x + 1 - origin.x) / dir.x : stepX < 0 ? (origin.x - x) / -dir.x : Infinity
  let tMaxY = stepY > 0 ? (y + 1 - origin.y) / dir.y : stepY < 0 ? (origin.y - y) / -dir.y : Infinity
  let tMaxZ = stepZ > 0 ? (z + 1 - origin.z) / dir.z : stepZ < 0 ? (origin.z - z) / -dir.z : Infinity
  let normal = [0, 0, 0]
  let travelled = 0

  for (let i = 0; i < 256; i++) {
    const id = world.get(x, y, z)
    if (id !== AIR) {
      const block = BLOCKS[id]
      if (block && !block.liquid) return { x, y, z, id, nx: normal[0], ny: normal[1], nz: normal[2], distance: travelled }
    }
    if (tMaxX < tMaxY && tMaxX < tMaxZ) {
      x += stepX; travelled = tMaxX; tMaxX += tDeltaX; normal = [-stepX, 0, 0]
    } else if (tMaxY < tMaxZ) {
      y += stepY; travelled = tMaxY; tMaxY += tDeltaY; normal = [0, -stepY, 0]
    } else {
      z += stepZ; travelled = tMaxZ; tMaxZ += tDeltaZ; normal = [0, 0, -stepZ]
    }
    if (travelled > maxDistance) break
  }
  return null
}
