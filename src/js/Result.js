export default class Result {
  constructor(element, data) {
    this.element = element;
    this.data = data;
    this.result = sessionStorage.getItem("answer");
    this.number = this.element.querySelector('.result__number');
    this.status = this.element.querySelector('.result__status');
    this.text = this.element.querySelector('.result__text');
    this.bg = this.element.querySelector('.result__bg');
    this.removeBg();
    this.checkCorrectAnswers();
  }



  checkCorrectAnswers() {

    if (this.result > 7) {
      this.setSenior()
    } else if (
      this.result < 8 &&
      this.result > 4
    ) {
      this.setMiddle();
    } else {
      this.setJunior();
    }
  }

  removeBg() {
    this.bg.classList.remove('result__bg_junior');
    this.bg.classList.remove('result__bg_middle');
    this.bg.classList.remove('result__bg_senior');

  }

  setJunior() {
    this.number.textContent = `${this.result} из 10`;
    this.status.textContent = this.data[2].status;
    this.text.textContent = this.data[2].describe;
    this.bg.classList.add('result__bg_junior');
  }

  setMiddle() {
    this.number.textContent = `${this.result} из 10`;
    this.status.textContent = this.data[1].status;
    this.text.textContent = this.data[1].describe;
    this.bg.classList.add('result__bg_middle');
  }

  setSenior() {
    this.number.textContent = `${this.result} из 10`;
    this.status.textContent = this.data[0].status;
    this.text.textContent = this.data[0].describe;
    this.bg.classList.add('result__bg_senior');
  }
}