const planetBlocks = document.querySelectorAll('.planet-block');
const cards = document.querySelectorAll('.card');
const linkToHandle = document.querySelector('.social__link_down');

// images to parallax
const marsInHeaderImg = document.querySelector('.header__planet_1');
const smallJupiterImg = document.querySelector('.social__planet');
const whiteHeadsetsImg = document.querySelector('.lead__img-container');
const jupiterImg = document.querySelector('.jupiter__img');
const saturnImg = document.querySelector('.saturn__img');
const marsImg = document.querySelector('.mars__img');
const ganymedeImg = document.querySelector('.ganymede__img');
const cometImg = document.querySelector('.comet__img');

// about popup
const popup = document.querySelector('.popup');
const jblLogoPopup = popup.querySelectorAll('.logo_jbl');
const hypeLogoPopup = popup.querySelectorAll('.logo_hype');
const openButtonPopup = document.querySelector('.quiz__button');
const main = document.querySelector('.main');

const quizBody = document.querySelector('.popup__body');
const nextButton = document.querySelector('.popup__next');
const againButton = document.querySelector('.result__again');

const popupContent = document.querySelector('.popup__content');
const popupResult = document.querySelector('.result');

export {
  planetBlocks,
  cards,
  linkToHandle,
  marsInHeaderImg,
  smallJupiterImg,
  whiteHeadsetsImg,
  jupiterImg,
  saturnImg,
  marsImg,
  ganymedeImg,
  cometImg,
  popup,
  jblLogoPopup,
  hypeLogoPopup,
  openButtonPopup,
  main,
  nextButton,
  quizBody,
  againButton,
  popupContent,
  popupResult
}