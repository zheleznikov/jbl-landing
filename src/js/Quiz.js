export default class Quiz {
  constructor(quiz, data) {
    this.quiz = quiz;
    this.data = data;

    this.number = this.quiz.querySelector('.popup__number_span');
    this.title = this.quiz.querySelector('.popup__title');
    this.audio = this.quiz.querySelector('.track__audio');
    this.answer1 = this.quiz.querySelector('.answer__title_1');
    this.answer2 = this.quiz.querySelector('.answer__title_2');
    this.answer1Button = this.quiz.querySelector('.answer_1');
    this.answer2Button = this.quiz.querySelector('.answer_2');
    this.hint1 = this.quiz.querySelector('.answer__hint_1');
    this.hint2 = this.quiz.querySelector('.answer__hint_2');

    this.answersBlock = this.quiz.querySelector('.popup__answers')

    this.nextButton = document.querySelector('.popup__next');

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
  }

  showHint(n) {
    if (this.data.answers[n].isCorrect) {
      console.log('correct')
      this.hint2.classList.add('answer__hint_on');
      n = 0 ?
      this.hint1.classList.add('answer__hint_on') :
      this.hint2.classList.add('answer__hint_on');
      this.answersBlock.classList.add('popup__answers_clicked');
    } else {
      console.log('wrong');
      this.hint1.classList.add('answer__hint_on');
      this.hint2.classList.add('answer__hint_on');
      this.answersBlock.classList.add('popup__answers_clicked');
    }
    this.answer1Button.setAttribute('disabled', true);
    this.answer2Button.setAttribute('disabled', true);
  }

  handleClick1() {
    this.showHint(0);
  }

  handleClick2() {
    this.showHint(1);
    // console.log('hey')
  }

  handle() {
    this.answer1Button.addEventListener('click', this.handleClick1.bind(this));
    this.answer2Button.addEventListener('click', this.handleClick2.bind(this));

  }
}