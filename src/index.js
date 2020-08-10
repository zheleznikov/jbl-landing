// plugins
import "lazysizes";
import "lazysizes/plugins/parent-fit/ls.parent-fit";
import "lazysizes/plugins/unveilhooks/ls.unveilhooks";
// import Snap from 'snapsvg';

// "custom" functions
import "./js/parallax";
import "./js/scroll";
import audioVizualization from "./js/audioVizualization";
import PlaySpaceSound from "./js/PlaySpaceSound";
import RotateCard from "./js/RotateCard";
import removeHash from "./js/removeHash";
import quizData from "./js/quizData";
import resData from "./js/resData";
import changeLogoSizeInPopup from "./js/logos";
import Popup from "./js/Popup";
import Quiz from "./js/Quiz";
import Quiz2 from "./js/Quiz2";
import Result from "./js/Result";

const AudioContext = window.AudioContext || window.webkitAudioContext;
const audioCtx = new AudioContext();

import {
  planetBlocks,
  cards,
  linkToHandle,
  popup,
  openButtonPopup,
  main,
  quizBlock,
  nextButton,
  quizBody,
} from "./js/constants";

new Quiz2(quizBody, quizData[0], nextButton);

planetBlocks.forEach((planetBlock) => {
  new PlaySpaceSound(planetBlock);
  audioVizualization(planetBlock, 50, audioCtx)
});
cards.forEach((card) => new RotateCard(card));
linkToHandle.addEventListener("click", removeHash);
changeLogoSizeInPopup();

new Popup(popup, openButtonPopup, main);

// ВТОРАЯ РЕАЛИЗАЦИЯ, ДЛЯ КЛАССА Quiz2

function firstOpenPopupQuizHandle() {
  nextButton.classList.remove("popup__next_off");
  nextButton.textContent = "Следующий вопрос";
  new Result(quizBody, resData);
  quizBody.classList.remove('popup__body_res');

  quizBody.innerHTML = "";
  new Quiz2(quizBody, quizData[0], nextButton);
  new PlaySpaceSound(popup);
  audioVizualization(popup, 120, audioCtx);
}

function quizHandle() {
  localStorage.setItem("number", +localStorage.getItem("number") + 1);
  let number = localStorage.getItem("number");
  
  console.log('количество правильных ответов - ',  localStorage.getItem("answer"))
  console.log('пройденные вопросы - ', number)

  if (number > 8) {
    nextButton.textContent = "Узнать результаты";
  }

  if (number > 9) {
    new Result(quizBody, resData);
    quizBody.classList.add('popup__body_res');
    nextButton.classList.add("popup__next_off");
  } else {
    quizBody.innerHTML = "";
    nextButton.setAttribute("disabled", "disabled");
    new Quiz2(quizBody, quizData[number], nextButton);
    new PlaySpaceSound(popup);
    audioVizualization(popup, 50, audioCtx);
  }
}

openButtonPopup.addEventListener("click",firstOpenPopupQuizHandle);
nextButton.addEventListener("click", quizHandle);



// ПЕРВАЯ РЕАЛИЗАЦИЯ ДЛЯ КЛАССА Quiz

// openButtonPopup.addEventListener("click", () => {
//   localStorage.setItem("number", 0);
//   localStorage.setItem("answer", 0);
//   nextButton.textContent = 'Следующий вопрос';
//   new Quiz(quizBlock, quizData[0]);
// });

// nextButton.addEventListener("click", () => {
//   localStorage.setItem("number", +localStorage.getItem("number") + 1);
//   console.log('колво правильных ответов - ',  localStorage.getItem("answer"))
//   let number = localStorage.getItem("number");
//   if (number > 8) {
//     nextButton.textContent = 'Узнать результаты';
//   }

//   if (number > 9) {
//     console.log("finish");
//   } else {
//     new Quiz(quizBlock, quizData[number]);
//   }

// });




