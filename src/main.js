import * as THREE from '../vendor/three.module.js'
import {
  World, buildChunkGeometry, raycastVoxel, fbm2,
  WORLD_SIZE, WORLD_HEIGHT, CHUNK_SIZE, CHUNKS, SEA_LEVEL, WATER_SURFACE
} from './world.js'
import {
  BLOCKS, HOTBAR_IDS, AIR, atlasCanvas, atlasTexture,
  tileForFace, tileAverageColor, TILE_SIZE, ATLAS_COLS, ATLAS_ROWS
} from './textures.js'
import { SoundEngine } from './audio.js'

const SAVE_KEY = 'minecraft3d.save.v1'
const DEFAULT_SEED = 8675309
const CURATED_SPAWN = { x: 58.5, z: 71.5, yaw: 1.0471975511965976, pitch: -0.09 }
const params = new URLSearchParams(location.search)
const seedParam = params.has('seed') ? Number(params.get('seed')) : null
const forceFresh = params.has('fresh')
const isTouch = matchMedia('(pointer: coarse)').matches || navigator.maxTouchPoints > 0

const canvas = document.getElementById('game')
const bootEl = document.getElementById('boot')
const pauseEl = document.getElementById('pause')
const hudEl = document.getElementById('hud')
const playBtn = document.getElementById('play')
const newStartBtn = document.getElementById('new-start')
const bootStatus = document.getElementById('boot-status')
const progressEl = document.getElementById('progress')
const progressBar = document.getElementById('progress-bar')
const slotsEl = document.getElementById('slots')
const slotNameEl = document.getElementById('slot-name')
const toastEl = document.getElementById('toast')
const statsFps = document.getElementById('stat-fps')
const statsPos = document.getElementById('stat-pos')
const waterOverlay = document.getElementById('water-overlay')
const touchEl = document.getElementById('touch')

const sound = new SoundEngine()

const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: 'high-performance' })
renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2))
renderer.setSize(window.innerWidth, window.innerHeight)
renderer.outputColorSpace = THREE.SRGBColorSpace
renderer.shadowMap.enabled = true
renderer.shadowMap.type = THREE.PCFSoftShadowMap

const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1200)
camera.rotation.order = 'YXZ'

const defaultFog = new THREE.Color(0xbfe0f5)
scene.fog = new THREE.FogExp2(defaultFog.getHex(), 0.0072)

const hemi = new THREE.HemisphereLight(0xbfe7ff, 0x4a6b3a, 0.75)
scene.add(hemi)
const ambient = new THREE.AmbientLight(0xffffff, 0.12)
scene.add(ambient)

const sunLight = new THREE.DirectionalLight(0xfff1c9, 1.35)
sunLight.castShadow = true
sunLight.shadow.mapSize.set(2048, 2048)
sunLight.shadow.camera.left = -52
sunLight.shadow.camera.right = 52
sunLight.shadow.camera.top = 52
sunLight.shadow.camera.bottom = -52
sunLight.shadow.camera.near = 1
sunLight.shadow.camera.far = 260
sunLight.shadow.bias = -0.00035
sunLight.shadow.normalBias = 0.035
sunLight.shadow.camera.updateProjectionMatrix()
scene.add(sunLight)
scene.add(sunLight.target)

const materials = {
  opaque: new THREE.MeshLambertMaterial({ map: atlasTexture, vertexColors: true, alphaTest: 0.5 }),
  transparent: new THREE.MeshLambertMaterial({
    map: atlasTexture, vertexColors: true, transparent: true, alphaTest: 0.015,
    depthWrite: false, side: THREE.DoubleSide
  }),
  plants: new THREE.MeshLambertMaterial({
    map: atlasTexture, vertexColors: true, alphaTest: 0.5, side: THREE.DoubleSide
  })
}

const chunkObjects = new Map()
let world = null
let player = null
let ready = false
let mode = 'loading'
let selected = 0
let dayTime = 0.34
let dirty = false
let target = null
let lockRequestedAt = 0
let saveTimer = 0
let toastTimer = 0

const keys = new Set()
const touchInput = { x: 0, y: 0, jump: false, break: false, place: false }
const mouseHeld = { left: false, right: false }
let breakCooldown = 0
let placeCooldown = 0
let lookPointer = null
let lookX = 0
let lookY = 0

const effects = {
  jump: () => sound.jump(),
  land: () => sound.land(),
  splash: () => sound.splash(),
  step: (blockSound) => sound.step(blockSound),
  respawn: () => showToast('You fell out of the world — respawned!')
}

class Player {
  constructor(world, spawn) {
    this.world = world
    this.pos = new THREE.Vector3(spawn.x, spawn.y, spawn.z)
    this.vel = new THREE.Vector3()
    this.width = 0.6
    this.height = 1.8
    this.eyeHeight = 1.62
    this.yaw = -0.62
    this.pitch = -0.12
    this.flying = false
    this.onGround = false
    this.inWater = false
    this.wasInWater = false
    this.bobPhase = 0
    this.bob = 0
    this.sway = 0
    this.stepDistance = 0
    this.fallSpeed = 0
    this.events = effects
  }

