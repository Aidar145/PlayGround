import * as THREE from 'three';

function softbox(data, width, height, az, el, azHalf, elHalf, color, power) {
  const cosAz = Math.cos(az);
  const sinAz = Math.sin(az);
  const cosEl = Math.cos(el);
  const sinEl = Math.sin(el);

  for (let y = 0; y < height; y++) {
    const v = (y + 0.5) / height;
    const e = (v - 0.5) * Math.PI;
    const elDelta = Math.abs(e - el);
    if (elDelta > elHalf * 1.8) continue;
    const elEdge = 1 - THREE.MathUtils.smoothstep(elDelta, elHalf * 0.72, elHalf);

    for (let x = 0; x < width; x++) {
      const u = (x + 0.5) / width;
      const phi = (u - 0.5) * Math.PI * 2;
      let d = phi - az;
      d = Math.atan2(Math.sin(d), Math.cos(d));
      const azDelta = Math.abs(d);
      if (azDelta > azHalf * 1.8) continue;
      const azEdge = 1 - THREE.MathUtils.smoothstep(azDelta, azHalf * 0.7, azHalf);
      const falloff = elEdge * azEdge;
      if (falloff <= 0) continue;

      const dirX = cosEl * Math.sin(phi);
      const dirY = sinEl;
      const dirZ = cosEl * Math.cos(phi);
      const facing = Math.max(0, dirX * cosEl * sinAz + dirY * sinEl + dirZ * cosEl * cosAz);
      const hot = falloff * (0.55 + 0.45 * facing);

      const i = (y * width + x) * 4;
      data[i] += color[0] * power * hot;
      data[i + 1] += color[1] * power * hot;
      data[i + 2] += color[2] * power * hot;
    }
  }
}

export function createStudioEnvironment(renderer) {
  const width = 1024;
  const height = 512;
  const data = new Float32Array(width * height * 4);

  for (let y = 0; y < height; y++) {
    const v = (y + 0.5) / height;
    const el = (v - 0.5) * Math.PI;
    for (let x = 0; x < width; x++) {
      const u = (x + 0.5) / width;
      const phi = (u - 0.5) * Math.PI * 2;
      const horizon = Math.exp(-Math.pow((el - 0.08) / 0.32, 2));
      const dome = Math.exp(-Math.pow((el - 1.15) / 0.7, 2));
      const i = (y * width + x) * 4;
      data[i] = 0.013 + horizon * 0.014 + dome * 0.016;
      data[i + 1] = 0.0135 + horizon * 0.015 + dome * 0.017;
      data[i + 2] = 0.015 + horizon * 0.018 + dome * 0.021;
      data[i + 3] = 1;
    }
  }

  softbox(data, width, height, 0.32, 0.44, 0.21, 0.28, [1.0, 1.02, 1.08], 3.15);
  softbox(data, width, height, -1.22, -0.03, 0.52, 0.16, [1.0, 0.92, 0.8], 0.9);
  softbox(data, width, height, -0.72, 0.32, 0.16, 0.26, [1.0, 0.92, 0.8], 1.4);
  softbox(data, width, height, 2.62, 0.31, 0.2, 0.44, [0.62, 0.76, 1.0], 0.55);
  softbox(data, width, height, -2.02, 0.82, 0.1, 0.16, [1.0, 1.0, 1.0], 2.0);
  softbox(data, width, height, 1.12, 0.38, 0.07, 0.34, [0.92, 0.96, 1.0], 1.6);
  softbox(data, width, height, -0.55, 0.55, 0.1, 0.24, [0.97, 0.99, 1.0], 1.4);
  softbox(data, width, height, 1.72, 1.05, 0.42, 0.09, [0.78, 0.86, 1.0], 0.8);
  softbox(data, width, height, -0.18, -1.12, 0.62, 0.12, [0.4, 0.48, 0.6], 0.3);
  softbox(data, width, height, 0.02, 0.1, 0.5, 0.25, [1.0, 0.98, 0.95], 0.55);

  const texture = new THREE.DataTexture(data, width, height, THREE.RGBAFormat, THREE.FloatType);
  texture.mapping = THREE.EquirectangularReflectionMapping;
  texture.colorSpace = THREE.LinearSRGBColorSpace;
  texture.minFilter = THREE.LinearFilter;
  texture.magFilter = THREE.LinearFilter;
  texture.needsUpdate = true;

  const pmrem = new THREE.PMREMGenerator(renderer);
  pmrem.compileEquirectangularShader();
  const environment = pmrem.fromEquirectangular(texture).texture;
  texture.dispose();
  pmrem.dispose();
  return environment;
}

