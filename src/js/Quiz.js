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
    this.icons = this.quiz.querySelectorAll(".answer__icon");

    this.nextButton = this.quiz.querySelector(".popup__next");

    this.setStartState();
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
    this.answer1Button.setAttribute("data-iscorrect", this.data.answers[0].isCorrect);
    this.answer2Button.setAttribute("data-iscorrect", this.data.answers[1].isCorrect);
  }

  showHint(n, button1, button2) {
    // console.log(this.answer1.textContent);
    // console.log(button1.getAttribute("data-iscorrect"));

    if (button1.getAttribute("data-iscorrect") === "true") {
      button1.classList.add("answer_correct");
      button1.querySelector(".answer__icon").classList.add("answer__icon_correct");
      button1.querySelector(".answer__hint").classList.add("answer__hint_on");
      localStorage.setItem('answer', + localStorage.getItem('answer') + 1);


    } else {
      this.hint1.classList.add("answer__hint_on");
      this.hint2.classList.add("answer__hint_on");

      button1.classList.add("answer_wrong");
      button2.classList.add("answer_correct");
      button1.querySelector(".answer__icon").classList.add("answer__icon_wrong");
      // console.log(localStorage.getItem('answer'));
    }

    this.disableChooseButtons();
    this.nextButton.removeAttribute("disabled");
    this.answersBlock.classList.add("popup__answers_clicked");
  }

  handleClick1() {
    this.showHint(0, this.answer1Button, this.answer2Button);
  }

  handleClick2() {
    this.showHint(1, this.answer2Button, this.answer1Button);
  }

  handle() {
    this.answer1Button.addEventListener("click", this.handleClick1.bind(this));
    this.answer2Button.addEventListener("click", this.handleClick2.bind(this));
  }

  setStartState() {
    this.hideHints();
    this.disableNextButton();
    this.enableChooseButtons();
    this.removeAtr();
    this.closeStripes();
  }

  hideHints() {
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
    this.answer1Button.removeAttribute("data-iscorrect");
    this.answer2Button.removeAttribute("data-iscorrect");
  }

  disableNextButton() {
    this.nextButton.setAttribute("disabled", true);
  }


  closeStripes() {
    this.icons.forEach((icon) => {
      icon.classList.remove("answer__icon_correct");
      icon.classList.remove("answer__icon_wrong");
    });

    this.answer1Button.classList.remove("answer_correct");
    this.answer1Button.classList.remove("answer_wrong");
    this.answer2Button.classList.remove("answer_correct");
    this.answer2Button.classList.remove("answer_wrong");
  }
}