  update(dt, input) {
    const wasGround = this.onGround
    const world = this.world
    this.fallSpeed = Math.max(this.fallSpeed, -this.vel.y)
    this.inWater = world.isWater(this.pos.x, this.pos.y + 0.35, this.pos.z) ||
      world.isWater(this.pos.x, this.pos.y + 1.15, this.pos.z)

    const len = Math.hypot(input.forward, input.strafe)
    let wx = 0, wz = 0
    if (len > 0.001) {
      const f = input.forward / len
      const s = input.strafe / len
      wx = -Math.sin(this.yaw) * f + Math.cos(this.yaw) * s
      wz = -Math.cos(this.yaw) * f - Math.sin(this.yaw) * s
    }

    const sprint = input.sprint && !this.flying
    const speed = this.flying ? (input.fast ? 19 : 10) : this.inWater ? 3.4 : sprint ? 6.2 : 4.4
    const accel = this.flying ? 12 : this.inWater ? 6 : this.onGround ? 16 : 5.5
    const blend = 1 - Math.exp(-accel * dt)
    this.vel.x += (wx * speed - this.vel.x) * blend
    this.vel.z += (wz * speed - this.vel.z) * blend

    if (this.flying) {
      const targetY = input.jump ? 7 : input.down ? -7 : 0
      this.vel.y += (targetY - this.vel.y) * (1 - Math.exp(-9 * dt))
    } else if (this.inWater) {
      const targetY = input.jump ? 3.3 : input.down ? -3.3 : -0.5
      this.vel.y += (targetY - this.vel.y) * (1 - Math.exp(-5 * dt))
      if (input.jump) this.events.splash()
    } else {
      if (input.jump && this.onGround) {
        this.vel.y = 8.4
        this.onGround = false
        this.events.jump()
      }
      this.vel.y -= 26 * dt
      if (this.vel.y < -50) this.vel.y = -50
    }

    this.onGround = false
    this.moveAxis('x', this.vel.x * dt)
    this.moveAxis('z', this.vel.z * dt)
    this.moveAxis('y', this.vel.y * dt)

    this.pos.x = Math.min(WORLD_SIZE - 0.32, Math.max(0.32, this.pos.x))
    this.pos.z = Math.min(WORLD_SIZE - 0.32, Math.max(0.32, this.pos.z))

    if (this.inWater && !this.wasInWater && this.fallSpeed > 4) this.events.splash()
    this.wasInWater = this.inWater
    if (!wasGround && this.onGround && this.fallSpeed > 4.5) {
      this.events.land()
      this.fallSpeed = 0
    }
    if (this.onGround) this.fallSpeed = 0

    const horiz = Math.hypot(this.vel.x, this.vel.z)
    if (this.onGround && !this.inWater && horiz > 0.8) {
      this.stepDistance += horiz * dt
      const stride = sprint ? 2.7 : 2.2
      if (this.stepDistance > stride) {
        this.stepDistance = 0
        const under = world.get(Math.floor(this.pos.x), Math.floor(this.pos.y - 0.2), Math.floor(this.pos.z))
        this.events.step((BLOCKS[under] && BLOCKS[under].sound) || 'grass')
      }
    } else {
      this.stepDistance = Math.min(this.stepDistance, 0.5)
    }

    if (this.onGround && horiz > 0.5) this.bobPhase += dt * (sprint ? 13 : 9)
    this.bob = this.onGround ? Math.sin(this.bobPhase * 2) * 0.03 * Math.min(1, horiz / 4.4) : 0
    this.sway = this.onGround ? Math.cos(this.bobPhase) * 0.012 * Math.min(1, horiz / 4.4) : 0

    if (this.pos.y < -12) this.respawn()
  }

  moveAxis(axis, delta) {
    if (!delta) return
    this.pos[axis] += delta
    const eps = 1e-4
    const minX = this.pos.x - this.width / 2 + eps
    const maxX = this.pos.x + this.width / 2 - eps
    const minY = this.pos.y + eps
    const maxY = this.pos.y + this.height - eps
    const minZ = this.pos.z - this.width / 2 + eps
    const maxZ = this.pos.z + this.width / 2 - eps
    const x0 = Math.floor(minX), x1 = Math.floor(maxX)
    const y0 = Math.floor(minY), y1 = Math.floor(maxY)
    const z0 = Math.floor(minZ), z1 = Math.floor(maxZ)
    let resolved = this.pos[axis]
    let collided = false

    for (let y = y0; y <= y1; y++) {
      for (let z = z0; z <= z1; z++) {
        for (let x = x0; x <= x1; x++) {
          if (!this.world.isSolid(x, y, z)) continue
          collided = true
          if (axis === 'x') {
            if (delta > 0) resolved = Math.min(resolved, x - this.width / 2 - eps)
            else resolved = Math.max(resolved, x + 1 + this.width / 2 + eps)
          } else if (axis === 'z') {
            if (delta > 0) resolved = Math.min(resolved, z - this.width / 2 - eps)
            else resolved = Math.max(resolved, z + 1 + this.width / 2 + eps)
          } else {
            if (delta > 0) resolved = Math.min(resolved, y - this.height - eps)
            else resolved = Math.max(resolved, y + 1 + eps)
          }
        }
      }
    }

    if (collided) {
      this.pos[axis] = resolved
      if (axis === 'y' && delta < 0) this.onGround = true
      this.vel[axis] = 0
    }
  }

  respawn() {
    const spawn = this.world.findSpawn()
    this.pos.set(spawn.x, spawn.y + 0.2, spawn.z)
    this.vel.set(0, 0, 0)
    this.events.respawn()
  }

  intersectsBlock(x, y, z) {
    const eps = 1e-3
    return this.pos.x + this.width / 2 > x + eps &&
      this.pos.x - this.width / 2 < x + 1 - eps &&
      this.pos.y + this.height > y + eps &&
      this.pos.y < y + 1 - eps &&
      this.pos.z + this.width / 2 > z + eps &&
      this.pos.z - this.width / 2 < z + 1 - eps
  }
}

function rebuildChunk(cx, cz) {
  if (cx < 0 || cz < 0 || cx >= CHUNKS || cz >= CHUNKS) return
  const key = `${cx},${cz}`
  removeChunk(key)
  const geo = buildChunkGeometry(world, cx, cz)
  const entry = {}
  if (geo.opaque) {
    const mesh = new THREE.Mesh(geo.opaque, materials.opaque)
    mesh.position.set(cx * CHUNK_SIZE, 0, cz * CHUNK_SIZE)
    mesh.castShadow = true
    mesh.receiveShadow = true
    scene.add(mesh)
    entry.opaque = mesh
  }
  if (geo.transparent) {
    const mesh = new THREE.Mesh(geo.transparent, materials.transparent)
    mesh.position.set(cx * CHUNK_SIZE, 0, cz * CHUNK_SIZE)
    mesh.receiveShadow = true
    mesh.renderOrder = 2
    scene.add(mesh)
    entry.transparent = mesh
  }
  if (geo.plants) {
    const mesh = new THREE.Mesh(geo.plants, materials.plants)
    mesh.position.set(cx * CHUNK_SIZE, 0, cz * CHUNK_SIZE)
    mesh.receiveShadow = true
    mesh.castShadow = true
    scene.add(mesh)
    entry.plants = mesh
  }
  chunkObjects.set(key, entry)
}

function removeChunk(key) {
  const entry = chunkObjects.get(key)
  if (!entry) return
  for (const mesh of [entry.opaque, entry.transparent, entry.plants]) {
    if (!mesh) continue
    scene.remove(mesh)
    mesh.geometry.dispose()
  }
  chunkObjects.delete(key)
}

function disposeChunks() {
  for (const key of Array.from(chunkObjects.keys())) removeChunk(key)
}

async function buildAllChunks(onProgress) {
  const total = CHUNKS * CHUNKS
  let done = 0
  for (let cz = 0; cz < CHUNKS; cz++) {
    for (let cx = 0; cx < CHUNKS; cx++) {
      rebuildChunk(cx, cz)
      done++
      if (done % 16 === 0) {
        onProgress(done / total)
        await new Promise(resolve => requestAnimationFrame(resolve))
      }
    }
  }
  onProgress(1)
}

function updateBlockMeshes(x, y, z) {
  const cx = Math.floor(x / CHUNK_SIZE)
  const cz = Math.floor(z / CHUNK_SIZE)
  const dirtyChunks = new Set()
  const add = (a, b) => {
    if (a >= 0 && b >= 0 && a < CHUNKS && b < CHUNKS) dirtyChunks.add(`${a},${b}`)
  }
  add(cx, cz)
  if (x % CHUNK_SIZE === 0) add(cx - 1, cz)
  if (x % CHUNK_SIZE === CHUNK_SIZE - 1) add(cx + 1, cz)
  if (z % CHUNK_SIZE === 0) add(cx, cz - 1)
  if (z % CHUNK_SIZE === CHUNK_SIZE - 1) add(cx, cz + 1)
  for (const key of dirtyChunks) {
    const [a, b] = key.split(',').map(Number)
    rebuildChunk(a, b)
  }
}

