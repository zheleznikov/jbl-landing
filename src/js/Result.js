export default class Result {
  constructor(element, data) {
    this.element = element;
    this.data = data;
    this.result = localStorage.getItem("answer");
    this.checkCorrectAnswers();
    this.render();
  }

  render() {
    this.element.innerHTML = `
    <p class="answer__title">${this.result} из 10</p>
    <h2 class="popup__title">${this.status}</h2>
    <p class="answer__title">${this.describe}</p>
    `;
  }

  checkCorrectAnswers() {
    if (this.result > 7) {
      this.status = this.data[0].status;
      this.describe = this.data[0].describe;
    } else if (
      this.result < 8 &&
      this.result > 4
    ) {
      this.status = this.data[1].status;
      this.describe = this.data[1].describe;
    } else {
      this.status = this.data[2].status;
      this.describe = this.data[2].describe;
    }
  }
}
