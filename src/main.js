import * as THREE from 'three';
import './style.css';
import { createStudioEnvironment, addStudioLights, createVoidBackdrop, createDust } from './environment.js';
import { createMaterials } from './materials.js';
import { buildWatch } from './watch.js';
import { createPost } from './post.js';

const canvas = document.getElementById('stage');
const renderer = new THREE.WebGLRenderer({
  canvas,
  antialias: true,
  alpha: false,
  powerPreference: 'high-performance',
  preserveDrawingBuffer: true,
});
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.36;
renderer.setClearColor(0x000000, 1);

const rawDpr = window.devicePixelRatio || 1;
const isCoarse = window.matchMedia('(pointer: coarse)').matches;
let pixelRatio = Math.min(rawDpr, isCoarse ? 2 : 1.7);
renderer.setPixelRatio(pixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight, false);

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x000000);

function baseCameraDistance() {
  return window.innerWidth / window.innerHeight > 1.25 ? 30.5 : 34.5;
}

const camera = new THREE.PerspectiveCamera(33, window.innerWidth / window.innerHeight, 0.1, 140);
camera.position.set(0, 0, baseCameraDistance());

scene.environment = createStudioEnvironment(renderer);
scene.environmentIntensity = 1.0;
addStudioLights(scene);

const backdrop = createVoidBackdrop();
scene.add(backdrop);

const dust = createDust(isCoarse ? 58 : 90);
scene.add(dust);

const materials = createMaterials(renderer);
const watch = buildWatch(materials);
watch.group.position.y = 0.12;
scene.add(watch.group);

const post = createPost(renderer, scene, camera, { bloom: false });

const pointer = new THREE.Vector2(0, 0);
const smoothPointer = new THREE.Vector2(0, 0);
let targetPointerX = 0;
let targetPointerY = 0;

function setPointer(clientX, clientY) {
  targetPointerX = (clientX / window.innerWidth) * 2 - 1;
  targetPointerY = (clientY / window.innerHeight) * 2 - 1;
}

window.addEventListener(
  'pointermove',
  (event) => {
    setPointer(event.clientX, event.clientY);
  },
  { passive: true },
);

window.addEventListener(
  'pointerdown',
  (event) => {
    setPointer(event.clientX, event.clientY);
  },
  { passive: true },
);

let orientationHandler = null;
window.addEventListener('deviceorientation', (event) => {
  if (event.gamma == null || event.beta == null) return;
  orientationHandler = true;
  targetPointerX = THREE.MathUtils.clamp(event.gamma / 32, -1, 1);
  targetPointerY = THREE.MathUtils.clamp((event.beta - 45) / 36, -1, 1);
});

const clock = new THREE.Clock();
let wallTime = 0;
let cycleTime = 0;
let displayExplosion = 0;
let raf = 0;
let paused = false;

const params = new URLSearchParams(window.location.search);
if (params.has('t')) {
  const seek = Number(params.get('t'));
  if (Number.isFinite(seek)) cycleTime = seek;
}

function triggerExplosion() {
  cycleTime = watch.explodeStart - 0.001;
}

function seek(time) {
  if (!Number.isFinite(time)) return;
  cycleTime = ((time % watch.cycle) + watch.cycle) % watch.cycle;
  wallTime = time;
}

let tapStart = null;
canvas.addEventListener('pointerdown', (event) => {
  tapStart = { x: event.clientX, y: event.clientY, at: performance.now() };
});

canvas.addEventListener('pointerup', (event) => {
  if (!tapStart) return;
  const moved = Math.hypot(event.clientX - tapStart.x, event.clientY - tapStart.y);
  const elapsed = performance.now() - tapStart.at;
  tapStart = null;
  if (moved < 12 && elapsed < 450) triggerExplosion();
});

window.addEventListener('keydown', (event) => {
  if (event.code === 'Space' || event.code === 'Enter') {
    event.preventDefault();
    triggerExplosion();
  }
});