const particleCount = 320
const particleGeometry = new THREE.BoxGeometry(1, 1, 1)
const particleMaterial = new THREE.MeshLambertMaterial({ color: 0xffffff })
const particleMesh = new THREE.InstancedMesh(particleGeometry, particleMaterial, particleCount)
particleMesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage)
particleMesh.frustumCulled = false
particleMesh.castShadow = false
particleMesh.receiveShadow = false
scene.add(particleMesh)
const particleDummy = new THREE.Object3D()
const particles = []
let particleColorDirty = false
for (let i = 0; i < particleCount; i++) {
  particles.push({ alive: false, pos: new THREE.Vector3(), vel: new THREE.Vector3(), life: 0, maxLife: 1, size: 0.1, rot: new THREE.Euler(), spin: new THREE.Vector3() })
  particleDummy.position.set(0, -100, 0)
  particleDummy.scale.setScalar(0)
  particleDummy.updateMatrix()
  particleMesh.setMatrixAt(i, particleDummy.matrix)
  particleMesh.setColorAt(i, new THREE.Color(0xffffff))
}
particleMesh.instanceMatrix.needsUpdate = true
particleMesh.instanceColor.needsUpdate = true

function spawnBlockParticles(x, y, z, block, count = 16, intensity = 1) {
  const color = new THREE.Color(tileAverageColor(tileForFace(block, 'side')))
  let spawned = 0
  for (let i = 0; i < particleCount && spawned < count; i++) {
    const p = particles[i]
    if (p.alive) continue
    p.alive = true
    p.life = 0.45 + Math.random() * 0.55
    p.maxLife = p.life
    p.size = 0.055 + Math.random() * 0.1
    p.pos.set(
      x + 0.15 + Math.random() * 0.7,
      y + 0.15 + Math.random() * 0.7,
      z + 0.15 + Math.random() * 0.7
    )
    p.vel.set((Math.random() - 0.5) * 3.6 * intensity, (0.8 + Math.random() * 3.8) * intensity, (Math.random() - 0.5) * 3.6 * intensity)
    p.rot.set(Math.random() * 6, Math.random() * 6, Math.random() * 6)
    p.spin.set((Math.random() - 0.5) * 7, (Math.random() - 0.5) * 7, (Math.random() - 0.5) * 7)
    particleMesh.setColorAt(i, color)
    spawned++
  }
  if (spawned) {
    particleMesh.instanceColor.needsUpdate = true
  }
}

function updateParticles(dt) {
  let any = false
  for (let i = 0; i < particleCount; i++) {
    const p = particles[i]
    if (!p.alive) continue
    any = true
    p.life -= dt
    if (p.life <= 0) {
      p.alive = false
      particleDummy.position.set(0, -100, 0)
      particleDummy.scale.setScalar(0)
      particleDummy.updateMatrix()
      particleMesh.setMatrixAt(i, particleDummy.matrix)
      continue
    }
    p.vel.y -= 22 * dt
    p.pos.addScaledVector(p.vel, dt)
    if (p.pos.y < WATER_SURFACE && p.pos.y > WATER_SURFACE - 1) {
      p.vel.y *= -0.2
      p.vel.x *= 0.6
      p.vel.z *= 0.6
    }
    p.rot.x += p.spin.x * dt
    p.rot.y += p.spin.y * dt
    p.rot.z += p.spin.z * dt
    const scale = p.size * Math.min(1, (p.life / p.maxLife) * 2.5)
    particleDummy.position.copy(p.pos)
    particleDummy.rotation.copy(p.rot)
    particleDummy.scale.setScalar(scale)
    particleDummy.updateMatrix()
    particleMesh.setMatrixAt(i, particleDummy.matrix)
  }
  if (any) particleMesh.instanceMatrix.needsUpdate = true
}

const highlight = new THREE.Group()
const highlightBox = new THREE.LineSegments(
  new THREE.EdgesGeometry(new THREE.BoxGeometry(1.004, 1.004, 1.004)),
  new THREE.LineBasicMaterial({ color: 0x0a0a0a, transparent: true, opacity: 0.55 })
)
const highlightFill = new THREE.Mesh(
  new THREE.BoxGeometry(1.01, 1.01, 1.01),
  new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.06, depthWrite: false })
)
highlight.add(highlightBox, highlightFill)
highlight.visible = false
scene.add(highlight)

function makeSky() {
  const uniforms = {
    topColor: { value: new THREE.Color(0x4a9fe8) },
    bottomColor: { value: new THREE.Color(0xbfe4ff) }
  }
  const material = new THREE.ShaderMaterial({
    uniforms,
    vertexShader: `
      varying vec3 vWorldPosition;
      void main() {
        vec4 worldPosition = modelMatrix * vec4(position, 1.0);
        vWorldPosition = worldPosition.xyz;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      uniform vec3 topColor;
      uniform vec3 bottomColor;
      varying vec3 vWorldPosition;
      void main() {
        float h = normalize(vWorldPosition - cameraPosition).y;
        float t = pow(clamp(h * 0.5 + 0.5, 0.0, 1.0), 0.85);
        vec3 col = mix(bottomColor, topColor, t);
        gl_FragColor = vec4(col, 1.0);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }
    `,
    side: THREE.BackSide,
    depthWrite: false,
    depthTest: false,
    fog: false
  })
  const mesh = new THREE.Mesh(new THREE.SphereGeometry(900, 32, 20), material)
  mesh.frustumCulled = false
  mesh.renderOrder = -100
  scene.add(mesh)
  return { mesh, uniforms }
}

const sky = makeSky()

function makeGlowTexture(inner, outer) {
  const c = document.createElement('canvas')
  c.width = c.height = 128
  const g = c.getContext('2d')
  const grad = g.createRadialGradient(64, 64, 2, 64, 64, 64)
  grad.addColorStop(0, inner)
  grad.addColorStop(0.18, inner)
  grad.addColorStop(0.42, outer)
  grad.addColorStop(1, 'rgba(255,255,255,0)')
  g.fillStyle = grad
  g.fillRect(0, 0, 128, 128)
  const tex = new THREE.CanvasTexture(c)
  tex.colorSpace = THREE.SRGBColorSpace
  return tex
}

const sunSprite = new THREE.Sprite(new THREE.SpriteMaterial({
  map: makeGlowTexture('rgba(255,255,240,0.98)', 'rgba(255,204,110,0.35)'),
  transparent: true, depthWrite: false, depthTest: true, blending: THREE.AdditiveBlending, fog: false
}))
sunSprite.scale.set(58, 58, 1)
sunSprite.renderOrder = -90
scene.add(sunSprite)

