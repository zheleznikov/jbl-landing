export default class Popup {
  constructor(popup, openButton, page) {
    this.popup = popup;
    this.openButton = openButton;
    this.page = page;
    this.closeButton = this.popup.querySelector(".popup__close");
    this.closeSvgButton = this.popup.querySelector(".popup__svg");
    this.audio = this.popup.querySelector('.track__audio');
    this.quizBody = this.popup.querySelector('.popup__body');
    this.track = this.popup.querySelector('.track');


    this.handle();
  }



  open() {
    this.popup.classList.add("popup_on");
    localStorage.setItem("number", 0);
    localStorage.setItem("answer", 0);
  }

  close() {
    this.popup.classList.remove("popup_on", true);
    localStorage.setItem("number", 0);
    localStorage.setItem("answer", 0);
    this.quizBody.innerHTML = '';
  }

  superClose(event) {
    if (
      event.target === this.popup ||
      event.target === this.closeButton ||
      event.keyCode === 27
    ) {
      this.close();
    }
  }

  handle() {
    this.closeSvgButton.addEventListener('click', this.close.bind(this));
    this.openButton.addEventListener("click", this.open.bind(this));
    this.popup.addEventListener("click", this.superClose.bind(this));
    window.addEventListener("keydown", this.superClose.bind(this));
  }
}
