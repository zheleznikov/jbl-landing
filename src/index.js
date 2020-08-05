window.AudioContext = window.AudioContext || window.webkitAudioContext;

import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import "lazysizes/plugins/unveilhooks/ls.unveilhooks";
import SmoothScroll from 'smooth-scroll';
import simpleParallax from 'simple-parallax-js';

import audioVizualization from './js/audioVizualization';
import PlaySpaceSound from './js/PlaySpaceSound';
import RotateCard from './js/RotateCard';
import removeHash from './js/removeHash';

import {
  planetBlocks,
  cards,
  parallaxEls,
  marsParallax,
  linkToListen
}
from './js/constants';

window.onload = () => planetBlocks.forEach(planetBlock => audioVizualization(planetBlock));
planetBlocks.forEach(planetBlock => new PlaySpaceSound(planetBlock));
cards.forEach(card => new RotateCard(card));


new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  easing: 'easeInCubic'
});

new simpleParallax(parallaxEls, {
  delay: 1.2,
  orientation: 'down',
  orientation: 'up',
  scale: 1.3,
  overflow: true,
  // transition: 'ease-in-out'
});

new simpleParallax(marsParallax, {
  delay: 0.9,
  orientation: 'down',
  orientation: 'up',
  scale: 1.3,
  overflow: true,
});


linkToListen.addEventListener('click', removeHash);