const moonSprite = new THREE.Sprite(new THREE.SpriteMaterial({
  map: makeGlowTexture('rgba(238,246,255,0.95)', 'rgba(150,180,255,0.18)'),
  transparent: true, depthWrite: false, depthTest: true, blending: THREE.AdditiveBlending, fog: false
}))
moonSprite.scale.set(34, 34, 1)
moonSprite.renderOrder = -90
scene.add(moonSprite)

const starGeometry = new THREE.BufferGeometry()
const starPositions = []
for (let i = 0; i < 700; i++) {
  const theta = Math.random() * Math.PI * 2
  const phi = Math.acos(Math.random())
  const r = 760
  starPositions.push(
    Math.sin(phi) * Math.cos(theta) * r,
    Math.cos(phi) * r,
    Math.sin(phi) * Math.sin(theta) * r
  )
}
starGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starPositions, 3))
const starMaterial = new THREE.PointsMaterial({
  color: 0xffffff, size: 2.1, sizeAttenuation: false,
  transparent: true, opacity: 0, depthWrite: false, fog: false
})
const stars = new THREE.Points(starGeometry, starMaterial)
stars.frustumCulled = false
stars.renderOrder = -95
scene.add(stars)

function makeClouds() {
  const geometry = new THREE.BoxGeometry(1, 1, 1)
  const material = new THREE.MeshLambertMaterial({
    color: 0xffffff, transparent: true, opacity: 0.93, depthWrite: false, fog: true
  })
  const maxBoxes = 520
  const mesh = new THREE.InstancedMesh(geometry, material, maxBoxes)
  mesh.frustumCulled = false
  mesh.castShadow = false
  mesh.receiveShadow = false
  const dummy = new THREE.Object3D()
  const color = new THREE.Color()
  let index = 0
  const clusters = 42
  for (let c = 0; c < clusters && index < maxBoxes; c++) {
    const angle = Math.random() * Math.PI * 2
    const radius = 110 + Math.random() * 560
    const cx = WORLD_SIZE / 2 + Math.cos(angle) * radius
    const cz = WORLD_SIZE / 2 + Math.sin(angle) * radius
    const baseY = 74 + Math.random() * 16
    const boxes = 6 + Math.floor(Math.random() * 9)
    const spreadX = 12 + Math.random() * 22
    const spreadZ = 10 + Math.random() * 20
    for (let b = 0; b < boxes && index < maxBoxes; b++) {
      const sx = 7 + Math.random() * 17
      const sy = 2.2 + Math.random() * 3.2
      const sz = 6 + Math.random() * 14
      dummy.position.set(
        cx + (Math.random() - 0.5) * spreadX * 2,
        baseY + (Math.random() - 0.5) * 3.4,
        cz + (Math.random() - 0.5) * spreadZ * 2
      )
      dummy.scale.set(sx, sy, sz)
      dummy.rotation.set(0, Math.random() < 0.5 ? 0 : Math.PI / 2, 0)
      dummy.updateMatrix()
      mesh.setMatrixAt(index, dummy.matrix)
      color.setRGB(1, 1, 1)
      mesh.setColorAt(index, color)
      index++
    }
  }
  mesh.count = index
  mesh.instanceMatrix.needsUpdate = true
  mesh.instanceColor.needsUpdate = true
  scene.add(mesh)
  return mesh
}

const cloudMesh = makeClouds()
const cloudMaterial = cloudMesh.material

const waterUniforms = {
  uTime: { value: 0 },
  uDeep: { value: new THREE.Color(0x1c5d8f) },
  uShallow: { value: new THREE.Color(0x3c93c9) },
  uSky: { value: new THREE.Color(0x9ed6ef) },
  uSun: { value: new THREE.Color(0xffffff) },
  uSunDir: { value: new THREE.Vector3(0, 1, 0) },
  uFog: { value: new THREE.Color(0xbfe0f5) },
  uFogDensity: { value: 0.0072 }
}
const waterMaterial = new THREE.ShaderMaterial({
  uniforms: waterUniforms,
  transparent: true,
  depthWrite: false,
  side: THREE.DoubleSide,
  fog: false,
  vertexShader: `
    uniform float uTime;
    varying vec3 vWorld;
    varying float vWave;
    void main() {
      vec3 p = position;
      float w1 = sin(p.x * 0.16 + uTime * 0.85) * 0.055;
      float w2 = sin(p.y * 0.21 - uTime * 0.68) * 0.04;
      float w3 = sin((p.x + p.y) * 0.09 + uTime * 0.45) * 0.035;
      p.z += w1 + w2 + w3;
      vWave = w1 + w2 + w3;
      vec4 world = modelMatrix * vec4(p, 1.0);
      vWorld = world.xyz;
      gl_Position = projectionMatrix * viewMatrix * world;
    }
  `,
  fragmentShader: `
    uniform float uTime;
    uniform vec3 uDeep;
    uniform vec3 uShallow;
    uniform vec3 uSky;
    uniform vec3 uSun;
    uniform vec3 uSunDir;
    uniform vec3 uFog;
    uniform float uFogDensity;
    varying vec3 vWorld;
    varying float vWave;
    void main() {
      vec3 viewDir = normalize(cameraPosition - vWorld);
      float fresnel = pow(1.0 - clamp(abs(viewDir.y), 0.0, 1.0), 3.0);
      vec3 col = mix(uDeep, uShallow, clamp(vWave * 4.5 + 0.5, 0.0, 1.0));
      col = mix(col, uSky, fresnel * 0.7);
      float ripple = sin(vWorld.x * 0.55 + uTime * 1.6) * sin(vWorld.z * 0.47 - uTime * 1.15);
      col += vec3(0.045, 0.065, 0.075) * max(ripple, 0.0);
      vec3 n = normalize(vec3(
        sin(vWorld.x * 0.35 + uTime * 0.9) * 0.045,
        1.0,
        cos(vWorld.z * 0.31 - uTime * 0.75) * 0.045
      ));
      vec3 h = normalize(uSunDir + viewDir);
      float spec = pow(max(dot(n, h), 0.0), 140.0);
      col += uSun * spec * 1.1;
      float dist = length(cameraPosition - vWorld);
      float fogF = 1.0 - exp(-uFogDensity * uFogDensity * dist * dist);
      col = mix(col, uFog, clamp(fogF, 0.0, 1.0));
      gl_FragColor = vec4(col, 0.83);
      #include <tonemapping_fragment>
      #include <colorspace_fragment>
    }
  `
})
const ocean = new THREE.Mesh(new THREE.PlaneGeometry(1700, 1700, 90, 90), waterMaterial)
ocean.rotation.x = -Math.PI / 2
ocean.position.set(WORLD_SIZE / 2, WATER_SURFACE + 0.015, WORLD_SIZE / 2)
ocean.frustumCulled = false
ocean.renderOrder = 1
scene.add(ocean)

