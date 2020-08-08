export default class Quiz {
  constructor(quiz, data) {
    this.quiz = quiz;
    this.data = data;

    this.number = this.quiz.querySelector(".popup__number_span");
    this.title = this.quiz.querySelector(".popup__title");
    this.audio = this.quiz.querySelector(".track__audio");
    this.answer1 = this.quiz.querySelector(".answer__title_1");
    this.answer2 = this.quiz.querySelector(".answer__title_2");
    this.answer1Button = this.quiz.querySelector(".answer_1");
    this.answer2Button = this.quiz.querySelector(".answer_2");
    this.hint1 = this.quiz.querySelector(".answer__hint_1");
    this.hint2 = this.quiz.querySelector(".answer__hint_2");

    this.answersBlock = this.quiz.querySelector(".popup__answers");

    this.nextButton = this.quiz.querySelector(".popup__next");
    this.setStartState();

    // this.render2();
    this.render();

    this.handle();
  }

  render() {
    this.number.textContent = this.data.number;
    this.title.textContent = this.data.puzzle;
    this.audio.src = this.data.audio;
    this.answer1.textContent = this.data.answers[0].title;
    this.answer2.textContent = this.data.answers[1].title;
    this.hint1.textContent = this.data.answers[0].hint;
    this.hint2.textContent = this.data.answers[1].hint;
    this.answer1Button.setAttribute("dataAtr", this.data.answers[0].isCorrect);
    this.answer2Button.setAttribute("dataAtr", this.data.answers[1].isCorrect);
  }

  render2() {
    this.answersBlock.innerHTML = `
    <div>
    <button class="answer answer_1 stop-button">
      <div class="answer__head">
        <div class="answer__icon"></div>
        <p class="answer__title answer__title_1">${this.data.answers[0].title}</p>
      </div>
      <p class="answer__hint answer__hint_1">${this.data.answers[0].hint}</p>
    </button>
    <button class="answer answer_2 stop-button">
      <div class="answer__head">
        <div class="answer__icon"></div>
        <p class="answer__title answer__title_2">${this.data.answers[1].title}</p>
      </div>
      <p class="answer__hint answer__hint_2">${this.data.answers[1].title}</p>
    </button>
  </div>

    `;
  }

  showHint(n, button) {
    console.log(this.answer1.textContent);
    console.log(button.getAttribute("dataAtr"));
    if (button.getAttribute("dataAtr") === "true") {
      // console.log(n);
      // console.log('correct')
      // this.hint2.classList.add("answer__hint_on");

      if (n === 0) {
        this.hint1.classList.add("answer__hint_on");
      } else {
        this.hint2.classList.add("answer__hint_on");
      }
    } else {
      // (console.log('wrong'))
      this.hint1.classList.add("answer__hint_on");
      this.hint2.classList.add("answer__hint_on");
    }

    this.disableChooseButtons();
    this.nextButton.removeAttribute("disabled");
    this.answersBlock.classList.add("popup__answers_clicked");
  }

  setStartState() {
    this.closeHints();
    this.disableNextButton();
    this.enableChooseButtons();
    this.removeAtr();
  }

  closeHints() {
    this.hint1.classList.remove("answer__hint_on");
    this.hint2.classList.remove("answer__hint_on");
    this.answersBlock.classList.remove("popup__answers_clicked");
  }

  enableChooseButtons() {
    this.answer1Button.removeAttribute("disabled");
    this.answer2Button.removeAttribute("disabled");
  }

  disableChooseButtons() {
    this.answer1Button.setAttribute("disabled", "disabled");
    this.answer2Button.setAttribute("disabled", "disabled");
  }

  removeAtr() {
    this.answer1Button.removeAttribute("dataAtr");
    this.answer2Button.removeAttribute("dataAtr");
  }

  disableNextButton() {
    this.nextButton.setAttribute("disabled", true);
  }

  handleClick1() {
    this.showHint(0, this.answer1Button);
  }

  handleClick2() {
    this.showHint(1, this.answer2Button);
  }

  handle() {
    this.answer1Button.addEventListener("click", this.handleClick1.bind(this));
    this.answer2Button.addEventListener("click", this.handleClick2.bind(this));
    // this.nextButton.addEventListener('click', this.reset.bind(this));
  }
}
