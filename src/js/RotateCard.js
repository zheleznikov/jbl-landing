export default class RotateCard {
  constructor(card) {
    this.card = card;
    this.front = this.card.querySelector('.card__front');
    this.back = this.card.querySelector('.card__back');
    this.handle();
    this.handleRotate();
    // console.log(window.innerWidth);
  }

  rotateCard() {
    this.back.classList.toggle('card__back_rotate');
    this.front.classList.toggle('card__front_rotate');
  }

  rotateForward() {
    this.back.classList.add('card__back_rotate');
    this.front.classList.add('card__front_rotate');
  }

  rotateBack() {
    this.back.classList.remove('card__back_rotate');
    this.front.classList.remove('card__front_rotate');
  }



  handleRotate() {
    if (window.innerWidth < 769) {
      this.card.addEventListener('click', this.rotateCard.bind(this));
    } else {
      this.card.addEventListener('mouseenter', this.rotateForward.bind(this));
      this.card.addEventListener('mouseleave', this.rotateBack.bind(this));
    }
  }

  handle() {
    window.addEventListener('resize', this.handleRotate.bind(this));
  }

}