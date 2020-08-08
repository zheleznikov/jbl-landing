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
import Popup from './js/Popup';
import Quiz from './js/Quiz';

import {
  planetBlocks,
  cards,
  linkToHandle,
  popup,
  openButtonPopup,
  page,
  quizBlock
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


new Popup(popup, openButtonPopup, page);
new Quiz(quizBlock, quizData[0]);


// document.querySelector('.answer_1').addEventListener('click' , () => {

//   document.querySelectorAll('.answer__hint').forEach(hint => hint.classList.toggle('answer__hint_on'));
//   document.querySelectorAll('.popup__answers').forEach(answer => answer.classList.toggle('popup__answers_clicked'));
// })








