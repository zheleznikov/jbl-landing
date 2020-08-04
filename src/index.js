window.AudioContext = window.AudioContext || window.webkitAudioContext;

import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import "lazysizes/plugins/unveilhooks/ls.unveilhooks";
import Rellax from 'rellax';
import simpleParallax from 'simple-parallax-js';

import audioVizualization from './js/audioVizualization';
import PlaySpaceSound from './js/PlaySpaceSound';
import RotateCard from './js/RotateCard';
import SimpleParallax from 'simple-parallax-js';

const planetBlocks = document.querySelectorAll('.planet-block');
const cards = document.querySelectorAll('.card');

window.onload = () => planetBlocks.forEach(planetBlock => audioVizualization(planetBlock));
planetBlocks.forEach(planetBlock => new PlaySpaceSound(planetBlock));
cards.forEach(card => new RotateCard(card));




// paralax-scrolling

const planets = document.querySelectorAll('.planet');
console.log(planets)

const parallax = new Rellax('.planet');

// new SimpleParallax(document.querySelector('.mars__img'), {
//   delay: 1.6,
//   transition: 'cubic-bezier(0,0,0,1)',
//   scale: 1.3
// });

// new simpleParallax(planets, {
//   // scale: 1.5,
//   delay: 1.6,
//   transition: 'cubic-bezier(0,0,0,1)',
//   // maxTransition: 80
// });

// const rellax = new Rellax('.rellax', {
//   speed: 2,
//   // center: false,
//   // wrapper: null,
//   // round: true,
//   // vertical: true,
//   // horizontal: false
// });






