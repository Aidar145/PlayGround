import * as THREE from 'three';

function brushedTexture(size = 512) {
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d');
  const image = ctx.createImageData(size, size);
  let seed = 1337;
  const random = () => {
    seed = (seed * 1664525 + 1013904223) >>> 0;
    return seed / 4294967296;
  };

  const rows = new Float32Array(size);
  for (let y = 0; y < size; y++) rows[y] = random();

  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const fine = (random() - 0.5) * 16;
      const streak = (rows[y] - 0.5) * 26;
      const wave = Math.sin((x * 0.14 + y * 0.035) * Math.PI) * 5;
      const value = THREE.MathUtils.clamp(205 + fine + streak + wave, 0, 255);
      const i = (y * size + x) * 4;
      image.data[i] = value;
      image.data[i + 1] = value;
      image.data[i + 2] = value;
      image.data[i + 3] = 255;
    }
  }
  ctx.putImageData(image, 0, 0);
  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(3, 3);
  texture.anisotropy = 8;
  texture.colorSpace = THREE.NoColorSpace;
  return texture;
}

function genevaNormalTexture(size = 512) {
  const height = new Float32Array(size * size);
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const stripe = Math.sin((x + y) * 0.036) * 0.5 + 0.5;
      const fine = Math.sin((x - y) * 0.29) * 0.06;
      const grain = Math.sin(x * 0.93 + y * 1.71) * 0.02;
      height[y * size + x] = stripe * 0.6 + fine + grain;
    }
  }

  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d');
  const image = ctx.createImageData(size, size);
  const strength = 1.65;
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const xl = height[y * size + ((x - 1 + size) % size)];
      const xr = height[y * size + ((x + 1) % size)];
      const yd = height[((y - 1 + size) % size) * size + x];
      const yu = height[((y + 1) % size) * size + x];
      let nx = (xl - xr) * strength;
      let ny = (yd - yu) * strength;
      const nz = 1;
      const length = Math.hypot(nx, ny, nz);
      nx /= length;
      ny /= length;
      const i = (y * size + x) * 4;
      image.data[i] = (nx * 0.5 + 0.5) * 255;
      image.data[i + 1] = (ny * 0.5 + 0.5) * 255;
      image.data[i + 2] = (nz / length * 0.5 + 0.5) * 255;
      image.data[i + 3] = 255;
    }
  }
  ctx.putImageData(image, 0, 0);
  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(2.2, 2.2);
  texture.anisotropy = 8;
  texture.colorSpace = THREE.NoColorSpace;
  return texture;
}

function perlageTexture(size = 512) {
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = '#b8b8b8';
  ctx.fillRect(0, 0, size, size);
  const step = 14;
  for (let y = -step; y < size + step; y += step) {
    for (let x = -step; x < size + step; x += step) {
      const ox = (Math.floor(y / step) % 2) * step * 0.5;
      const cx = x + ox;
      const gradient = ctx.createRadialGradient(cx - 2, y - 2, 1, cx, y, step * 0.64);
      gradient.addColorStop(0, 'rgba(255,255,255,0.32)');
      gradient.addColorStop(0.55, 'rgba(135,135,135,0.2)');
      gradient.addColorStop(1, 'rgba(255,255,255,0)');
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(cx, y, step * 0.64, 0, Math.PI * 2);
      ctx.fill();
    }
  }
  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(4, 4);
  texture.anisotropy = 8;
  texture.colorSpace = THREE.NoColorSpace;
  return texture;
}