export function addStudioLights(scene) {
  const key = new THREE.DirectionalLight(0xf6fbff, 0.8);
  key.position.set(-5, 8, 9);
  scene.add(key);

  const sculpt = new THREE.SpotLight(0xdfeaff, 4.5, 80, Math.PI / 5.4, 0.7, 1.5);
  sculpt.position.set(7, 2, 14);
  sculpt.target.position.set(0, 0, 0);
  scene.add(sculpt, sculpt.target);

  const rim = new THREE.PointLight(0xd2e2ff, 3.5, 60, 1.8);
  rim.position.set(-7, 4, -9);
  scene.add(rim);

  const warm = new THREE.PointLight(0xffd8aa, 3, 45, 1.8);
  warm.position.set(6, -7, 5);
  scene.add(warm);

  const frontFill = new THREE.PointLight(0xf2f6ff, 8.5, 38, 1.7);
  frontFill.position.set(0, 2, 15);
  scene.add(frontFill);

  const lowerFill = new THREE.PointLight(0xdfe9ff, 4.0, 32, 1.8);
  lowerFill.position.set(-2, -7, 11);
  scene.add(lowerFill);

  const warmRim = new THREE.PointLight(0xffb878, 8, 45, 1.8);
  warmRim.position.set(8, -4, -6);
  scene.add(warmRim);

  scene.add(new THREE.HemisphereLight(0x2a3a52, 0x000000, 0.16));
}

export function createVoidBackdrop() {
  const geometry = new THREE.PlaneGeometry(140, 180);
  const material = new THREE.ShaderMaterial({
    depthWrite: false,
    depthTest: false,
    toneMapped: false,
    vertexShader: `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      varying vec2 vUv;
      void main() {
        vec2 p = vUv - vec2(0.5, 0.47);
        float d = length(p * vec2(1.0, 1.35));
        vec3 center = vec3(0.004, 0.0055, 0.008);
        vec3 edge = vec3(0.0, 0.0, 0.0);
        vec3 color = mix(center, edge, smoothstep(0.02, 0.52, d));
        float halo = exp(-d * 12.0) * 0.008;
        color += vec3(0.24, 0.38, 0.62) * halo;
        gl_FragColor = vec4(color, 1.0);
      }
    `,
  });
  const mesh = new THREE.Mesh(geometry, material);
  mesh.position.z = -34;
  mesh.renderOrder = -10;
  return mesh;
}

function dustSprite() {
  const size = 64;
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d');
  const gradient = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
  gradient.addColorStop(0, 'rgba(255,255,255,1)');
  gradient.addColorStop(0.3, 'rgba(215,230,255,0.55)');
  gradient.addColorStop(1, 'rgba(140,170,220,0)');
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, size, size);
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}

export function createDust(count = 90) {
  const positions = new Float32Array(count * 3);
  const sizes = new Float32Array(count);
  for (let i = 0; i < count; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 26;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 34;
    positions[i * 3 + 2] = -14 + Math.random() * 22;
    sizes[i] = 0.018 + Math.random() * 0.045;
  }
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

  const material = new THREE.PointsMaterial({
    map: dustSprite(),
    color: 0xa9c4e8,
    size: 0.085,
    sizeAttenuation: true,
    transparent: true,
    opacity: 0.24,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
  });

  const points = new THREE.Points(geometry, material);
  points.renderOrder = -5;
  return points;
}
