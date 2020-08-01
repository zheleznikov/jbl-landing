window.AudioContext = window.AudioContext || window.webkitAudioContext;

import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import "lazysizes/plugins/unveilhooks/ls.unveilhooks";
// import CircleType from 'circletype';
import simpleParallax from 'simple-parallax-js';
import audioVizualization from './js/components/audioVizualization';



const canvas1 = document.querySelector('.track__canvas_1');
const canvas2 = document.querySelector('.track__canvas_2');
const audio1 = document.querySelector('.track__audio_1');
const audio2 = document.querySelector('.track__audio_2');
const playButton1 = document.querySelector('.track__button_1');
const playButton2 = document.querySelector('.track__button_2');




// audioVizualization(canvas1, audio1);
// audioVizualization(canvas2, audio2);

window.onload = function() {
  audioVizualization(canvas1, audio1, playButton1);
  audioVizualization(canvas2, audio2, playButton2);
}




// запуск аудио

function playing(player) {
  if (player.paused === true) {
    player.play();
  } else {
    player.pause();
  }
}

function play1() {
  playing(audio1);
}

function play2() {
  playing(audio2);
}

playButton1.addEventListener('click', play1);

// playButton1.addEventListener('click', function() {
//   audioVizualization(canvas1, audio1);
// });

playButton2.addEventListener('click', play2);

// playButton2.addEventListener('click', function() {
//   audioVizualization(canvas2, audio2);
// });




// paralax-scrolling

const planets = document.querySelectorAll('.planet');
console.log(planets)

// new simpleParallax(planets, {
//   // scale: 2,
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