const skyTop = new THREE.Color()
const skyBottom = new THREE.Color()
const tmpColor = new THREE.Color()
const dayTop = new THREE.Color(0x4a9fe8)
const dayBottom = new THREE.Color(0xc9e9ff)
const duskTop = new THREE.Color(0x2a3468)
const duskBottom = new THREE.Color(0xff9757)
const nightTop = new THREE.Color(0x03040d)
const nightBottom = new THREE.Color(0x0b1631)
const sunWarm = new THREE.Color(0xffd39a)
const sunHigh = new THREE.Color(0xfff3d1)
const moonColor = new THREE.Color(0x9ab8ff)
const sunDir = new THREE.Vector3()
const lightDir = new THREE.Vector3()

function smoothstep(edge0, edge1, x) {
  const t = Math.min(1, Math.max(0, (x - edge0) / (edge1 - edge0)))
  return t * t * (3 - 2 * t)
}

function updateSky(dt) {
  dayTime = (dayTime + dt / 640) % 1
  const angle = (dayTime - 0.25) * Math.PI * 2
  sunDir.set(Math.cos(angle) * 0.86, Math.sin(angle), 0.36).normalize()
  const altitude = sunDir.y
  const day = smoothstep(-0.16, 0.22, altitude)
  const horizon = Math.pow(1 - Math.min(1, Math.abs(altitude) / 0.4), 2)

  skyTop.copy(nightTop).lerp(dayTop, day).lerp(duskTop, horizon * 0.55)
  skyBottom.copy(nightBottom).lerp(dayBottom, day).lerp(duskBottom, horizon * 0.88)
  sky.uniforms.topColor.value.copy(skyTop)
  sky.uniforms.bottomColor.value.copy(skyBottom)
  sky.mesh.position.copy(camera.position)

  let fogDensity = 0.0072
  if (player && world && world.isWater(player.pos.x, player.pos.y + player.eyeHeight, player.pos.z)) {
    tmpColor.set(0x165a83)
    scene.fog.color.copy(tmpColor)
    scene.fog.density = 0.055
    waterOverlay.classList.add('visible')
  } else {
    tmpColor.copy(skyBottom)
    scene.fog.color.copy(tmpColor)
    scene.fog.density = fogDensity
    waterOverlay.classList.remove('visible')
  }
  const fog = scene.fog.color
  waterUniforms.uFog.value.copy(fog)
  waterUniforms.uFogDensity.value = scene.fog.density

  hemi.color.copy(skyTop)
  hemi.color.lerp(tmpColor.set(0xffffff), 0.25)
  hemi.groundColor.set(day > 0.4 ? 0x47643a : 0x1b2618)
  hemi.intensity = 0.3 + day * 0.6

  const above = altitude >= 0
  lightDir.copy(sunDir)
  if (!above) lightDir.negate()
  sunLight.position.copy(player ? player.pos : camera.position).addScaledVector(lightDir, 120)
  sunLight.target.position.copy(player ? player.pos : camera.position)
  sunLight.target.updateMatrixWorld()
  sunLight.color.copy(above ? sunHigh.clone().lerp(sunWarm, horizon) : moonColor)
  sunLight.intensity = above ? 0.45 + day * 1.0 : 0.32

  const anchor = camera.position
  sunSprite.position.copy(anchor).addScaledVector(sunDir, 520)
  sunSprite.material.opacity = smoothstep(-0.12, 0.05, altitude)
  moonSprite.position.copy(anchor).addScaledVector(lightDir, 520)
  moonSprite.material.opacity = above ? 0 : smoothstep(-0.05, 0.18, -altitude)

  starMaterial.opacity = Math.pow(Math.max(0, -altitude * 2.2), 1.4)
  starGeometry.computeBoundingSphere()
  stars.position.copy(anchor)

  cloudMaterial.opacity = 0.5 + day * 0.42
  cloudMaterial.color.copy(tmpColor.set(0xffffff).lerp(nightTop, (1 - day) * 0.5))

  waterUniforms.uTime.value += dt
  waterUniforms.uSunDir.value.copy(lightDir)
  waterUniforms.uSky.value.copy(skyBottom).lerp(skyTop, 0.35)
  waterUniforms.uSun.value.copy(above ? sunWarm : moonColor)
  waterUniforms.uDeep.value.set(day > 0.4 ? 0x1c5d8f : 0x0a2440)
  waterUniforms.uShallow.value.set(day > 0.4 ? 0x3c93c9 : 0x112e4a)
}

function drawBlockIcon(targetCanvas, block) {
  const ctx = targetCanvas.getContext('2d')
  const S = targetCanvas.width
  ctx.clearRect(0, 0, S, S)
  ctx.imageSmoothingEnabled = false
  const A = [S * 0.5, S * 0.08]
  const B = [S * 0.9, S * 0.3]
  const C = [S * 0.5, S * 0.52]
  const D = [S * 0.1, S * 0.3]
  const down = [0, S * 0.36]
  const top = tileForFace(block, 'top')
  const side = tileForFace(block, 'side')

  function face(tile, origin, e1, e2, shade) {
    const col = tile % ATLAS_COLS
    const row = Math.floor(tile / ATLAS_COLS)
    ctx.save()
    ctx.beginPath()
    ctx.moveTo(origin[0], origin[1])
    ctx.lineTo(origin[0] + e1[0], origin[1] + e1[1])
    ctx.lineTo(origin[0] + e1[0] + e2[0], origin[1] + e1[1] + e2[1])
    ctx.lineTo(origin[0] + e2[0], origin[1] + e2[1])
    ctx.closePath()
    ctx.clip()
    ctx.transform(e1[0] / TILE_SIZE, e1[1] / TILE_SIZE, e2[0] / TILE_SIZE, e2[1] / TILE_SIZE, origin[0], origin[1])
    ctx.drawImage(atlasCanvas, col * TILE_SIZE, row * TILE_SIZE, TILE_SIZE, TILE_SIZE, 0, 0, TILE_SIZE, TILE_SIZE)
    ctx.restore()
    if (shade > 0) {
      ctx.save()
      ctx.beginPath()
      ctx.moveTo(origin[0], origin[1])
      ctx.lineTo(origin[0] + e1[0], origin[1] + e1[1])
      ctx.lineTo(origin[0] + e1[0] + e2[0], origin[1] + e1[1] + e2[1])
      ctx.lineTo(origin[0] + e2[0], origin[1] + e2[1])
      ctx.closePath()
      ctx.fillStyle = `rgba(0,0,0,${shade})`
      ctx.fill()
      ctx.restore()
    }
  }

  face(top, D, [A[0] - D[0], A[1] - D[1]], [C[0] - D[0], C[1] - D[1]], 0)
  face(side, D, [C[0] - D[0], C[1] - D[1]], down, 0.2)
  face(side, C, [B[0] - C[0], B[1] - C[1]], down, 0.34)

  ctx.strokeStyle = 'rgba(0,0,0,0.22)'
  ctx.lineWidth = S * 0.018
  ctx.beginPath()
  ctx.moveTo(A[0], A[1]); ctx.lineTo(B[0], B[1]); ctx.lineTo(C[0], C[1]); ctx.lineTo(D[0], D[1]); ctx.closePath()
  ctx.moveTo(D[0], D[1]); ctx.lineTo(D[0] + down[0], D[1] + down[1])
  ctx.lineTo(C[0] + down[0], C[1] + down[1]); ctx.lineTo(C[0], C[1])
  ctx.moveTo(B[0], B[1]); ctx.lineTo(B[0] + down[0], B[1] + down[1])
  ctx.lineTo(C[0] + down[0], C[1] + down[1])
  ctx.stroke()
}

