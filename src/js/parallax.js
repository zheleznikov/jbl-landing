import simpleParallax from 'simple-parallax-js';

import {
  parallaxImgs,
  marsInHeaderImg,
  smallJupiterImg,
  whiteHeadsetsImg,
  jupiterImg,
  saturnImg,
  marsImg,
  ganymedeImg,
  cometImg,
}
from './constants';

const parallaxConfig = {
  orientation: 'down',
  orientation: 'up',
  scale: 1.3,
  overflow: true,
}

const defaultDelay = {
  delay: 1.2,
}

// new simpleParallax(parallaxImgs, {...defaultDelay, ...parallaxConfig});
new simpleParallax(marsInHeaderImg, { delay: 0.5, ...parallaxConfig});
new simpleParallax(smallJupiterImg, { ...defaultDelay, ...parallaxConfig });
new simpleParallax(whiteHeadsetsImg, { delay: 1.0, ...parallaxConfig });
new simpleParallax(jupiterImg, { delay: 0.9, ...parallaxConfig });
new simpleParallax(saturnImg, { ...defaultDelay, ...parallaxConfig });
new simpleParallax(marsImg, { ...defaultDelay, ...parallaxConfig });
new simpleParallax(ganymedeImg, { ...defaultDelay, ...parallaxConfig });
new simpleParallax(cometImg, { delay: 0.5, ...parallaxConfig });