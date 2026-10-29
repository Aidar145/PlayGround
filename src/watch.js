import * as THREE from 'three';

const TAU = Math.PI * 2;
const CYCLE = 20;
const EXPLODE_START = 3.0;
const EXPLODE_END = 6.5;
const FLOAT_END = 10.5;
const ASSEMBLE_END = 15.0;

const clamp01 = (value) => Math.min(1, Math.max(0, value));
const easeOutCubic = (value) => 1 - Math.pow(1 - value, 3);
const easeInOutCubic = (value) => (value < 0.5 ? 4 * value * value * value : 1 - Math.pow(-2 * value + 2, 3) / 2);

let randomSeed = 0x51f15e;
function random() {
  randomSeed = (randomSeed * 1664525 + 1013904223) >>> 0;
  return randomSeed / 4294967296;
}

function superellipsePoints(a, b, n, segments = 180) {
  const points = [];
  for (let i = 0; i < segments; i++) {
    const t = (i / segments) * TAU;
    const c = Math.cos(t);
    const s = Math.sin(t);
    const x = a * Math.sign(c) * Math.pow(Math.abs(c), 2 / n);
    const y = b * Math.sign(s) * Math.pow(Math.abs(s), 2 / n);
    points.push(new THREE.Vector2(x, y));
  }
  return points;
}

function superellipseShape(a, b, n, segments = 180) {
  return new THREE.Shape(superellipsePoints(a, b, n, segments));
}

function extrudeShape(shape, depth, bevel = 0.025, bevelSegments = 3) {
  const geometry = new THREE.ExtrudeGeometry(shape, {
    depth,
    bevelEnabled: bevel > 0,
    bevelThickness: bevel,
    bevelSize: bevel,
    bevelSegments,
    steps: 1,
    curveSegments: 16,
  });
  geometry.translate(0, 0, -depth / 2);
  geometry.computeVertexNormals();
  return geometry;
}

function addCircleHole(shape, x, y, radius, segments = 28) {
  const points = [];
  for (let i = 0; i < segments; i++) {
    const a = -(i / segments) * TAU;
    points.push(new THREE.Vector2(x + Math.cos(a) * radius, y + Math.sin(a) * radius));
  }
  shape.holes.push(new THREE.Path(points));
}

function addSlotHole(shape, x, y, width, height, radius = 0.06, rotation = 0) {
  const path = new THREE.Path();
  const hw = width / 2;
  const hh = height / 2;
  const r = Math.min(radius, hw, hh);
  const cos = Math.cos(rotation);
  const sin = Math.sin(rotation);
  const transform = (px, py) => new THREE.Vector2(x + px * cos - py * sin, y + px * sin + py * cos);
  path.moveTo(...transform(-hw + r, -hh).toArray());
  path.lineTo(...transform(hw - r, -hh).toArray());
  path.absarc(...transform(hw - r, -hh + r).toArray(), r, -Math.PI / 2, 0, false);
  path.lineTo(...transform(hw, hh - r).toArray());
  path.absarc(...transform(hw - r, hh - r).toArray(), r, 0, Math.PI / 2, false);
  path.lineTo(...transform(-hw + r, hh).toArray());
  path.absarc(...transform(-hw + r, hh - r).toArray(), r, Math.PI / 2, Math.PI, false);
  path.lineTo(...transform(-hw, -hh + r).toArray());
  path.absarc(...transform(-hw + r, -hh + r).toArray(), r, Math.PI, Math.PI * 1.5, false);
  shape.holes.push(path);
}

function gearShape(radius, teeth, toothDepth) {
  const points = [];
  const step = TAU / teeth;
  const root = radius - toothDepth;
  const profile = [
    [-0.5, root],
    [-0.34, root],
    [-0.24, radius],
    [0.24, radius],
    [0.34, root],
    [0.5, root],
  ];
  for (let i = 0; i < teeth; i++) {
    const base = i * step;
    for (const [fraction, r] of profile) {
      const a = base + fraction * step;
      points.push(new THREE.Vector2(Math.cos(a) * r, Math.sin(a) * r));
    }
  }
  return new THREE.Shape(points);
}

function makeGear(materials, options) {
  const {
    radius,
    teeth = 30,
    thickness = 0.1,
    material = materials.silver,
    spokes = 5,
    skeleton = true,
    pinion = true,
  } = options;

  const group = new THREE.Group();
  const spin = new THREE.Group();
  group.add(spin);

  const shape = gearShape(radius, teeth, Math.max(0.035, radius * 0.085));
  addCircleHole(shape, 0, 0, radius * 0.17, 22);

  if (skeleton && radius > 0.34) {
    const count = spokes;
    const orbit = radius * 0.54;
    const hole = radius * 0.205;
    for (let i = 0; i < count; i++) {
      const a = (i / count) * TAU + Math.PI / count;
      addCircleHole(shape, Math.cos(a) * orbit, Math.sin(a) * orbit, hole, 20);
    }
  }

  const body = new THREE.Mesh(extrudeShape(shape, thickness, Math.min(0.02, thickness * 0.25), 2), material);
  spin.add(body);

  const hub = new THREE.Mesh(
    new THREE.CylinderGeometry(radius * 0.16, radius * 0.16, thickness * 1.45, 20),
    materials.polished,
  );
  hub.rotation.x = Math.PI / 2;
  spin.add(hub);

  const arbor = new THREE.Mesh(
    new THREE.CylinderGeometry(Math.max(0.028, radius * 0.035), Math.max(0.028, radius * 0.035), 0.62, 12),
    materials.blued,
  );
  arbor.rotation.x = Math.PI / 2;
  spin.add(arbor);

  if (pinion && radius > 0.45) {
    const pinionShape = gearShape(radius * 0.2, 8, radius * 0.026);
    addCircleHole(pinionShape, 0, 0, radius * 0.045, 10);
    const pinionMesh = new THREE.Mesh(
      extrudeShape(pinionShape, 0.075, 0.008, 2),
      materials.silver,
    );
    pinionMesh.position.z = thickness * 0.95;
    spin.add(pinionMesh);
  }

  return { group, spin };
}