function buildHotbar() {
  HOTBAR_IDS.forEach((id, index) => {
    const block = BLOCKS[id]
    const button = document.createElement('button')
    button.className = 'slot'
    button.type = 'button'
    button.dataset.index = String(index)
    const icon = document.createElement('canvas')
    icon.width = icon.height = 64
    drawBlockIcon(icon, block)
    button.appendChild(icon)
    const key = document.createElement('span')
    key.className = 'slot-key'
    key.textContent = String(index + 1)
    button.appendChild(key)
    button.addEventListener('pointerdown', event => {
      event.stopPropagation()
      selectSlot(index)
    })
    slotsEl.appendChild(button)
  })
}

function selectSlot(index, silent = false) {
  selected = ((index % HOTBAR_IDS.length) + HOTBAR_IDS.length) % HOTBAR_IDS.length
  for (const [i, button] of Array.from(slotsEl.children).entries()) {
    button.classList.toggle('selected', i === selected)
  }
  slotNameEl.textContent = BLOCKS[HOTBAR_IDS[selected]].name
  if (!silent) sound.click()
}

function showToast(text) {
  toastEl.textContent = text
  toastEl.classList.add('visible')
  clearTimeout(toastTimer)
  toastTimer = setTimeout(() => toastEl.classList.remove('visible'), 1800)
}

function currentEye() {
  return camera.position
}

function updateTarget() {
  if (mode !== 'playing' || !player) return
  const dir = new THREE.Vector3()
  camera.getWorldDirection(dir)
  target = raycastVoxel(world, camera.position, dir, 5.5)
  if (target) {
    highlight.visible = true
    highlight.position.set(target.x + 0.5, target.y + 0.5, target.z + 0.5)
  } else {
    highlight.visible = false
  }
}

function breakBlock() {
  if (mode !== 'playing' || !target) return
  const block = BLOCKS[target.id]
  if (!block) return
  if (target.id === 14) {
    showToast('Bedrock is unbreakable')
    return
  }
  const { x, y, z } = target
  spawnBlockParticles(x, y, z, block, 16)
  world.setBlock(x, y, z, AIR)
  updateBlockMeshes(x, y, z)
  const above = world.get(x, y + 1, z)
  if (BLOCKS[above] && BLOCKS[above].plant) {
    spawnBlockParticles(x, y + 1, z, BLOCKS[above], 6, 0.6)
    world.setBlock(x, y + 1, z, AIR)
    updateBlockMeshes(x, y + 1, z)
  }
  sound.breakBlock(block.sound)
  target = null
  highlight.visible = false
  dirty = true
  saveTimer = 0
}

function placeBlock() {
  if (mode !== 'playing' || !target) return
  const id = HOTBAR_IDS[selected]
  const block = BLOCKS[id]
  const x = target.x + target.nx
  const y = target.y + target.ny
  const z = target.z + target.nz
  if (!world.inside(x, y, z)) return
  const existing = world.get(x, y, z)
  if (existing !== AIR && !(BLOCKS[existing] && BLOCKS[existing].plant)) return
  if (player.intersectsBlock(x, y, z)) return
  world.setBlock(x, y, z, id)
  updateBlockMeshes(x, y, z)
  spawnBlockParticles(x, y, z, block, 5, 0.45)
  sound.placeBlock(block.sound)
  dirty = true
  saveTimer = 0
}

function loadSave() {
  try {
    const raw = localStorage.getItem(SAVE_KEY)
    if (!raw) return null
    const data = JSON.parse(raw)
    if (!data || typeof data.seed !== 'number' || !Array.isArray(data.edits)) return null
    return data
  } catch {
    return null
  }
}

function saveGame(notify = false) {
  if (!world || !player) return
  try {
    const payload = {
      version: 1,
      seed: world.seed,
      edits: world.saveEdits(),
      player: {
        x: player.pos.x, y: player.pos.y, z: player.pos.z,
        yaw: player.yaw, pitch: player.pitch, flying: player.flying
      },
      hotbar: selected,
      dayTime,
      muted: sound.muted
    }
    localStorage.setItem(SAVE_KEY, JSON.stringify(payload))
    dirty = false
    if (notify) showToast('World saved')
  } catch {
    if (notify) showToast('Could not save this world')
  }
}

function setPlayerFromSave(saved) {
  if (saved && saved.player) {
    const p = saved.player
    player.pos.set(Number(p.x) || 64.5, Number(p.y) || 30, Number(p.z) || 64.5)
    player.yaw = Number(p.yaw) || 0
    player.pitch = Number(p.pitch) || 0
    player.flying = !!p.flying
    if (world.isSolid(Math.floor(player.pos.x), Math.floor(player.pos.y), Math.floor(player.pos.z))) {
      player.pos.y += 2
    }
  } else {
    const spawn = world.seed === DEFAULT_SEED
      ? { ...CURATED_SPAWN, y: world.getHeight(Math.floor(CURATED_SPAWN.x), Math.floor(CURATED_SPAWN.z)) + 1 }
      : world.findSpawn()
    player.pos.set(spawn.x, spawn.y, spawn.z)
    player.yaw = spawn.yaw ?? -0.62
    player.pitch = spawn.pitch ?? -0.12
    player.flying = false
    const cx = Math.floor(spawn.x)
    const cz = Math.floor(spawn.z)
    for (let dz = -4; dz <= 4; dz++) {
      for (let dx = -4; dx <= 4; dx++) {
        if (dx * dx + dz * dz > 16) continue
        for (let y = spawn.y; y <= spawn.y + 2; y++) {
          const id = world.get(cx + dx, y, cz + dz)
          if (id === 15 || (id === 6 && y <= spawn.y + 1)) world.setBlock(cx + dx, y, cz + dz, AIR, false)
        }
      }
    }
  }
}

