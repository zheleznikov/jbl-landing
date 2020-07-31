window.AudioContext = window.AudioContext || window.webkitAudioContext;

import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import "lazysizes/plugins/unveilhooks/ls.unveilhooks";
import CircleType from 'circletype';
import audioVizualization from './js/components/audioVizualization';

const canvas1 = document.querySelector('.track__canvas_1');
const canvas2 = document.querySelector('.track__canvas_2');
const audio1 = document.querySelector('.track__audio_1');
const audio2 = document.querySelector('.track__audio_2');
const playButton1 = document.querySelector('.track__button_1');
const playButton2 = document.querySelector('.track__button_2');

// new CircleType(document.querySelector('.header__icon-text')).radius(180).fitText();


// audioVizualization(canvas1, audio1);
// audioVizualization(canvas2, audio2);

window.onload = function() {
  // audioVizualization(canvas1, audio1, playButton1);
  // audioVizualization(canvas2, audio2, playButton2);
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

// playButton1.addEventListener('click', play1);

// playButton1.addEventListener('click', function() {
//   audioVizualization(canvas1, audio1);
// });

// playButton2.addEventListener('click', play2);

// playButton2.addEventListener('click', function() {
//   audioVizualization(canvas2, audio2);
// });