function makeSplineScrew(materials, radius = 0.16, height = 0.08) {
  const group = new THREE.Group();
  const points = [];
  const lobes = 6;
  const segments = 72;
  for (let i = 0; i < segments; i++) {
    const a = (i / segments) * TAU;
    const r = radius * (1 + 0.085 * Math.cos(a * lobes));
    points.push(new THREE.Vector2(Math.cos(a) * r, Math.sin(a) * r));
  }
  const shape = new THREE.Shape(points);
  const head = new THREE.Mesh(extrudeShape(shape, height, 0.012, 2), materials.screwMetal);
  head.position.z = height * 0.5;
  group.add(head);

  const rim = new THREE.Mesh(
    new THREE.TorusGeometry(radius * 0.97, radius * 0.09, 6, 40),
    materials.polished,
  );
  rim.position.z = height + 0.001;
  group.add(rim);

  const recess = new THREE.Mesh(
    new THREE.CircleGeometry(radius * 0.32, 20),
    materials.darkMetal,
  );
  recess.position.z = height + 0.004;
  group.add(recess);

  const pin = new THREE.Mesh(
    new THREE.CylinderGeometry(radius * 0.085, radius * 0.085, height * 0.5, 10),
    materials.polished,
  );
  pin.rotation.x = Math.PI / 2;
  pin.position.z = height + 0.012;
  group.add(pin);

  const post = new THREE.Mesh(
    new THREE.CylinderGeometry(radius * 0.34, radius * 0.34, height * 2.4, 12),
    materials.titanium,
  );
  post.rotation.x = Math.PI / 2;
  post.position.z = -height * 0.8;
  group.add(post);

  return group;
}

function makeJewel(materials, radius = 0.11) {
  const group = new THREE.Group();
  const chaton = new THREE.Mesh(
    new THREE.TorusGeometry(radius * 1.2, radius * 0.27, 8, 26),
    materials.gold,
  );
  group.add(chaton);
  const stone = new THREE.Mesh(
    new THREE.CylinderGeometry(radius, radius, radius * 0.7, 22),
    materials.ruby,
  );
  stone.rotation.x = Math.PI / 2;
  group.add(stone);
  return group;
}

function ribbonShape(controls, width, steps = 130) {
  const curve = new THREE.CatmullRomCurve3(
    controls.map(([x, y]) => new THREE.Vector3(x, y, 0)),
    false,
    'centripetal',
  );
  const left = [];
  const right = [];
  for (let i = 0; i <= steps; i++) {
    const t = i / steps;
    const p = curve.getPoint(t);
    const tangent = curve.getTangent(t);
    const nx = -tangent.y;
    const ny = tangent.x;
    const taper = 0.72 + 0.28 * Math.sin(Math.PI * t);
    const half = (width * taper) / 2;
    left.push(new THREE.Vector2(p.x + nx * half, p.y + ny * half));
    right.push(new THREE.Vector2(p.x - nx * half, p.y - ny * half));
  }
  const shape = new THREE.Shape();
  shape.moveTo(left[0].x, left[0].y);
  for (let i = 1; i < left.length; i++) shape.lineTo(left[i].x, left[i].y);
  for (let i = right.length - 1; i >= 0; i--) shape.lineTo(right[i].x, right[i].y);
  shape.closePath();
  return { shape, ends: [controls[0], controls[controls.length - 1]] };
}

function makeRibbonBridge(materials, controls, width, depth, z, extraControls = null) {
  const group = new THREE.Group();
  const pieces = [controls];
  if (extraControls) pieces.push(extraControls);

  for (const piece of pieces) {
    const { shape, ends } = ribbonShape(piece, width);
    const geometry = extrudeShape(shape, depth, 0.035, 4);
    const mesh = new THREE.Mesh(geometry, materials.bridge);
    mesh.add(new THREE.LineSegments(new THREE.EdgesGeometry(geometry, 28), materials.edgeLine));
    group.add(mesh);

    for (const [x, y] of ends) {
      const boss = new THREE.Mesh(
        new THREE.CylinderGeometry(width * 0.74, width * 0.74, depth * 1.12, 28),
        materials.silver,
      );
      boss.rotation.x = Math.PI / 2;
      boss.position.set(x, y, 0);
      group.add(boss);

      const ring = new THREE.Mesh(
        new THREE.TorusGeometry(width * 0.62, width * 0.09, 8, 32),
        materials.polished,
      );
      ring.position.set(x, y, depth * 0.68);
      group.add(ring);
    }
  }

  group.position.z = z;
  return group;
}

