window.AudioContext = window.AudioContext || window.webkitAudioContext;

import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import "lazysizes/plugins/unveilhooks/ls.unveilhooks";
import simpleParallax from 'simple-parallax-js';

import audioVizualization from './js/audioVizualization';
import PlaySpaceSound from './js/PlaySpaceSound';

const jupiter = document.querySelector('.jupiter');
const saturn = document.querySelector('.saturn');
const mars = document.querySelector('.mars');

new PlaySpaceSound(jupiter);
new PlaySpaceSound(saturn);
new PlaySpaceSound(mars);


window.onload = function() {
  audioVizualization(jupiter);
  audioVizualization(saturn);
  audioVizualization(mars);
}





// paralax-scrolling

const planets = document.querySelectorAll('.planet');
// console.log(planets)

new simpleParallax(planets, {
  // scale: 2,
  delay: 1.6,
  transition: 'cubic-bezier(0,0,0,1)',
  // maxTransition: 80
});

// const rellax = new Rellax('.rellax', {
//   speed: 2,
//   // center: false,
//   // wrapper: null,
//   // round: true,
//   // vertical: true,
//   // horizontal: false
// });