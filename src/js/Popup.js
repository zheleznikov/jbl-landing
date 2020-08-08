export default class Popup {
  constructor(popup, openButton, page) {
    this.popup = popup;
    this.openButton = openButton;
    this.page = page;
    this.closeButton = this.popup.querySelector('.popup__close');
    this.handle();
  }

  open() {
    this.popup.classList.add('popup_on');
    this.page.classList.add('page_fix');
    // document.querySelector('.main').style.display = 'none';
  }

  close() {
    this.popup.classList.remove('popup_on', true);
    this.page.classList.remove('page_fix');

  }

  superClose(event) {
    if (event.target === this.popup || event.target === this.closeButton || event.keyCode === 27) {
      this.close();
    }
  }

  handle() {
    // if (this.openButton) {
      this.openButton.addEventListener('click', this.open.bind(this));
    // }
    this.popup.addEventListener('click', this.superClose.bind(this));
    window.addEventListener('keydown', this.superClose.bind(this));
  }
}