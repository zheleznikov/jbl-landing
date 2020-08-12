// plugins
import "lazysizes";
import "lazysizes/plugins/parent-fit/ls.parent-fit";
import "lazysizes/plugins/unveilhooks/ls.unveilhooks";

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
  nextButton,
  quizBody,
  againButton
} from "./js/constants";

new Quiz2(quizBody, quizData[0], nextButton);

// new Result(popup, resData);
// document.querySelector('.popup__content').classList.add('popup__content_off');
// document.querySelector('.result').classList.remove('result_off');

planetBlocks.forEach((planetBlock) => {
  new PlaySpaceSound(planetBlock);
  audioVizualization(planetBlock, 50, audioCtx);
});
cards.forEach((card) => new RotateCard(card));
linkToHandle.addEventListener("click", removeHash);
changeLogoSizeInPopup();

new Popup(popup, openButtonPopup, main);


function firstOpenPopupQuizHandle() {
  nextButton.classList.remove("popup__next_off");
  nextButton.textContent = "Следующий вопрос";
  document.querySelector('.popup__content').classList.remove('popup__content_off');
  document.querySelector('.result').classList.add('result_off');
  sessionStorage.setItem("number", 0);
  sessionStorage.setItem("answer", 0);

  quizBody.innerHTML = "";
  new Quiz2(quizBody, quizData[0], nextButton);
  new PlaySpaceSound(popup);
  audioVizualization(popup, 120, audioCtx);
}

function quizHandle() {
  sessionStorage.setItem("number", +sessionStorage.getItem("number") + 1);
  let number = sessionStorage.getItem("number");
  
  console.log('количество правильных ответов - ',  sessionStorage.getItem("answer"))
  console.log('пройденные вопросы - ', number)

  if (number > 8) {
    nextButton.textContent = "Узнать результаты";
  }

  if (number > 9) {
    quizBody.innerHTML = "";
    document.querySelector('.popup__content').classList.add('popup__content_off');
    document.querySelector('.result').classList.remove('result_off');
    new Result(popup, resData);

    // quizBody.classList.add('popup__body_res');
    // nextButton.classList.add("popup__next_off");
  } else {
    quizBody.innerHTML = "";
    nextButton.setAttribute("disabled", "disabled");
    new Quiz2(quizBody, quizData[number], nextButton);
    new PlaySpaceSound(popup);
    audioVizualization(popup, 50, audioCtx);
  }
}

openButtonPopup.addEventListener("click",firstOpenPopupQuizHandle);
againButton.addEventListener("click",firstOpenPopupQuizHandle);
nextButton.addEventListener("click", quizHandle);





