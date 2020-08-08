// plugins
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import "lazysizes/plugins/unveilhooks/ls.unveilhooks";

// "custom" functions
import './js/parallax';
import './js/scroll';
import audioVizualization from './js/audioVizualization';
import PlaySpaceSound from './js/PlaySpaceSound';
import RotateCard from './js/RotateCard';
import removeHash from './js/removeHash';
import quizData from './js/quizData';
import changeLogoSize from './js/logos';

import {
  planetBlocks,
  cards,
  linkToHandle,
}
from './js/constants';


window.AudioContext = window.AudioContext || window.webkitAudioContext;
window.onload = () => planetBlocks.forEach(planetBlock => audioVizualization(planetBlock));
planetBlocks.forEach(planetBlock => new PlaySpaceSound(planetBlock));
cards.forEach(card => new RotateCard(card));
linkToHandle.addEventListener('click', removeHash);

changeLogoSize();






