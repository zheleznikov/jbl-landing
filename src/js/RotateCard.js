export default class RotateCard {
  constructor(card) {
    this.card = card;
    this.front = this.card.querySelector('.card__front');
    this.back = this.card.querySelector('.card__back');
    this.handle();
  }

  rotateCard() {
    this.back.classList.toggle('card__back_rotate');
    this.front.classList.toggle('card__front_rotate');
    console.log('it')

  }

  handle() {
    this.card.addEventListener('click', this.rotateCard.bind(this));
  }


}