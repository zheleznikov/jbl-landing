window.AudioContext = window.AudioContext || window.webkitAudioContext;
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import "lazysizes/plugins/unveilhooks/ls.unveilhooks";
import Rellax from 'rellax';

import audioVizualization from './js/audioVizualization';
import PlaySpaceSound from './js/PlaySpaceSound';
import RotateCard from './js/RotateCard';
// import SimpleParallax from 'simple-parallax-js';
// import simpleParallax from 'simple-parallax-js';
const planetBlocks = document.querySelectorAll('.planet-block');
const cards = document.querySelectorAll('.card');
const planets = document.querySelectorAll('.planet');


window.onload = () => planetBlocks.forEach(planetBlock => audioVizualization(planetBlock));
planetBlocks.forEach(planetBlock => new PlaySpaceSound(planetBlock));
cards.forEach(card => new RotateCard(card));


// paralax-scrolling

// const parallax = new Rellax('.planet');

// new simpleParallax(planets, {
//   // scale: 1.5,
//   delay: 1.6,
//   transition: 'cubic-bezier(0,0,0,1)',
//   // maxTransition: 80
// });








