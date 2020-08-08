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
import changeLogoSizeInPopup from './js/logos';

import {
  planetBlocks,
  cards,
  linkToHandle,
  popup
}
from './js/constants';


window.AudioContext = window.AudioContext || window.webkitAudioContext;
planetBlocks.forEach(planetBlock => new PlaySpaceSound(planetBlock));
cards.forEach(card => new RotateCard(card));
linkToHandle.addEventListener('click', removeHash);

new PlaySpaceSound(popup);
window.onload = () => {
  planetBlocks.forEach(planetBlock => audioVizualization(planetBlock, 50));
  audioVizualization(popup, 150);
};

changeLogoSizeInPopup();


document.querySelector('.answer_1').addEventListener('click' , () => {
  console.log(document.querySelectorAll('.answer__hint'));

  document.querySelectorAll('.answer__hint').forEach(hint => hint.classList.toggle('answer__hint_on'));
  document.querySelectorAll('.popup__answers').forEach(answer => answer.classList.toggle('popup__answers_clicked'));
})








