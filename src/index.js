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
  againButton,
  popupContent,
  popupResult
} from "./js/constants";

new Quiz2(quizBody, quizData[0], nextButton);


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
  popupContent.classList.remove('popup__content_off');
  popupResult.classList.add('result_off');

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

  console.log('количество правильных ответов - ', sessionStorage.getItem("answer"))
  console.log('пройденные вопросы - ', number)

  if (number > 8) {
    nextButton.textContent = "Узнать результаты";
  }

  if (number > 9) {
    quizBody.innerHTML = "";
    popupContent.classList.add('popup__content_off');
    popupResult.classList.remove('result_off');
    new Result(popup, resData);
    shareImageHandle();

  } else {
    quizBody.innerHTML = "";
    nextButton.setAttribute("disabled", "disabled");
    new Quiz2(quizBody, quizData[number], nextButton);
    new PlaySpaceSound(popup);
    audioVizualization(popup, 50, audioCtx);
  }
}



openButtonPopup.addEventListener("click", firstOpenPopupQuizHandle);
againButton.addEventListener("click", firstOpenPopupQuizHandle);
nextButton.addEventListener("click", quizHandle);

// testing




const ogImage = document.querySelector('meta[property="og:image"]');
const twitterImage = document.querySelector('meta[name="twitter:image"]');
const vkImage = document.querySelector('meta[name="vk:image"]');

const yaShare = document.querySelector('.ya-share2');

yaShare.setAttribute('data-image', './images/res00.png');
yaShare.setAttribute('data-image:vkontakte', './images/res00.png');
yaShare.setAttribute('data-image:facebook', './images/res00.png');
yaShare.setAttribute('data-image:whatsapp', './images/res00.png');
yaShare.setAttribute('data-image:telegram', './images/res00.png');

function setYaShare(link) {
  yaShare.setAttribute('data-image', link);
  yaShare.setAttribute('data-image:vkontakte', link);
  yaShare.setAttribute('data-image:facebook', link);
  yaShare.setAttribute('data-image:whatsapp', link);
  yaShare.setAttribute('data-image:telegram', link);
  console.log(yaShare);
}


const socialMetaArr = [ogImage, twitterImage, vkImage];


function shareImageHandle() {
  console.log('handleShare start');
  const result = +sessionStorage.getItem("answer");

  switch (result) {
    case 0:
      socialMetaArr.forEach(tag => tag.content = './images/res00.png');
      setYaShare('./images/res00.png')
      socialMetaArr.forEach(tag => console.log(tag));

      break;
    case 1:
      socialMetaArr.forEach(tag => tag.content = './images/res01.png');
      setYaShare('./images/res01.png')
      socialMetaArr.forEach(tag => console.log(tag));
      break;

    case 2:

      setYaShare('./images/res02.png')

      socialMetaArr.forEach(tag => tag.content = './images/res02.png');
      socialMetaArr.forEach(tag => console.log(tag));

      break;
    case 3:
      setYaShare('./images/res03.png')

      socialMetaArr.forEach(tag => tag.content = './images/res03.png');
      socialMetaArr.forEach(tag => console.log(tag.content));

      break;
    case 4:
      setYaShare('./images/res04.png')

      socialMetaArr.forEach(tag => tag.content = './images/res04.png');
      socialMetaArr.forEach(tag => console.log(tag));

      break;
    case 5:
      setYaShare('./images/res05.png')

      socialMetaArr.forEach(tag => tag.content = './images/res05.png');
      socialMetaArr.forEach(tag => console.log(tag));

      break;
    case 6:
      setYaShare('./images/res06.png')

      socialMetaArr.forEach(tag => tag.content = './images/res06.png');
      socialMetaArr.forEach(tag => console.log(tag));

      break;
    case 7:
      setYaShare('./images/res07.png')

      socialMetaArr.forEach(tag => tag.content = './images/res07.png');
      socialMetaArr.forEach(tag => console.log(tag));

      break;
    case 8:
      setYaShare('./images/res08.png')

      socialMetaArr.forEach(tag => tag.content = './images/res08.png');
      socialMetaArr.forEach(tag => console.log(tag));

      break;
    case 9:
      setYaShare('./images/res09.png')

      socialMetaArr.forEach(tag => tag.content = './images/res09.png');
      socialMetaArr.forEach(tag => console.log(tag));

      break;
    case 10:
      setYaShare('./images/res10.png')

      socialMetaArr.forEach(tag => tag.content = './images/res10.png');
      socialMetaArr.forEach(tag => console.log(tag));

      break;

  }

}