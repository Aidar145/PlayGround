import * as THREE from '../vendor/three.module.js'

export const TILE_SIZE = 16
export const ATLAS_COLS = 8
export const ATLAS_ROWS = 4
export const ATLAS_WIDTH = TILE_SIZE * ATLAS_COLS
export const ATLAS_HEIGHT = TILE_SIZE * ATLAS_ROWS

export const TILES = {
  grass_top: 0,
  grass_side: 1,
  dirt: 2,
  stone: 3,
  sand: 4,
  log_top: 5,
  log_side: 6,
  leaves: 7,
  planks: 8,
  glass: 9,
  brick: 10,
  cobble: 11,
  water: 12,
  snow: 13,
  sandstone: 14,
  bedrock: 15,
  tallgrass: 16,
  flower_red: 17,
  flower_yellow: 18,
  gravel: 19,
  mossy: 20,
  ice: 21
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

function colorPixel(ctx, ox, oy, x, y, color) {
  ctx.fillStyle = color
  ctx.fillRect(ox + x, oy + y, 1, 1)
}

function fillTile(ctx, tile, color) {
  const ox = (tile % ATLAS_COLS) * TILE_SIZE
  const oy = Math.floor(tile / ATLAS_COLS) * TILE_SIZE
  ctx.fillStyle = color
  ctx.fillRect(ox, oy, TILE_SIZE, TILE_SIZE)
}

function speckle(ctx, tile, rng, shades, density = 0.35) {
  const ox = (tile % ATLAS_COLS) * TILE_SIZE
  const oy = Math.floor(tile / ATLAS_COLS) * TILE_SIZE
  for (let y = 0; y < TILE_SIZE; y++) {
    for (let x = 0; x < TILE_SIZE; x++) {
      if (rng() < density) colorPixel(ctx, ox, oy, x, y, shades[(rng() * shades.length) | 0])
    }
  }
}

function paintGrassTop(ctx) {
  const rng = mulberry32(11)
  fillTile(ctx, TILES.grass_top, '#5b9b36')
  speckle(ctx, TILES.grass_top, rng, ['#68aa3d', '#4f8b2d', '#72b847', '#57952f'], 0.55)
  const ox = 0, oy = 0
  for (let i = 0; i < 18; i++) {
    const x = (rng() * 16) | 0
    const y = (rng() * 16) | 0
    colorPixel(ctx, ox, oy, x, y, rng() < 0.5 ? '#3f7424' : '#7cc24e')
  }
}

function paintGrassSide(ctx) {
  const ox = TILE_SIZE, oy = 0
  const rng = mulberry32(21)
  fillTile(ctx, TILES.grass_side, '#8a5b32')
  speckle(ctx, TILES.grass_side, rng, ['#7a4f2b', '#96653a', '#6d4526', '#a06e40'], 0.4)
  for (let x = 0; x < 16; x++) {
    const depth = 3 + ((rng() * 3) | 0)
    for (let y = 0; y < depth; y++) {
      const c = y === depth - 1 || rng() < 0.25 ? '#427726' : (rng() < 0.4 ? '#5a9733' : '#4d872b')
      colorPixel(ctx, ox, oy, x, y, c)
    }
  }
  for (let i = 0; i < 10; i++) {
    colorPixel(ctx, ox, oy, (rng() * 16) | 0, (rng() * 5) | 0, '#6eaf3c')
  }
}

function paintDirt(ctx) {
  const rng = mulberry32(31)
  fillTile(ctx, TILES.dirt, '#8a5b32')
  speckle(ctx, TILES.dirt, rng, ['#7c4f2b', '#96673b', '#6f4626', '#9d6d3f'], 0.42)
  for (let i = 0; i < 12; i++) colorPixel(ctx, 32 + ((rng() * 16) | 0), ((rng() * 16) | 0), 0, 0, '#5f3c21')
}

function paintStone(ctx) {
  const rng = mulberry32(41)
  fillTile(ctx, TILES.stone, '#8b8b8b')
  speckle(ctx, TILES.stone, rng, ['#7d7d7d', '#999999', '#848484', '#a3a3a3', '#727272'], 0.5)
  const cracks = [[2, 4], [3, 5], [4, 6], [5, 6], [6, 7], [11, 2], [12, 3], [12, 4], [13, 4]]
  for (const [x, y] of cracks) colorPixel(ctx, 48, 0, x, y, '#636363')
}

function paintSand(ctx) {
  const rng = mulberry32(51)
  fillTile(ctx, TILES.sand, '#ddcf9c')
  speckle(ctx, TILES.sand, rng, ['#e8dcac', '#cfc08b', '#d5c693', '#f0e4b7'], 0.45)
  for (let i = 0; i < 8; i++) colorPixel(ctx, 64, 0, (rng() * 16) | 0, (rng() * 16) | 0, '#bcae7a')
}

function paintLogTop(ctx) {
  const ox = 80, oy = 0
  const rng = mulberry32(61)
  fillTile(ctx, TILES.log_top, '#b4874b')
  for (let y = 0; y < 16; y++) {
    for (let x = 0; x < 16; x++) {
      const dx = x - 7.5, dy = y - 7.5
      const d = Math.max(Math.abs(dx), Math.abs(dy))
      const ring = Math.floor(d) % 3
      const c = ['#a87a40', '#c29454', '#956b38'][ring]
      colorPixel(ctx, ox, oy, x, y, rng() < 0.15 ? '#8c6332' : c)
    }
  }
  for (let x = 6; x < 10; x++) for (let y = 6; y < 10; y++) colorPixel(ctx, ox, oy, x, y, '#7d572b')
  colorPixel(ctx, ox, oy, 7, 7, '#5f3f1c')
  colorPixel(ctx, ox, oy, 8, 8, '#5f3f1c')
}

function paintLogSide(ctx) {
  const ox = 96, oy = 0
  const rng = mulberry32(71)
  fillTile(ctx, TILES.log_side, '#7d5528')
  for (let x = 0; x < 16; x++) {
    const base = ['#875c2d', '#7a5227', '#936833', '#6f4a22'][(rng() * 4) | 0]
    for (let y = 0; y < 16; y++) {
      let c = base
      if (rng() < 0.18) c = '#5d3d1b'
      if (rng() < 0.08) c = '#a2743a'
      colorPixel(ctx, ox, oy, x, y, c)
    }
  }
  for (let i = 0; i < 5; i++) {
    const x = (rng() * 16) | 0
    for (let y = 0; y < 16; y++) if (rng() < 0.6) colorPixel(ctx, ox, oy, x, y, '#5a3a19')
  }
}

function paintLeaves(ctx) {
  const ox = 112, oy = 0
  const rng = mulberry32(81)
  ctx.clearRect(ox, oy, 16, 16)
  for (let y = 0; y < 16; y++) {
    for (let x = 0; x < 16; x++) {
      const r = rng()
      if (r < 0.13) continue
      const shade = r < 0.3 ? '#2f6224' : r < 0.55 ? '#3f7f2d' : r < 0.8 ? '#4d9237' : '#5da23f'
      colorPixel(ctx, ox, oy, x, y, shade)
    }
  }
  for (let i = 0; i < 7; i++) colorPixel(ctx, ox, oy, (rng() * 16) | 0, (rng() * 16) | 0, '#244d1b')
}

function paintPlanks(ctx) {
  const ox = 0, oy = TILE_SIZE
  const rng = mulberry32(91)
  fillTile(ctx, TILES.planks, '#b58a52')
  for (let y = 0; y < 16; y++) {
    for (let x = 0; x < 16; x++) {
      let c = '#b58a52'
      if (y % 4 === 3) c = '#7f5c31'
      else if (rng() < 0.25) c = rng() < 0.5 ? '#a67c46' : '#c3975b'
      if (x % 8 === 7 && y % 4 !== 3) c = '#946c3c'
      colorPixel(ctx, ox, oy, x, y, c)
    }
  }
  for (let y = 0; y < 16; y += 4) {
    const seam = (y / 4) % 2 === 0 ? 7 : 15
    for (let x = 0; x < 16; x++) colorPixel(ctx, ox, oy, x, y + 3, '#6d4d27')
    for (let x = seam; x < Math.min(16, seam + 1); x++) if (y + 2 < 16) colorPixel(ctx, ox, oy, x, y + 2, '#74512a')
  }
}

function paintGlass(ctx) {
  const ox = TILE_SIZE, oy = TILE_SIZE
  const rng = mulberry32(101)
  ctx.clearRect(ox, oy, 16, 16)
  ctx.fillStyle = 'rgba(170, 220, 255, 0.14)'
  ctx.fillRect(ox, oy, 16, 16)
  for (let i = 0; i < 16; i++) {
    colorPixel(ctx, ox, oy, i, 0, 'rgba(220,245,255,0.75)')
    colorPixel(ctx, ox, oy, i, 15, 'rgba(170,215,240,0.55)')
    colorPixel(ctx, ox, oy, 0, i, 'rgba(220,245,255,0.75)')
    colorPixel(ctx, ox, oy, 15, i, 'rgba(170,215,240,0.55)')
  }
  for (let i = 3; i < 10; i++) colorPixel(ctx, ox, oy, i, 13 - i, 'rgba(255,255,255,0.55)')
  for (let i = 6; i < 10; i++) colorPixel(ctx, ox, oy, i, 14 - i, 'rgba(255,255,255,0.3)')
  for (let i = 0; i < 6; i++) colorPixel(ctx, ox, oy, (rng() * 16) | 0, (rng() * 16) | 0, 'rgba(255,255,255,0.28)')
}

function paintBrick(ctx) {
  const ox = 32, oy = TILE_SIZE
  const rng = mulberry32(111)
  fillTile(ctx, TILES.brick, '#c8b6a0')
  for (let row = 0; row < 4; row++) {
    const y0 = row * 4
    const offset = row % 2 === 0 ? 0 : 4
    for (let brick = 0; brick < 2; brick++) {
      const x0 = offset + brick * 8
      for (let y = y0 + 1; y < y0 + 4; y++) {
        for (let x = x0; x < x0 + 7; x++) {
          if (x < 0 || x > 15) continue
          const c = rng() < 0.18 ? '#8a3f35' : (rng() < 0.25 ? '#ad5747' : '#9d4a3d')
          colorPixel(ctx, ox, oy, x, y, c)
        }
      }
      if (x0 - 1 >= 0) for (let y = y0 + 1; y < y0 + 4; y++) colorPixel(ctx, ox, oy, x0 - 1, y, '#c8b6a0')
    }
  }
}

function paintCobble(ctx) {
  const ox = 48, oy = TILE_SIZE
  const rng = mulberry32(121)
  fillTile(ctx, TILES.cobble, '#6c6c6c')
  const stones = [
    [1, 1, 6, 5], [8, 1, 6, 4], [2, 7, 4, 5], [7, 6, 4, 4], [12, 6, 3, 5],
    [1, 13, 5, 2], [7, 11, 4, 4], [12, 12, 3, 3], [13, 1, 2, 3]
  ]
  for (const [x0, y0, w, h] of stones) {
    const base = ['#8e8e8e', '#7f7f7f', '#999999', '#747474'][(rng() * 4) | 0]
    for (let y = y0; y < Math.min(16, y0 + h); y++) {
      for (let x = x0; x < Math.min(16, x0 + w); x++) {
        let c = base
        if (x === x0 || y === y0) c = '#a7a7a7'
        else if (x === Math.min(15, x0 + w - 1) || y === Math.min(15, y0 + h - 1)) c = '#5c5c5c'
        else if (rng() < 0.18) c = '#6b6b6b'
        colorPixel(ctx, ox, oy, x, y, c)
      }
    }
  }
}

function paintWater(ctx) {
  const ox = 64, oy = TILE_SIZE
  const rng = mulberry32(131)
  fillTile(ctx, TILES.water, '#2f75b8')
  for (let y = 0; y < 16; y++) {
    for (let x = 0; x < 16; x++) {
      const wave = Math.sin((x + y * 0.6) * 0.8) * 0.5 + 0.5
      let c = wave > 0.68 ? '#3f8fd2' : wave > 0.36 ? '#2f7bbf' : '#2a6ba8'
      if (rng() < 0.1) c = '#57a4df'
      colorPixel(ctx, ox, oy, x, y, c)
    }
  }
  for (let i = 0; i < 3; i++) {
    const y = (rng() * 16) | 0
    for (let x = 2; x < 13; x++) if (rng() < 0.55) colorPixel(ctx, ox, oy, x, y, '#8ec9ee')
  }
}

function paintSnow(ctx) {
  const rng = mulberry32(141)
  fillTile(ctx, TILES.snow, '#eef6ff')
  speckle(ctx, TILES.snow, rng, ['#dce9f8', '#ffffff', '#ccdcef', '#f7fbff'], 0.4)
}

function paintSandstone(ctx) {
  const ox = 96, oy = TILE_SIZE
  const rng = mulberry32(151)
  fillTile(ctx, TILES.sandstone, '#d8c58d')
  for (let y = 0; y < 16; y++) {
    for (let x = 0; x < 16; x++) {
      let c = '#d8c58d'
      if (y === 3 || y === 4) c = '#c6b37c'
      else if (y === 10) c = '#c9b67f'
      else if (rng() < 0.16) c = rng() < 0.5 ? '#e3d19a' : '#cbb87f'
      colorPixel(ctx, ox, oy, x, y, c)
    }
  }
  for (let x = 0; x < 16; x++) colorPixel(ctx, ox, oy, x, 11, '#bfa974')
}

function paintBedrock(ctx) {
  const ox = 112, oy = TILE_SIZE
  const rng = mulberry32(161)
  fillTile(ctx, TILES.bedrock, '#3b3b3b')
  for (let y = 0; y < 16; y++) {
    for (let x = 0; x < 16; x++) {
      const r = rng()
      const c = r < 0.2 ? '#222222' : r < 0.45 ? '#545454' : r < 0.7 ? '#333333' : r < 0.85 ? '#656565' : '#2a2a2a'
      colorPixel(ctx, ox, oy, x, y, c)
    }
  }
}

function paintTallgrass(ctx) {
  const ox = 0, oy = 32
  const rng = mulberry32(171)
  ctx.clearRect(ox, oy, 16, 16)
  const blades = [[3, 15, 7], [6, 15, 10], [8, 15, 8], [11, 15, 6], [13, 15, 9], [5, 15, 5]]
  for (const [x, baseY, height] of blades) {
    const bend = rng() < 0.5 ? -1 : 1
    for (let i = 0; i < height; i++) {
      const y = baseY - i
      const xx = x + (i > height * 0.6 ? bend : 0)
      colorPixel(ctx, ox, oy, xx, y, i > height - 3 ? '#7dbb4b' : (rng() < 0.3 ? '#4e8a2d' : '#5f9f37'))
    }
  }
}

function paintFlower(ctx, tile, petal, center, seed) {
  const ox = (tile % ATLAS_COLS) * TILE_SIZE
  const oy = Math.floor(tile / ATLAS_COLS) * TILE_SIZE
  const rng = mulberry32(seed)
  ctx.clearRect(ox, oy, 16, 16)
  for (let y = 8; y < 16; y++) colorPixel(ctx, ox, oy, 8, y, '#3f7a2a')
  colorPixel(ctx, ox, oy, 7, 12, '#4f9333')
  colorPixel(ctx, ox, oy, 6, 11, '#4f9333')
  colorPixel(ctx, ox, oy, 9, 13, '#4f9333')
  for (const [dx, dy] of [[0, -2], [-1, -2], [1, -2], [-1, -1], [1, -1], [0, -3]]) {
    colorPixel(ctx, ox, oy, 8 + dx, 6 + dy, petal)
  }
  colorPixel(ctx, ox, oy, 8, 5, petal)
  colorPixel(ctx, ox, oy, 8, 4, petal)
  colorPixel(ctx, ox, oy, 7, 4, petal)
  colorPixel(ctx, ox, oy, 9, 4, petal)
  colorPixel(ctx, ox, oy, 8, 6, center)
  colorPixel(ctx, ox, oy, 8, 7, center)
}

function paintGravel(ctx) {
  const rng = mulberry32(191)
  fillTile(ctx, TILES.gravel, '#8b8782')
  const shades = ['#6e6a66', '#9d9994', '#7d7974', '#b0aca6', '#5c5955']
  for (let i = 0; i < 45; i++) {
    const x = (rng() * 16) | 0
    const y = (rng() * 16) | 0
    const c = shades[(rng() * shades.length) | 0]
    colorPixel(ctx, 48, 32, x, y, c)
    if (rng() < 0.4) colorPixel(ctx, 48, 32, (x + 1) % 16, y, c)
  }
}

function paintMossy(ctx) {
  const ox = 64, oy = 32
  const rng = mulberry32(201)
  fillTile(ctx, TILES.mossy, '#7f7f7f')
  speckle(ctx, TILES.mossy, rng, ['#737373', '#8c8c8c', '#6b6b6b'], 0.4)
  for (let i = 0; i < 60; i++) {
    const x = (rng() * 16) | 0
    const y = (rng() * 16) | 0
    const c = rng() < 0.4 ? '#3f752e' : rng() < 0.7 ? '#4f8a37' : '#356425'
    colorPixel(ctx, ox, oy, x, y, c)
  }
}

function paintIce(ctx) {
  const ox = 80, oy = 32
  const rng = mulberry32(211)
  ctx.clearRect(ox, oy, 16, 16)
  ctx.fillStyle = 'rgba(150, 210, 245, 0.78)'
  ctx.fillRect(ox, oy, 16, 16)
  for (let i = 0; i < 24; i++) {
    colorPixel(ctx, ox, oy, (rng() * 16) | 0, (rng() * 16) | 0, rng() < 0.5 ? 'rgba(230,248,255,0.7)' : 'rgba(110,180,225,0.5)')
  }
  for (let i = 3; i < 12; i++) colorPixel(ctx, ox, oy, i, 14 - i, 'rgba(255,255,255,0.45)')
}

export const atlasCanvas = document.createElement('canvas')
atlasCanvas.width = ATLAS_WIDTH
atlasCanvas.height = ATLAS_HEIGHT
const ctx2d = atlasCanvas.getContext('2d', { willReadFrequently: true })
ctx2d.imageSmoothingEnabled = false

paintGrassTop(ctx2d)
paintGrassSide(ctx2d)
paintDirt(ctx2d)
paintStone(ctx2d)
paintSand(ctx2d)
paintLogTop(ctx2d)
paintLogSide(ctx2d)
paintLeaves(ctx2d)
paintPlanks(ctx2d)
paintGlass(ctx2d)
paintBrick(ctx2d)
paintCobble(ctx2d)
paintWater(ctx2d)
paintSnow(ctx2d)
paintSandstone(ctx2d)
paintBedrock(ctx2d)
paintTallgrass(ctx2d)
paintFlower(ctx2d, TILES.flower_red, '#d23a34', '#f5d442', 221)
paintFlower(ctx2d, TILES.flower_yellow, '#f2c531', '#8d5a1e', 231)
paintGravel(ctx2d)
paintMossy(ctx2d)
paintIce(ctx2d)

export const atlasTexture = new THREE.CanvasTexture(atlasCanvas)
atlasTexture.magFilter = THREE.NearestFilter
atlasTexture.minFilter = THREE.NearestFilter
atlasTexture.generateMipmaps = false
atlasTexture.colorSpace = THREE.SRGBColorSpace
atlasTexture.wrapS = THREE.ClampToEdgeWrapping
atlasTexture.wrapT = THREE.ClampToEdgeWrapping

const averageCache = new Map()
export function tileAverageColor(tile) {
  if (averageCache.has(tile)) return averageCache.get(tile)
  const ox = (tile % ATLAS_COLS) * TILE_SIZE
  const oy = Math.floor(tile / ATLAS_COLS) * TILE_SIZE
  const data = ctx2d.getImageData(ox, oy, TILE_SIZE, TILE_SIZE).data
  let r = 0, g = 0, b = 0, n = 0
  for (let i = 0; i < data.length; i += 4) {
    if (data[i + 3] < 32) continue
    r += data[i]; g += data[i + 1]; b += data[i + 2]; n++
  }
  const color = n ? `rgb(${Math.round(r / n)}, ${Math.round(g / n)}, ${Math.round(b / n)})` : 'rgb(120,120,120)'
  averageCache.set(tile, color)
  return color
}

export const BLOCKS = []
export const BLOCK_BY_KEY = {}

function defineBlock(def) {
  const block = Object.assign({
    solid: true,
    opaque: true,
    cutout: false,
    liquid: false,
    plant: false,
    tile: null,
    tiles: null,
    sound: 'stone'
  }, def)
  BLOCKS[block.id] = block
  BLOCK_BY_KEY[block.key] = block
  return block
}

defineBlock({ id: 1, key: 'grass', name: 'Grass Block', tiles: { top: TILES.grass_top, bottom: TILES.dirt, side: TILES.grass_side }, sound: 'grass' })
defineBlock({ id: 2, key: 'dirt', name: 'Dirt', tiles: { top: TILES.dirt, bottom: TILES.dirt, side: TILES.dirt }, sound: 'dirt' })
defineBlock({ id: 3, key: 'stone', name: 'Stone', tiles: { top: TILES.stone, bottom: TILES.stone, side: TILES.stone }, sound: 'stone' })
defineBlock({ id: 4, key: 'sand', name: 'Sand', tiles: { top: TILES.sand, bottom: TILES.sand, side: TILES.sand }, sound: 'sand' })
defineBlock({ id: 5, key: 'log', name: 'Oak Log', tiles: { top: TILES.log_top, bottom: TILES.log_top, side: TILES.log_side }, sound: 'wood' })
defineBlock({ id: 6, key: 'leaves', name: 'Oak Leaves', tiles: { top: TILES.leaves, bottom: TILES.leaves, side: TILES.leaves }, opaque: false, cutout: true, sound: 'grass' })
defineBlock({ id: 7, key: 'planks', name: 'Oak Planks', tiles: { top: TILES.planks, bottom: TILES.planks, side: TILES.planks }, sound: 'wood' })
defineBlock({ id: 8, key: 'glass', name: 'Glass', tiles: { top: TILES.glass, bottom: TILES.glass, side: TILES.glass }, opaque: false, sound: 'glass' })
defineBlock({ id: 9, key: 'brick', name: 'Bricks', tiles: { top: TILES.brick, bottom: TILES.brick, side: TILES.brick }, sound: 'stone' })
defineBlock({ id: 10, key: 'cobble', name: 'Cobblestone', tiles: { top: TILES.cobble, bottom: TILES.cobble, side: TILES.cobble }, sound: 'stone' })
defineBlock({ id: 11, key: 'water', name: 'Water', tiles: { top: TILES.water, bottom: TILES.water, side: TILES.water }, solid: false, opaque: false, liquid: true, sound: 'water' })
defineBlock({ id: 12, key: 'snow', name: 'Snow', tiles: { top: TILES.snow, bottom: TILES.dirt, side: TILES.snow }, sound: 'snow' })
defineBlock({ id: 13, key: 'sandstone', name: 'Sandstone', tiles: { top: TILES.sandstone, bottom: TILES.sandstone, side: TILES.sandstone }, sound: 'stone' })
defineBlock({ id: 14, key: 'bedrock', name: 'Bedrock', tiles: { top: TILES.bedrock, bottom: TILES.bedrock, side: TILES.bedrock }, sound: 'stone' })
defineBlock({ id: 15, key: 'tallgrass', name: 'Tall Grass', tile: TILES.tallgrass, solid: false, opaque: false, cutout: true, plant: true, sound: 'grass' })
defineBlock({ id: 16, key: 'flower_red', name: 'Red Flower', tile: TILES.flower_red, solid: false, opaque: false, cutout: true, plant: true, sound: 'grass' })
defineBlock({ id: 17, key: 'flower_yellow', name: 'Yellow Flower', tile: TILES.flower_yellow, solid: false, opaque: false, cutout: true, plant: true, sound: 'grass' })
defineBlock({ id: 18, key: 'gravel', name: 'Gravel', tiles: { top: TILES.gravel, bottom: TILES.gravel, side: TILES.gravel }, sound: 'sand' })
defineBlock({ id: 19, key: 'mossy', name: 'Mossy Stone', tiles: { top: TILES.mossy, bottom: TILES.mossy, side: TILES.mossy }, sound: 'stone' })
defineBlock({ id: 20, key: 'ice', name: 'Ice', tiles: { top: TILES.ice, bottom: TILES.ice, side: TILES.ice }, opaque: false, sound: 'glass' })

export const AIR = 0
export const HOTBAR_IDS = [1, 2, 3, 4, 5, 6, 7, 8, 9]

export function tileForFace(block, face) {
  if (block.plant) return block.tile
  if (!block.tiles) return block.tile
  if (face === 'top') return block.tiles.top
  if (face === 'bottom') return block.tiles.bottom
  return block.tiles.side
}
