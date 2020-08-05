window.AudioContext = window.AudioContext || window.webkitAudioContext;
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import "lazysizes/plugins/unveilhooks/ls.unveilhooks";
import Rellax from 'rellax';
import SmoothScroll from 'smooth-scroll';
import audioVizualization from './js/audioVizualization';
import PlaySpaceSound from './js/PlaySpaceSound';
import RotateCard from './js/RotateCard';

import simpleParallax from 'simple-parallax-js';
const planetBlocks = document.querySelectorAll('.planet-block');
const cards = document.querySelectorAll('.card');
const planets = document.querySelectorAll('.planet');
const parallaxEls = document.querySelectorAll('.parallax');
const marsParallax = document.querySelector('.parallax-mars')


window.onload = () => planetBlocks.forEach(planetBlock => audioVizualization(planetBlock));
planetBlocks.forEach(planetBlock => new PlaySpaceSound(planetBlock));
cards.forEach(card => new RotateCard(card));

 new SmoothScroll('a[href*="#"]', {speed: 1000, easing: 'easeInCubic'});
// paralax-scrolling



// const parallax = new Rellax('.parallax', {
//   speed: 2,
//   center: true,
// });

new simpleParallax(parallaxEls, {
  delay: 0.8,
  orientation: 'down',
  orientation: 'up',
  scale: 1.1,
  overflow: true,
  // transition: 'ease-in-out'
});

new simpleParallax(marsParallax, {
  delay: 1.1,
  orientation: 'down',
  orientation: 'up',

  scale: 1.3,
  overflow: true,
});








