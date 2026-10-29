import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { BokehPass } from 'three/addons/postprocessing/BokehPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';

export function createPost(renderer, scene, camera, options = {}) {
  const composer = new EffectComposer(renderer);
  composer.setPixelRatio(renderer.getPixelRatio());

  const renderPass = new RenderPass(scene, camera);
  composer.addPass(renderPass);

  const bokeh = new BokehPass(scene, camera, {
    focus: 34.5,
    aperture: 0.00105,
    maxblur: 0.0034,
  });
  if (options.depthOfField !== false) composer.addPass(bokeh);

  const bloom = new UnrealBloomPass(
    new THREE.Vector2(window.innerWidth, window.innerHeight),
    0.045,
    0.4,
    1.25,
  );
  if (options.bloom === true) composer.addPass(bloom);

  const output = new OutputPass();
  composer.addPass(output);

  function resize(width, height) {
    composer.setPixelRatio(renderer.getPixelRatio());
    composer.setSize(width, height);
    bokeh.setSize(width, height);
    bloom.setSize(width, height);
  }

  return {
    composer,
    bokeh,
    bloom,
    resize,
    setDepthOfField(enabled) {
      const hasPass = composer.passes.includes(bokeh);
      if (enabled && !hasPass) composer.insertPass(bokeh, 1);
      if (!enabled && hasPass) composer.removePass(bokeh);
    },
  };
}
