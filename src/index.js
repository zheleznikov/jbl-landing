// plugins
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import "lazysizes/plugins/unveilhooks/ls.unveilhooks";
import SmoothScroll from 'smooth-scroll';
import simpleParallax from 'simple-parallax-js';

// custom functions
import audioVizualization from './js/audioVizualization';
import PlaySpaceSound from './js/PlaySpaceSound';
import RotateCard from './js/RotateCard';
import removeHash from './js/removeHash';

import {
  planetBlocks,
  cards,
  linkToHandle,
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
from './js/constants';


window.AudioContext = window.AudioContext || window.webkitAudioContext;
window.onload = () => planetBlocks.forEach(planetBlock => audioVizualization(planetBlock));

planetBlocks.forEach(planetBlock => new PlaySpaceSound(planetBlock));

cards.forEach(card => new RotateCard(card));

linkToHandle.addEventListener('click', removeHash);


new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  easing: 'easeInCubic'
});


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