function makeHand(materials, length, width, angle, z, options = {}) {
  const group = new THREE.Group();
  const { seconds = false } = options;

  if (seconds) {
    const beam = new THREE.Mesh(new THREE.BoxGeometry(width, length, 0.028), materials.polished);
    beam.position.y = length * 0.5 - 0.18;
    group.add(beam);

    const counter = new THREE.Mesh(new THREE.CylinderGeometry(width * 2.6, width * 2.6, 0.032, 24), materials.polished);
    counter.rotation.x = Math.PI / 2;
    counter.position.y = -0.26;
    group.add(counter);

    const tip = new THREE.Mesh(new THREE.BoxGeometry(width * 1.2, 0.28, 0.034), materials.lume);
    tip.position.y = length - 0.14;
    group.add(tip);
  } else {
    const shape = new THREE.Shape();
    shape.moveTo(-width * 0.5, -0.2);
    shape.lineTo(width * 0.5, -0.2);
    shape.lineTo(width * 0.44, length * 0.4);
    shape.lineTo(width * 0.2, length * 0.86);
    shape.lineTo(0, length);
    shape.lineTo(-width * 0.2, length * 0.86);
    shape.lineTo(-width * 0.44, length * 0.4);
    shape.closePath();

    const slot = new THREE.Path();
    const top = length * 0.64;
    const bottom = 0.12;
    const hw = width * 0.17;
    slot.moveTo(-hw, bottom);
    slot.lineTo(hw, bottom);
    slot.lineTo(hw * 0.72, top);
    slot.lineTo(0, top + width * 0.55);
    slot.lineTo(-hw * 0.72, top);
    slot.closePath();
    shape.holes.push(slot);

    const body = new THREE.Mesh(extrudeShape(shape, 0.05, 0.014, 3), materials.silver);
    group.add(body);
    const bevel = new THREE.LineSegments(new THREE.EdgesGeometry(body.geometry, 30), materials.edgeLine);
    body.add(bevel);

    const lume = new THREE.Mesh(new THREE.BoxGeometry(width * 0.24, length * 0.14, 0.022), materials.lume);
    lume.position.set(0, length * 0.79, 0.035);
    group.add(lume);

    const hub = new THREE.Mesh(new THREE.CylinderGeometry(width * 0.62, width * 0.62, 0.055, 24), materials.polished);
    hub.rotation.x = Math.PI / 2;
    group.add(hub);
  }

  group.rotation.z = angle;
  group.position.z = z;
  return group;
}

function makeMarker(materials, angle, size) {
  const marker = new THREE.Mesh(new THREE.BoxGeometry(0.055, size, 0.035), materials.lume);
  marker.position.set(3.48 * Math.sin(angle), 4.24 * Math.cos(angle), 0.892);
  marker.rotation.z = -angle;
  return marker;
}

function makeSpiral(materials, turns, inner, outer, tube, z, material) {
  const points = [];
  const steps = turns * 80;
  for (let i = 0; i <= steps; i++) {
    const p = i / steps;
    const a = p * turns * TAU;
    const r = inner + (outer - inner) * p;
    points.push(new THREE.Vector3(Math.cos(a) * r, Math.sin(a) * r, 0));
  }
  const curve = new THREE.CatmullRomCurve3(points);
  const geometry = new THREE.TubeGeometry(curve, 420, tube, 5, false);
  const mesh = new THREE.Mesh(geometry, material || materials.blued);
  mesh.position.z = z;
  return mesh;
}

function makeRotor(materials) {
  const shape = new THREE.Shape();
  shape.absarc(0, 0, 3.0, Math.PI * 0.5, Math.PI * 1.5, false);
  shape.absarc(0, 0, 1.95, Math.PI * 1.5, Math.PI * 0.5, true);
  shape.closePath();
  addCircleHole(shape, -2.48, 0.55, 0.33, 22);
  addCircleHole(shape, -2.48, -0.55, 0.33, 22);
  addSlotHole(shape, -1.85, 1.08, 0.72, 0.22, 0.08, -0.65);
  addSlotHole(shape, -1.85, -1.08, 0.72, 0.22, 0.08, 0.65);

  const group = new THREE.Group();
  const spin = new THREE.Group();
  group.add(spin);

  const body = new THREE.Mesh(extrudeShape(shape, 0.085, 0.02, 3), materials.titanium);
  spin.add(body);

  const weightShape = new THREE.Shape();
  weightShape.absarc(0, 0, 3.0, Math.PI * 0.62, Math.PI * 1.38, false);
  weightShape.absarc(0, 0, 2.4, Math.PI * 1.38, Math.PI * 0.62, true);
  weightShape.closePath();
  addSlotHole(weightShape, -2.72, 0, 0.2, 0.6, 0.08, Math.PI / 2);
  const weight = new THREE.Mesh(extrudeShape(weightShape, 0.06, 0.012, 2), materials.roseGold);
  weight.position.z = 0.075;
  spin.add(weight);

  const hub = new THREE.Mesh(new THREE.CylinderGeometry(0.42, 0.42, 0.18, 32), materials.polished);
  hub.rotation.x = Math.PI / 2;
  spin.add(hub);

  return { group, spin };
}