document.addEventListener('visibilitychange', () => {
  paused = document.hidden;
  if (!paused) clock.getDelta();
});

const focusTarget = new THREE.Vector3(0, 0.12, 0);
let frameAccumulator = 0;
let frameCount = 0;
let adapted = false;

function adaptQuality(dt) {
  if (adapted) return;
  frameAccumulator += dt;
  frameCount++;
  if (frameCount < 120) return;
  const average = frameAccumulator / frameCount;
  if (average > 0.026 && pixelRatio > 1.05) {
    pixelRatio = Math.max(1, pixelRatio * 0.78);
    renderer.setPixelRatio(pixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight, false);
    post.resize(window.innerWidth, window.innerHeight);
  }
  adapted = true;
}

function updateFrame(dt, advance = true) {
  if (advance) {
    wallTime += dt;
    cycleTime += dt;
  }

  const pointerEase = 1 - Math.exp(-dt * 3.4);
  smoothPointer.x += (targetPointerX - smoothPointer.x) * pointerEase;
  smoothPointer.y += (targetPointerY - smoothPointer.y) * pointerEase;

  const speed = 20;
  const breath = Math.sin((wallTime / speed) * Math.PI * 2);
  const breathOffset = Math.sin((wallTime / speed) * Math.PI * 2 + 1.15);

  watch.update(wallTime, cycleTime, dt, smoothPointer);
  const explosion = watch.getExplosionAmount();
  if (dt > 0) {
    displayExplosion += (explosion - displayExplosion) * (1 - Math.exp(-dt * 4.2));
  } else {
    displayExplosion = explosion;
  }

  watch.group.rotation.y = 0.045 + breath * 0.21 + smoothPointer.x * 0.26;
  watch.group.rotation.x = breathOffset * 0.095 + smoothPointer.y * 0.14;
  watch.group.rotation.z = Math.sin((wallTime / speed) * Math.PI * 2 - 0.6) * 0.012 - smoothPointer.x * 0.028;

  camera.position.x = smoothPointer.x * 1.25;
  camera.position.y = -smoothPointer.y * 0.9 + 0.1;
  camera.position.z = baseCameraDistance() - breath * 0.75 + displayExplosion * 4.0;
  camera.lookAt(focusTarget);

  const focus = camera.position.distanceTo(focusTarget);
  post.bokeh.uniforms.focus.value = focus;
  post.bokeh.uniforms.aperture.value = 0.00112 + displayExplosion * 0.0003;

  dust.rotation.z = wallTime * 0.006;
  dust.position.y = Math.sin(wallTime * 0.07) * 0.3;
}

function renderOnce() {
  updateFrame(0, false);
  post.composer.render(0);
  document.body.classList.add('ready');
  document.body.dataset.ready = 'true';
}

function animate() {
  raf = requestAnimationFrame(animate);
  if (paused) return;

  const dt = Math.min(clock.getDelta(), 0.05);
  updateFrame(dt, true);
  post.composer.render(dt);
  adaptQuality(dt);

  if (!document.body.classList.contains('ready')) {
    document.body.classList.add('ready');
    document.body.dataset.ready = 'true';
  }
}

function resize() {
  const width = window.innerWidth;
  const height = window.innerHeight;
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
  renderer.setPixelRatio(pixelRatio);
  renderer.setSize(width, height, false);
  post.resize(width, height);
}

window.addEventListener('resize', resize);
window.addEventListener('orientationchange', () => setTimeout(resize, 200));

window.__wallpaper = {
  trigger: triggerExplosion,
  seek,
  pause: () => { paused = true; },
  resume: () => { paused = false; clock.getDelta(); },
  renderOnce,
  getState: () => ({
    cycleTime: cycleTime % watch.cycle,
    explosion: watch.getExplosionAmount(),
    ready: document.body.dataset.ready === 'true',
  }),
  watch,
  post,
  renderer,
  scene,
  camera,
};

animate();