export function createMaterials(renderer) {
  const brushed = brushedTexture();
  const geneva = genevaNormalTexture();
  const perlage = perlageTexture();
  const maxAnisotropy = renderer.capabilities.getMaxAnisotropy();
  for (const texture of [brushed, geneva, perlage]) texture.anisotropy = Math.min(8, maxAnisotropy);

  const silver = new THREE.MeshPhysicalMaterial({
    color: 0xdde2e8,
    metalness: 1,
    roughness: 0.17,
    roughnessMap: brushed,
    normalMap: geneva,
    normalScale: new THREE.Vector2(0.22, 0.22),
    anisotropy: 0.55,
    anisotropyRotation: Math.PI * 0.25,
    clearcoat: 0.35,
    clearcoatRoughness: 0.18,
    envMapIntensity: 1.3,
  });

  const screwMetal = new THREE.MeshPhysicalMaterial({
    color: 0xd6dee7,
    metalness: 0.84,
    roughness: 0.3,
    clearcoat: 0.5,
    clearcoatRoughness: 0.16,
    envMapIntensity: 1.1,
    emissive: 0x141d28,
    emissiveIntensity: 0.18,
  });

  const edgeLine = new THREE.LineBasicMaterial({
    color: 0xcfe2f4,
    transparent: true,
    opacity: 0.1,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
  });

  const bridge = new THREE.MeshPhysicalMaterial({
    color: 0xcdd5de,
    metalness: 1,
    roughness: 0.3,
    roughnessMap: brushed,
    normalMap: geneva,
    normalScale: new THREE.Vector2(0.38, 0.38),
    anisotropy: 0.5,
    anisotropyRotation: Math.PI * 0.25,
    clearcoat: 0.25,
    clearcoatRoughness: 0.22,
    envMapIntensity: 1.15,
  });

  const polished = new THREE.MeshPhysicalMaterial({
    color: 0xe7ebef,
    metalness: 1,
    roughness: 0.07,
    clearcoat: 1,
    clearcoatRoughness: 0.04,
    envMapIntensity: 1.25,
  });

  const titanium = new THREE.MeshPhysicalMaterial({
    color: 0xaab2bc,
    metalness: 1,
    roughness: 0.29,
    roughnessMap: brushed,
    anisotropy: 0.42,
    anisotropyRotation: Math.PI * 0.12,
    envMapIntensity: 0.95,
  });

  const rhodium = new THREE.MeshPhysicalMaterial({
    color: 0x9aa4b0,
    metalness: 1,
    roughness: 0.28,
    roughnessMap: perlage,
    normalMap: perlage,
    normalScale: new THREE.Vector2(0.3, 0.3),
    envMapIntensity: 1.1,
  });

  const darkMetal = new THREE.MeshPhysicalMaterial({
    color: 0x22262c,
    metalness: 1,
    roughness: 0.3,
    envMapIntensity: 0.9,
  });

  const gold = new THREE.MeshPhysicalMaterial({
    color: 0xd8b26a,
    metalness: 1,
    roughness: 0.23,
    roughnessMap: brushed,
    anisotropy: 0.3,
    clearcoat: 0.25,
    clearcoatRoughness: 0.16,
    envMapIntensity: 1.05,
  });

  const roseGold = new THREE.MeshPhysicalMaterial({
    color: 0xc9896a,
    metalness: 1,
    roughness: 0.22,
    envMapIntensity: 1.0,
  });

  const blued = new THREE.MeshPhysicalMaterial({
    color: 0x2c5aa6,
    metalness: 1,
    roughness: 0.22,
    clearcoat: 0.55,
    clearcoatRoughness: 0.18,
    envMapIntensity: 0.95,
  });

  const ruby = new THREE.MeshPhysicalMaterial({
    color: 0xa3122a,
    metalness: 0.05,
    roughness: 0.1,
    clearcoat: 1,
    clearcoatRoughness: 0.04,
    emissive: 0x5a0210,
    emissiveIntensity: 1.15,
    envMapIntensity: 1.2,
  });

  const lume = new THREE.MeshStandardMaterial({
    color: 0xe6f1ea,
    emissive: 0xbdfff0,
    emissiveIntensity: 0.4,
    roughness: 0.42,
    metalness: 0,
  });

  const sapphire = new THREE.MeshPhysicalMaterial({
    color: 0xf4f8fd,
    metalness: 0,
    roughness: 0.09,
    transmission: 1,
    thickness: 0.85,
    ior: 1.77,
    clearcoat: 0.35,
    clearcoatRoughness: 0.09,
    attenuationColor: new THREE.Color(0xfbfdff),
    attenuationDistance: 55.0,
    transparent: true,
    depthWrite: false,
    envMapIntensity: 0.5,
    side: THREE.DoubleSide,
  });

  const sapphireCrystal = sapphire.clone();
  sapphireCrystal.thickness = 0.3;
  sapphireCrystal.attenuationDistance = 70.0;
  sapphireCrystal.roughness = 0.035;

  const shadow = new THREE.MeshBasicMaterial({
    color: 0x000000,
    transparent: true,
    opacity: 0.55,
    depthWrite: false,
  });

  return {
    silver,
    screwMetal,
    edgeLine,
    bridge,
    polished,
    titanium,
    rhodium,
    darkMetal,
    gold,
    roseGold,
    blued,
    ruby,
    lume,
    sapphire,
    sapphireCrystal,
    shadow,
    textures: { brushed, geneva, perlage },
  };
}