export function buildWatch(materials) {
  const root = new THREE.Group();
  root.scale.setScalar(0.9);

  const parts = [];
  const gears = [];

  const identity = new THREE.Quaternion();
  const tempQuat = new THREE.Quaternion();

  function register(object, options = {}) {
    const part = {
      object,
      basePosition: object.position.clone(),
      baseQuaternion: object.quaternion.clone(),
      direction: new THREE.Vector3(...(options.direction || [0, 0, 1])),
      delay: options.delay ?? random() * 0.8,
      spinAxis: new THREE.Vector3(random() - 0.5, random() - 0.5, random() - 0.5).normalize(),
      spinSpeed: options.spinSpeed ?? 0.32 + random() * 0.62,
      phase: random() * TAU,
      spinQuaternion: new THREE.Quaternion(),
      fadeMaterial: options.fadeTo != null ? object.material : null,
      fadeTo: options.fadeTo ?? 1,
    };
    parts.push(part);
    return part;
  }

  function add(object, options) {
    root.add(object);
    register(object, options);
    return object;
  }

  // ------------------------------------------------------------------
  // Sapphire case
  // ------------------------------------------------------------------
  const bandShape = superellipseShape(3.98, 4.79, 3.35, 200);
  const bandInner = superellipsePoints(3.61, 4.4, 3.35, 200).reverse();
  bandShape.holes.push(new THREE.Path(bandInner));
  const bandMaterial = materials.sapphire.clone();
  const band = new THREE.Mesh(extrudeShape(bandShape, 2.14, 0.075, 4), bandMaterial);
  add(band, { direction: [0, 0.02, -2.8], delay: 0.12, spinSpeed: 0.2, fadeTo: 0.42 });

  const crystalShape = superellipseShape(3.9, 4.7, 3.35, 200);
  const frontCrystalMaterial = materials.sapphireCrystal.clone();
  const frontCrystal = new THREE.Mesh(extrudeShape(crystalShape, 0.17, 0.04, 3), frontCrystalMaterial);
  frontCrystal.position.z = 1.05;
  add(frontCrystal, { direction: [2.5, 1.8, 1.45], delay: 0.04, spinSpeed: 0.38, fadeTo: 0.05 });

  const backCrystalMaterial = materials.sapphireCrystal.clone();
  const backCrystal = new THREE.Mesh(extrudeShape(crystalShape, 0.15, 0.035, 3), backCrystalMaterial);
  backCrystal.position.z = -1.0;
  add(backCrystal, { direction: [0.45, -0.3, -4.0], delay: 0.26, spinSpeed: 0.26, fadeTo: 0.12 });

  // Strap lugs
  const lugSpecs = [
    [-1.85, 4.38, 0.16, 1],
    [1.85, 4.38, -0.16, 1],
    [-1.85, -4.38, Math.PI - 0.16, -1],
    [1.85, -4.38, Math.PI + 0.16, -1],
  ];
  lugSpecs.forEach(([x, y, rotation, side], index) => {
    const lugShape = new THREE.Shape();
    lugShape.moveTo(-0.34, -0.42);
    lugShape.bezierCurveTo(-0.4, 0.08, -0.28, 0.52, 0, 0.62);
    lugShape.bezierCurveTo(0.28, 0.52, 0.4, 0.08, 0.34, -0.42);
    lugShape.lineTo(0.13, -0.45);
    lugShape.bezierCurveTo(0.14, -0.1, 0.09, 0.16, 0, 0.2);
    lugShape.bezierCurveTo(-0.09, 0.16, -0.14, -0.1, -0.13, -0.45);
    lugShape.closePath();
    const lug = new THREE.Mesh(extrudeShape(lugShape, 0.46, 0.05, 3), materials.bridge);
    lug.position.set(x, y, -0.02);
    lug.rotation.z = rotation;
    add(lug, {
      direction: [Math.sign(x) * 0.9, side * (1.3 + index * 0.06), -1.1 - index * 0.22],
      delay: 0.13 + index * 0.035,
      spinSpeed: 0.4,
    });
  });

  // Crown
  const crown = new THREE.Group();
  const crownBody = new THREE.Mesh(new THREE.CylinderGeometry(0.36, 0.4, 0.42, 36), materials.titanium);
  crownBody.rotation.z = Math.PI / 2;
  crown.add(crownBody);
  const crownCap = new THREE.Mesh(new THREE.CylinderGeometry(0.36, 0.36, 0.07, 36), materials.polished);
  crownCap.rotation.z = Math.PI / 2;
  crownCap.position.x = 0.23;
  crown.add(crownCap);
  for (let i = 0; i < 18; i++) {
    const groove = new THREE.Mesh(new THREE.BoxGeometry(0.47, 0.045, 0.07), materials.darkMetal);
    const a = (i / 18) * TAU;
    groove.position.set(0, Math.cos(a) * 0.385, Math.sin(a) * 0.385);
    groove.rotation.x = -a;
    crown.add(groove);
  }
  crown.position.set(4.16, 0, 0.0);
  add(crown, { direction: [2.0, 0.12, 1.1], delay: 0.18, spinSpeed: 0.5 });

  // Bezel screws
  const screwAngles = [22.5, 67.5, 112.5, 157.5, 202.5, 247.5, 292.5, 337.5];
  for (let i = 0; i < screwAngles.length; i++) {
    const angle = THREE.MathUtils.degToRad(screwAngles[i]);
    const x = 3.73 * Math.sin(angle);
    const y = 4.51 * Math.cos(angle);
    const screw = makeSplineScrew(materials, 0.235, 0.085);
    screw.position.set(x, y, 1.142);
    screw.rotation.z = random() * TAU;
    const radial = new THREE.Vector3(x, y, 0).normalize().multiplyScalar(1.45);
    radial.z = 1.7 + random() * 1.6;
    radial.x *= 1.5;
    radial.y *= 1.5;
    add(screw, { direction: radial.toArray(), delay: 0.08 + i * 0.036, spinSpeed: 0.5 + random() * 0.4 });
  }

  // Inner flange and hour markers
  const flangeShape = superellipseShape(3.57, 4.35, 3.35, 180);
  const flangeHole = superellipsePoints(3.3, 4.08, 3.35, 180).reverse();
  flangeShape.holes.push(new THREE.Path(flangeHole));
  const flange = new THREE.Group();
  const flangeRing = new THREE.Mesh(extrudeShape(flangeShape, 0.07, 0.018, 3), materials.titanium);
  flange.add(flangeRing);
  for (let i = 0; i < 12; i++) {
    const angle = (i / 12) * TAU;
    flange.add(makeMarker(materials, angle, i % 3 === 0 ? 0.38 : 0.24));
  }
  flange.position.z = 0.82;
  add(flange, { direction: [1.45, 1.55, 1.25], delay: 0.1, spinSpeed: 0.3 });

  // ------------------------------------------------------------------
  // Main plate, rotor and movement
  // ------------------------------------------------------------------
  const plateShape = superellipseShape(3.34, 4.14, 3.3, 180);
  addCircleHole(plateShape, 0, 2.48, 1.03, 38);
  addCircleHole(plateShape, 0.1, 0.25, 0.52, 30);
  addCircleHole(plateShape, -1.92, 1.84, 0.46, 26);
  addCircleHole(plateShape, 2.04, 1.65, 0.4, 26);
  addCircleHole(plateShape, -1.92, -1.23, 0.43, 26);
  addCircleHole(plateShape, 1.07, -1.55, 0.36, 24);
  addCircleHole(plateShape, 0, -2.74, 0.92, 34);
  addSlotHole(plateShape, -1.18, 2.62, 0.5, 0.18, 0.06, 0.5);
  addSlotHole(plateShape, 1.44, 2.78, 0.46, 0.16, 0.06, -0.4);
  const plateGeometry = extrudeShape(plateShape, 0.18, 0.03, 3);
  const mainPlate = new THREE.Mesh(plateGeometry, materials.rhodium);
  mainPlate.add(new THREE.LineSegments(new THREE.EdgesGeometry(plateGeometry, 26), materials.edgeLine));
  mainPlate.position.z = -0.55;
  add(mainPlate, { direction: [-0.3, -1.55, -5.0], delay: 0.2, spinSpeed: 0.22 });

  const rotor = makeRotor(materials);
  rotor.group.position.z = -0.93;
  add(rotor.group, { direction: [0.35, -0.2, -5.4], delay: 0.3, spinSpeed: 0.18 });

  // Bridges
  const bridges = [];
  bridges.push(
    makeRibbonBridge(
      materials,
      [[-2.92, 1.98], [-2.42, 3.06], [-1.42, 3.52], [0, 3.24], [1.42, 3.52], [2.42, 3.06], [2.92, 1.98]],
      0.44,
      0.14,
      0.44,
    ),
  );
  bridges.push(
    makeRibbonBridge(
      materials,
      [[0.18, 1.22], [1.12, 1.46], [2.22, 1.02], [2.86, 0.22], [2.56, -0.68], [1.66, -1.0]],
      0.38,
      0.13,
      0.4,
    ),
  );
  bridges.push(
    makeRibbonBridge(
      materials,
      [[-0.24, 1.22], [-1.15, 1.66], [-2.06, 1.4], [-2.72, 0.72]],
      0.38,
      0.13,
      0.36,
      [[-2.52, -0.22], [-2.8, -0.86], [-2.16, -1.62]],
    ),
  );
  bridges.push(
    makeRibbonBridge(
      materials,
      [[-2.6, -1.4], [-1.4, -1.98], [0.1, -1.82], [1.6, -2.0], [2.5, -1.42]],
      0.4,
      0.14,
      0.46,
      [[2.4, -1.62], [1.75, -2.25], [1.05, -2.72]],
    ),
  );
  const bridgeDirections = [
    [0.45, 2.65, 2.3],
    [2.85, 0.82, 1.55],
    [-2.85, 1.0, 1.25],
    [0.18, -3.0, 1.95],
  ];
  bridges.forEach((bridge, i) => {
    add(bridge, { direction: bridgeDirections[i], delay: 0.16 + i * 0.03, spinSpeed: 0.34 + i * 0.06 });
  });

  // Gears
  const gearSpecs = [
    { name: 'barrel', x: 0, y: 2.46, z: 0.02, radius: 1.42, teeth: 48, material: materials.silver, thickness: 0.13, speed: 0.07 },
    { name: 'center', x: 0.02, y: 0.16, z: 0.16, radius: 0.88, teeth: 36, material: materials.silver, thickness: 0.11, speed: -0.14 },
    { name: 'third', x: 1.12, y: 0.9, z: 0.24, radius: 0.7, teeth: 30, material: materials.gold, thickness: 0.1, speed: 0.22 },
    { name: 'fourth', x: -1.16, y: 0.42, z: 0.28, radius: 0.62, teeth: 28, material: materials.silver, thickness: 0.1, speed: -0.3 },
    { name: 'escape', x: 1.02, y: -1.55, z: 0.38, radius: 0.4, teeth: 20, material: materials.gold, thickness: 0.085, speed: 0.8 },
    { name: 'upperLeft', x: -1.93, y: 1.87, z: 0.12, radius: 0.55, teeth: 24, material: materials.silver, thickness: 0.09, speed: -0.16 },
    { name: 'upperRight', x: 2.05, y: 1.66, z: 0.2, radius: 0.46, teeth: 22, material: materials.gold, thickness: 0.085, speed: 0.36 },
    { name: 'lowerLeft', x: -1.95, y: -1.24, z: 0.14, radius: 0.52, teeth: 24, material: materials.silver, thickness: 0.09, speed: -0.24 },
    { name: 'lowerRight', x: 1.28, y: -2.52, z: 0.22, radius: 0.43, teeth: 20, material: materials.silver, thickness: 0.08, speed: 0.44 },
  ];

  const gearDirections = [
    [0.62, 2.1, 1.5],
    [0.05, 0.05, 3.0],
    [2.25, 0.62, 2.2],
    [-2.35, 0.52, 1.55],
    [2.2, -1.3, 2.8],
    [-2.45, 1.0, 1.05],
    [2.5, 1.42, 0.72],
    [-2.4, -1.48, 1.22],
    [2.05, -2.2, 2.4],
  ];

  gearSpecs.forEach((spec, i) => {
    const gear = makeGear(materials, {
      radius: spec.radius,
      teeth: spec.teeth,
      thickness: spec.thickness,
      material: spec.material,
      spokes: spec.radius > 0.6 ? 5 : 4,
      pinion: spec.name !== 'escape' && spec.name !== 'lowerRight',
    });
    gear.group.position.set(spec.x, spec.y, spec.z);
    add(gear.group, { direction: gearDirections[i], delay: 0.18 + i * 0.025, spinSpeed: 0.42 + random() * 0.4 });
    gears.push({ spin: gear.spin, speed: spec.speed, angle: random() * TAU });
  });

  // Barrel drum, ratchet wheel and mainspring
  const barrelDrum = new THREE.Group();
  const drumWall = new THREE.Mesh(new THREE.CylinderGeometry(0.98, 0.98, 0.19, 40, 1, true), materials.gold);
  drumWall.rotation.x = Math.PI / 2;
  barrelDrum.add(drumWall);
  const drumFloor = new THREE.Mesh(new THREE.CylinderGeometry(0.98, 0.98, 0.05, 40), materials.titanium);
  drumFloor.rotation.x = Math.PI / 2;
  drumFloor.position.z = -0.09;
  barrelDrum.add(drumFloor);
  const spring = makeSpiral(materials, 5.5, 0.18, 0.84, 0.012, 0.1, materials.blued);
  barrelDrum.add(spring);
  barrelDrum.position.set(0, 2.46, 0.06);
  add(barrelDrum, { direction: [0.35, 1.75, 0.75], delay: 0.24, spinSpeed: 0.32 });

  const ratchet = makeGear(materials, {
    radius: 0.58,
    teeth: 22,
    thickness: 0.08,
    material: materials.gold,
    spokes: 4,
    pinion: false,
  });
  ratchet.group.position.set(0, 2.46, 0.22);
  add(ratchet.group, { direction: [-0.4, 1.18, 2.1], delay: 0.28, spinSpeed: 0.55 });
  gears.push({ spin: ratchet.spin, speed: -0.5, angle: 0 });

  // Pallet fork
  const forkShape = new THREE.Shape();
  forkShape.moveTo(-0.07, -0.16);
  forkShape.lineTo(0.07, -0.16);
  forkShape.lineTo(0.1, 0.32);
  forkShape.lineTo(0.34, 0.52);
  forkShape.lineTo(0.28, 0.63);
  forkShape.lineTo(0.03, 0.46);
  forkShape.lineTo(-0.03, 0.46);
  forkShape.lineTo(-0.28, 0.63);
  forkShape.lineTo(-0.34, 0.52);
  forkShape.lineTo(-0.1, 0.32);
  forkShape.closePath();
  const fork = new THREE.Mesh(extrudeShape(forkShape, 0.06, 0.012, 2), materials.polished);
  fork.position.set(0.46, -1.72, 0.44);
  fork.rotation.z = -0.5;
  add(fork, { direction: [1.0, -1.65, 2.6], delay: 0.3, spinSpeed: 0.7 });

  // Tourbillon cage
  const cage = new THREE.Group();
  const cageSpin = new THREE.Group();
  cage.add(cageSpin);
  const cageRing = new THREE.Mesh(new THREE.TorusGeometry(0.87, 0.035, 10, 80), materials.silver);
  cageSpin.add(cageRing);
  for (let i = 0; i < 3; i++) {
    const arm = new THREE.Mesh(new THREE.BoxGeometry(0.87, 0.055, 0.055), materials.silver);
    arm.position.x = 0.435;
    const armPivot = new THREE.Group();
    armPivot.rotation.z = (i / 3) * TAU;
    armPivot.add(arm);
    cageSpin.add(armPivot);
  }
  const cageHub = new THREE.Mesh(new THREE.CylinderGeometry(0.17, 0.17, 0.13, 24), materials.gold);
  cageHub.rotation.x = Math.PI / 2;
  cageSpin.add(cageHub);
  for (let i = 0; i < 3; i++) {
    const tiny = makeSplineScrew(materials, 0.055, 0.035);
    const a = (i / 3) * TAU + 0.5;
    tiny.position.set(Math.cos(a) * 0.75, Math.sin(a) * 0.75, 0.04);
    cageSpin.add(tiny);
  }
  cage.position.set(0, -2.74, 0.12);
  add(cage, { direction: [0.6, -2.4, 1.35], delay: 0.22, spinSpeed: 0.5 });

  // Balance wheel and hairspring
  const balance = new THREE.Group();
  const balanceSpin = new THREE.Group();
  balance.add(balanceSpin);
  const balanceRing = new THREE.Mesh(new THREE.TorusGeometry(0.72, 0.055, 12, 96), materials.gold);
  balanceSpin.add(balanceRing);
  for (let i = 0; i < 4; i++) {
    const spoke = new THREE.Mesh(new THREE.BoxGeometry(0.72, 0.045, 0.045), materials.gold);
    spoke.position.x = 0.36;
    const pivot = new THREE.Group();
    pivot.rotation.z = (i / 4) * TAU + Math.PI / 4;
    pivot.add(spoke);
    balanceSpin.add(pivot);
  }
  for (let i = 0; i < 8; i++) {
    const a = (i / 8) * TAU;
    const weight = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, 0.09, 12), materials.gold);
    weight.position.set(Math.cos(a) * 0.72, Math.sin(a) * 0.72, 0);
    balanceSpin.add(weight);
  }
  const balanceHub = new THREE.Mesh(new THREE.CylinderGeometry(0.11, 0.11, 0.15, 20), materials.polished);
  balanceHub.rotation.x = Math.PI / 2;
  balanceSpin.add(balanceHub);
  const hairspring = makeSpiral(materials, 5, 0.09, 0.52, 0.009, 0.09, materials.blued);
  balanceSpin.add(hairspring);
  balance.position.set(0, -2.74, 0.34);
  add(balance, { direction: [0.05, -2.75, 3.15], delay: 0.26, spinSpeed: 0.62 });

  // Jewels
  const jewelPositions = [
    [0, 2.46, 0.58],
    [0.02, 0.16, 0.55],
    [1.12, 0.9, 0.52],
    [-1.16, 0.42, 0.5],
    [1.02, -1.55, 0.56],
    [-1.93, 1.87, 0.45],
    [2.05, 1.66, 0.48],
    [-1.95, -1.24, 0.45],
    [0, -2.74, 0.68],
    [-0.86, -2.52, 0.55],
    [0.86, -2.52, 0.55],
  ];
  jewelPositions.forEach(([x, y, z], i) => {
    const jewel = makeJewel(materials, i >= 8 ? 0.075 : 0.095);
    jewel.position.set(x, y, z);
    const radial = new THREE.Vector3(x, y, 0);
    if (radial.lengthSq() < 0.01) radial.set(0.2, 0.2, 0);
    radial.normalize().multiplyScalar(1.85);
    radial.z = 2.1 + random() * 1.1;
    add(jewel, { direction: radial.toArray(), delay: 0.34 + i * 0.015, spinSpeed: 0.8 });
  });

  // Bridge screws
  const bridgeScrewPositions = [
    [-2.42, 3.06], [-1.42, 3.52], [1.42, 3.52], [2.42, 3.06],
    [1.12, 1.46], [2.86, 0.22], [-1.2, 1.58], [-2.9, 0.4],
    [-1.5, -1.94], [1.5, -1.94], [1.7, -2.35], [0, -1.8],
  ];
  bridgeScrewPositions.forEach(([x, y], i) => {
    const screw = makeSplineScrew(materials, 0.105, 0.05);
    screw.position.set(x, y, 0.59);
    screw.rotation.z = random() * TAU;
    const radial = new THREE.Vector3(x, y, 0).normalize().multiplyScalar(1.15);
    radial.z = 2.4 + random() * 1.3;
    add(screw, { direction: radial.toArray(), delay: 0.35 + i * 0.012, spinSpeed: 0.72 });
  });

  // Hands (classic 10:10:35 display)
  const hourAngle = -THREE.MathUtils.degToRad((10 + 10 / 60) * 30);
  const minuteAngle = -THREE.MathUtils.degToRad((10 + 35 / 60) * 6);
  const secondAngle = -THREE.MathUtils.degToRad(35 * 6);

  const hourHand = makeHand(materials, 2.15, 0.5, hourAngle, 0.84);
  hourHand.position.set(0, 0.16, 0.84);
  hourHand.rotation.z = hourAngle;
  add(hourHand, { direction: [-1.75, 1.95, 3.6], delay: 0.06, spinSpeed: 0.58 });

  const minuteHand = makeHand(materials, 2.92, 0.4, minuteAngle, 0.87);
  minuteHand.position.set(0, 0.16, 0.87);
  minuteHand.rotation.z = minuteAngle;
  add(minuteHand, { direction: [1.85, 2.2, 3.85], delay: 0.05, spinSpeed: 0.52 });

  const secondHand = makeHand(materials, 3.2, 0.035, secondAngle, 0.90, { seconds: true });
  secondHand.position.set(0, 0.16, 0.90);
  secondHand.rotation.z = secondAngle;
  add(secondHand, { direction: [0.55, 2.85, 4.2], delay: 0.03, spinSpeed: 0.66 });

  const centerCap = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.2, 0.075, 32), materials.polished);
  centerCap.rotation.x = Math.PI / 2;
  centerCap.position.set(0, 0.16, 0.925);
  add(centerCap, { direction: [0.1, 0.05, 4.5], delay: 0.02, spinSpeed: 0.7 });

  // ------------------------------------------------------------------
  // Animation
  // ------------------------------------------------------------------
  const forward = new THREE.Vector3();
  let explosionAmount = 0;

  function update(wallTime, cycleTime, delta, parallax) {
    const t = ((cycleTime % CYCLE) + CYCLE) % CYCLE;
    let phase = 'idle';
    let progress = 0;

    if (t >= EXPLODE_START && t < EXPLODE_END) {
      phase = 'explode';
      progress = (t - EXPLODE_START) / (EXPLODE_END - EXPLODE_START);
    } else if (t >= EXPLODE_END && t < FLOAT_END) {
      phase = 'float';
      progress = (t - EXPLODE_END) / (FLOAT_END - EXPLODE_END);
    } else if (t >= FLOAT_END && t < ASSEMBLE_END) {
      phase = 'assemble';
      progress = (t - FLOAT_END) / (ASSEMBLE_END - FLOAT_END);
    }

    const easedGlobal =
      phase === 'explode'
        ? easeOutCubic(progress)
        : phase === 'float'
          ? 1
          : phase === 'assemble'
            ? 1 - easeInOutCubic(progress)
            : 0;
    explosionAmount = easedGlobal;

    for (const part of parts) {
      let amount = 0;
      if (phase === 'explode') {
        const start = part.delay * 0.28;
        amount = easeOutCubic(clamp01((progress - start) / (1 - start)));
      } else if (phase === 'float') {
        amount = 1;
      } else if (phase === 'assemble') {
        const start = part.delay * 0.22;
        amount = 1 - easeInOutCubic(clamp01((progress - start) / (1 - start)));
      }

      const spinActive = phase === 'explode' || phase === 'float';
      if (spinActive && amount > 0.001) {
        tempQuat.setFromAxisAngle(part.spinAxis, part.spinSpeed * delta);
        part.spinQuaternion.multiply(tempQuat).normalize();
      } else if (amount <= 0.0001) {
        part.spinQuaternion.copy(identity);
      } else {
        const settle = 1 - Math.exp(-delta * 7.0);
        part.spinQuaternion.slerp(identity, settle);
      }

      part.object.position.copy(part.basePosition).addScaledVector(part.direction, amount);
      if (amount > 0) {
        part.object.position.x += Math.sin(wallTime * 0.52 + part.phase) * 0.055 * amount;
        part.object.position.y += Math.cos(wallTime * 0.44 + part.phase * 1.3) * 0.05 * amount;
        part.object.position.z += Math.sin(wallTime * 0.37 + part.phase * 0.7) * 0.04 * amount;
      }
      part.object.quaternion.copy(part.baseQuaternion).multiply(part.spinQuaternion);
      if (part.fadeMaterial) part.fadeMaterial.opacity = 1 - amount * (1 - part.fadeTo);
    }

    // Live mechanics
    for (const gear of gears) {
      gear.angle += delta * gear.speed * (1 + explosionAmount * 1.8);
      gear.spin.rotation.z = gear.angle;
    }
    balanceSpin.rotation.z = Math.sin(wallTime * 11.4) * 0.52;
    cageSpin.rotation.z = wallTime * 0.42 + Math.sin(wallTime * 0.7) * 0.04;
    rotor.spin.rotation.z = -wallTime * 0.22 + Math.sin(wallTime * 0.53) * 0.14;

    // Pointer driven micro-parallax on mechanical layers
    if (parallax) {
      rotor.spin.position.x = -parallax.x * 0.08;
      rotor.spin.position.y = parallax.y * 0.06;
    }
  }

  function trigger(cycleTime) {
    return EXPLODE_START - 0.001;
  }

  return {
    group: root,
    parts,
    update,
    trigger,
    getExplosionAmount: () => explosionAmount,
    cycle: CYCLE,
    explodeStart: EXPLODE_START,
  };
}