async function setupWorld(saved, seed = DEFAULT_SEED) {
  const timingStart = performance.now()
  disposeChunks()
  const worldSeed = saved && typeof saved.seed === 'number' ? saved.seed : (seed >>> 0)
  world = new World(worldSeed, saved ? saved.edits : [])
  world.generate()
  const timingGenerated = performance.now()
  player = new Player(world, { x: 64.5, y: 30, z: 64.5 })
  setPlayerFromSave(saved)
  if (saved && typeof saved.dayTime === 'number') dayTime = saved.dayTime
  if (saved) {
    selected = Math.min(HOTBAR_IDS.length - 1, Math.max(0, Number(saved.hotbar) || 0))
    sound.setMuted(!!saved.muted)
    const soundToggle = document.getElementById('opt-sound')
    if (soundToggle) soundToggle.checked = !sound.muted
  }
  selectSlot(selected, true)
  updateCamera(0)
  await buildAllChunks(fraction => {
    progressBar.style.width = `${Math.round(fraction * 100)}%`
  })
  window.__mc3dTimings = {
    generate: Math.round(timingGenerated - timingStart),
    build: Math.round(performance.now() - timingGenerated),
    total: Math.round(performance.now() - timingStart)
  }
  dirty = false
  document.body.classList.remove('loading')
}

function updateCamera(dt) {
  if (!player) return
  const eye = player.pos.y + player.eyeHeight + player.bob
  camera.position.set(player.pos.x, eye, player.pos.z)
  camera.rotation.set(player.pitch, player.yaw, player.sway, 'YXZ')
  const sprinting = keys.has('ShiftLeft') && !player.flying
  const targetFov = sprinting && !player.inWater ? 81 : 75
  camera.fov += (targetFov - camera.fov) * Math.min(1, dt * 8)
  camera.updateProjectionMatrix()
}

function gatherInput() {
  let forward = 0, strafe = 0
  if (keys.has('KeyW') || keys.has('ArrowUp')) forward += 1
  if (keys.has('KeyS') || keys.has('ArrowDown')) forward -= 1
  if (keys.has('KeyD') || keys.has('ArrowRight')) strafe += 1
  if (keys.has('KeyA') || keys.has('ArrowLeft')) strafe -= 1
  forward -= touchInput.y
  strafe += touchInput.x
  const flying = player ? player.flying : false
  const shift = keys.has('ShiftLeft') || keys.has('ShiftRight')
  return {
    forward,
    strafe,
    jump: keys.has('Space') || touchInput.jump,
    down: shift && flying,
    sprint: shift && !flying,
    fast: (keys.has('ControlLeft') || keys.has('ControlRight')) && flying
  }
}

let lastFrame = performance.now()
let fpsFrames = 0
let fpsTime = 0
let statTime = 0
let currentFps = 0

function animate(now) {
  requestAnimationFrame(animate)
  const dt = Math.min(0.05, Math.max(0, (now - lastFrame) / 1000))
  lastFrame = now

  if (mode === 'playing' && player) {
    player.update(dt, gatherInput())
    updateCamera(dt)
    updateTarget()

    breakCooldown -= dt
    placeCooldown -= dt
    const wantsBreak = mouseHeld.left || touchInput.break
    const wantsPlace = mouseHeld.right || touchInput.place
    if (wantsBreak && breakCooldown <= 0) {
      breakBlock()
      breakCooldown = 0.24
    }
    if (wantsPlace && placeCooldown <= 0) {
      placeBlock()
      placeCooldown = 0.28
    }
    saveTimer += dt
    if (saveTimer > 18 && dirty) {
      saveGame(false)
      saveTimer = 0
    }
  } else if (player) {
    updateCamera(dt)
  }

  updateSky(dt)
  updateParticles(dt)
  highlightFill.material.opacity = 0.045 + Math.sin(now * 0.003) * 0.02

  if (mode !== 'loading') renderer.render(scene, camera)

  fpsFrames++
  fpsTime += dt
  if (fpsTime >= 0.5) {
    currentFps = Math.round(fpsFrames / fpsTime)
    fpsFrames = 0
    fpsTime = 0
  }
  statTime += dt
  if (statTime > 0.25 && player) {
    statTime = 0
    statsFps.textContent = `${currentFps} FPS`
    statsPos.textContent = `X ${player.pos.x.toFixed(1)}  Y ${player.pos.y.toFixed(1)}  Z ${player.pos.z.toFixed(1)}`
  }
}

function requestLock() {
  if (isTouch) return
  lockRequestedAt = performance.now()
  const promise = canvas.requestPointerLock()
  if (promise && promise.catch) promise.catch(() => {})
}

function startPlaying() {
  if (!ready) return
  bootEl.classList.add('hidden')
  pauseEl.classList.add('hidden')
  hudEl.classList.remove('hidden')
  mode = 'playing'
  sound.unlock()
  if (!isTouch) requestLock()
  touchEl.classList.toggle('visible', isTouch)
  selectSlot(selected, true)
}

function openPause() {
  if (mode !== 'playing') return
  mode = 'paused'
  pauseEl.classList.remove('hidden')
  hudEl.classList.add('hidden')
  mouseHeld.left = false
  mouseHeld.right = false
  touchInput.break = false
  touchInput.place = false
  if (dirty) saveGame(false)
}

function resumePlaying() {
  if (!ready) return
  pauseEl.classList.add('hidden')
  hudEl.classList.remove('hidden')
  mode = 'playing'
  sound.unlock()
  if (!isTouch) requestLock()
}

async function newWorld() {
  mode = 'loading'
  pauseEl.classList.add('hidden')
  bootEl.classList.remove('hidden')
  hudEl.classList.add('hidden')
  playBtn.disabled = true
  progressEl.classList.remove('done')
  bootStatus.textContent = 'Generating a new world…'
  progressBar.style.width = '0%'
  if (document.pointerLockElement) document.exitPointerLock()
  try { localStorage.removeItem(SAVE_KEY) } catch {}
  await setupWorld(null, (Math.random() * 1e9) | 0)
  ready = true
  playBtn.disabled = false
  bootStatus.textContent = 'World ready — click Play'
  progressBar.style.width = '100%'
  progressEl.classList.add('done')
  mode = 'boot'
}

async function boot() {
  buildHotbar()
  selectSlot(0, true)
  const overrideSeed = seedParam !== null && Number.isFinite(seedParam) ? (seedParam >>> 0) : null
  const saved = overrideSeed !== null || forceFresh ? null : loadSave()
  bootStatus.textContent = saved ? 'Loading your saved world…' : 'Generating terrain, trees and flowers…'
  progressEl.classList.remove('done')
  await setupWorld(saved, overrideSeed !== null ? overrideSeed : DEFAULT_SEED)
  ready = true
  playBtn.disabled = false
  bootStatus.textContent = saved ? 'Saved world ready' : 'World ready — click Play'
  progressBar.style.width = '100%'
  progressEl.classList.add('done')
  mode = 'boot'
  if (saved) showToast('Saved world loaded')
}

playBtn.addEventListener('click', startPlaying)
newStartBtn.addEventListener('click', () => { sound.unlock(); newWorld() })
document.getElementById('resume').addEventListener('click', resumePlaying)
document.getElementById('save').addEventListener('click', () => saveGame(true))
document.getElementById('new-world').addEventListener('click', newWorld)
document.getElementById('opt-shadows').addEventListener('change', event => {
  renderer.shadowMap.enabled = event.target.checked
})
document.getElementById('opt-sound').addEventListener('change', event => {
  sound.unlock()
  sound.setMuted(!event.target.checked)
})
document.getElementById('fullscreen').addEventListener('click', () => {
  if (document.fullscreenElement) document.exitFullscreen().catch(() => {})
  else document.documentElement.requestFullscreen?.().catch(() => {})
})

document.addEventListener('pointerlockchange', () => {
  if (isTouch) return
  const locked = document.pointerLockElement === canvas
  if (!locked && mode === 'playing' && performance.now() - lockRequestedAt > 500) openPause()
})

canvas.addEventListener('click', () => {
  if (mode === 'playing' && !isTouch && document.pointerLockElement !== canvas) requestLock()
})

document.addEventListener('mousemove', event => {
  if (mode !== 'playing' || isTouch) return
  if (document.pointerLockElement !== canvas) return
  player.yaw -= event.movementX * 0.0022
  player.pitch -= event.movementY * 0.0022
  const limit = Math.PI / 2 - 0.02
  player.pitch = Math.max(-limit, Math.min(limit, player.pitch))
})

document.addEventListener('mousedown', event => {
  if (mode !== 'playing') return
  if (!isTouch && document.pointerLockElement !== canvas) return
  if (event.button === 0) {
    mouseHeld.left = true
    if (breakCooldown <= 0) { breakBlock(); breakCooldown = 0.24 }
  } else if (event.button === 2) {
    mouseHeld.right = true
    if (placeCooldown <= 0) { placeBlock(); placeCooldown = 0.28 }
  }
})
document.addEventListener('mouseup', event => {
  if (event.button === 0) mouseHeld.left = false
  if (event.button === 2) mouseHeld.right = false
})
document.addEventListener('contextmenu', event => event.preventDefault())

window.addEventListener('keydown', event => {
  if (event.code === 'Escape') {
    if (mode === 'paused') resumePlaying()
    else if (mode === 'playing' && isTouch) openPause()
    return
  }
  if (mode !== 'playing') return
  keys.add(event.code)
  if (event.code === 'Space') event.preventDefault()
  if (event.code.startsWith('Digit')) {
    const n = Number(event.code.slice(5))
    if (n >= 1 && n <= HOTBAR_IDS.length) selectSlot(n - 1)
  }
  if (event.code === 'KeyF') {
    player.flying = !player.flying
    player.vel.y = 0
    showToast(player.flying ? 'Flying enabled' : 'Flying disabled')
  }
})
window.addEventListener('keyup', event => {
  keys.delete(event.code)
})
window.addEventListener('blur', () => {
  keys.clear()
  mouseHeld.left = false
  mouseHeld.right = false
})

window.addEventListener('wheel', event => {
  if (mode !== 'playing') return
  event.preventDefault()
  selectSlot(selected + (event.deltaY > 0 ? 1 : -1))
}, { passive: false })

canvas.addEventListener('pointerdown', event => {
  if (!isTouch || mode !== 'playing' || lookPointer !== null) return
  lookPointer = event.pointerId
  lookX = event.clientX
  lookY = event.clientY
  canvas.setPointerCapture?.(event.pointerId)
})
canvas.addEventListener('pointermove', event => {
  if (event.pointerId !== lookPointer) return
  const dx = event.clientX - lookX
  const dy = event.clientY - lookY
  lookX = event.clientX
  lookY = event.clientY
  player.yaw -= dx * 0.0055
  player.pitch -= dy * 0.0055
  const limit = Math.PI / 2 - 0.02
  player.pitch = Math.max(-limit, Math.min(limit, player.pitch))
})
function endLook(event) {
  if (event.pointerId === lookPointer) lookPointer = null
}
canvas.addEventListener('pointerup', endLook)
canvas.addEventListener('pointercancel', endLook)

function setupTouchControls() {
  const joystick = document.getElementById('joystick')
  const knob = document.getElementById('joystick-knob')
  let joyId = null
  const updateJoy = event => {
    const rect = joystick.getBoundingClientRect()
    const cx = rect.left + rect.width / 2
    const cy = rect.top + rect.height / 2
    let dx = event.clientX - cx
    let dy = event.clientY - cy
    const max = rect.width * 0.34
    const len = Math.hypot(dx, dy)
    if (len > max) { dx = (dx / len) * max; dy = (dy / len) * max }
    touchInput.x = dx / max
    touchInput.y = dy / max
    knob.style.transform = `translate(${dx}px, ${dy}px)`
  }
  joystick.addEventListener('pointerdown', event => {
    if (mode !== 'playing') return
    joyId = event.pointerId
    joystick.setPointerCapture(event.pointerId)
    updateJoy(event)
  })
  joystick.addEventListener('pointermove', event => {
    if (event.pointerId === joyId) updateJoy(event)
  })
  const resetJoy = event => {
    if (event.pointerId !== joyId) return
    joyId = null
    touchInput.x = 0
    touchInput.y = 0
    knob.style.transform = 'translate(0px, 0px)'
  }
  joystick.addEventListener('pointerup', resetJoy)
  joystick.addEventListener('pointercancel', resetJoy)

  const jump = document.getElementById('touch-jump')
  jump.addEventListener('pointerdown', event => { event.preventDefault(); touchInput.jump = true })
  const releaseJump = () => { touchInput.jump = false }
  jump.addEventListener('pointerup', releaseJump)
  jump.addEventListener('pointercancel', releaseJump)
  jump.addEventListener('pointerleave', releaseJump)

  const bindHold = (id, field) => {
    const el = document.getElementById(id)
    el.addEventListener('pointerdown', event => {
      event.preventDefault()
      touchInput[field] = true
      if (field === 'break') breakBlock()
      else placeBlock()
    })
    const stop = () => { touchInput[field] = false }
    el.addEventListener('pointerup', stop)
    el.addEventListener('pointercancel', stop)
    el.addEventListener('pointerleave', stop)
  }
  bindHold('touch-break', 'break')
  bindHold('touch-place', 'place')
}

setupTouchControls()

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
  renderer.setSize(window.innerWidth, window.innerHeight)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2))
})

window.addEventListener('beforeunload', () => {
  if (world && player && mode !== 'loading') saveGame(false)
})

canvas.addEventListener('webglcontextlost', event => {
  event.preventDefault()
})

window.__mc3d = {
  THREE, scene, camera, renderer, chunkObjects, cloudMesh, sunLight, hemi, ocean, materials, ambient,
  get world() { return world }, get player() { return player }, get target() { return target }, get mode() { return mode },
  get dayTime() { return dayTime }, set dayTime(value) { dayTime = value }
}

requestAnimationFrame(animate)
boot().catch(error => {
  console.error(error)
  bootStatus.textContent = 'Something went wrong while loading the world.'
})
