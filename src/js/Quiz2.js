export default class Quiz2 {
  constructor(quiz, data, nextButton) {
    this.quiz = quiz;
    this.data = data;
    this.nextButton = nextButton;
    this.render();

    this.answerTittle1 = this.quiz.querySelector(".answer__title_1");
    this.answerTittle2 = this.quiz.querySelector(".answer__title_2");
    this.answer1 = this.quiz.querySelector(".answer_1");
    this.answer2 = this.quiz.querySelector(".answer_2");
    this.hint1 = this.quiz.querySelector(".answer__hint_1");
    this.hint2 = this.quiz.querySelector(".answer__hint_2");
    this.answersBlock = this.quiz.querySelector(".popup__answers");

    this.handle();

  }

  showHint(n, button1, button2) {
    if (this.data.answers[n].isCorrect === true) {
      button1.classList.add("answer_correct");
      button1.querySelector(".answer__icon").classList.add("answer__icon_correct");
      button1.querySelector(".answer__hint").classList.add("answer__hint_on");
      sessionStorage.setItem('answer', + sessionStorage.getItem('answer') + 1);
    } else {
      this.hint1.classList.add("answer__hint_on");
      this.hint2.classList.add("answer__hint_on");
      button1.classList.add("answer_wrong");
      button2.classList.add("answer_correct");
      button1.querySelector(".answer__icon").classList.add("answer__icon_wrong");
    }

    this.disableChooseButtons();
    this.nextButton.removeAttribute("disabled");
    this.answersBlock.classList.add("popup__answers_clicked");
  }

  handleClick1() {
    this.showHint(0, this.answer1, this.answer2);
  }

  handleClick2() {
    this.showHint(1, this.answer2, this.answer1);
  }

  handle() {
    this.answer1.addEventListener("click", this.handleClick1.bind(this));
    this.answer2.addEventListener("click", this.handleClick2.bind(this));
  }

  disableChooseButtons() {
    this.answer1.setAttribute("disabled", "disabled");
    this.answer2.setAttribute("disabled", "disabled");
  }


  render() {
    this.quiz.innerHTML = `
    <p class="popup__number"><span class="popup__number_span">${this.data.number}</span>/10</p>
    <h2 class="popup__title">${this.data.puzzle}</h2>

  <div class="popup__track">
    <div class="track track_popup">
      <audio class="track__audio" src="${this.data.audio}"></audio>
      <div class="track__container">
        <button class="track__button track__button_popup">
          <svg class="track__svg_play" width="17" height="17" viewBox="0 0 17 17" fill="none" >
            <mask id="mask6" mask-type="alpha" maskUnits="userSpaceOnUse" x="3" y="2" width="12" height="13">
            <path d="M13.7132 6.95741C14.846 7.63712 14.846 9.27893 13.7132 9.95864L5.89251 14.651C4.72609 15.3509 3.24214 14.5107 3.24214 13.1504L3.24214 3.76564C3.24214 2.40537 4.72609 1.56517 5.89251 2.26502L13.7132 6.95741Z" fill="white"/>
            </mask>
            <g mask="url(#mask6)">
            <rect x="0.647736" y="0.674805" width="15.5664" height="15.5664" fill="#181725"/>
            </g>
            </svg>
    
            <svg class="track__svg_stop track__svg_off" width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="17" height="17" fill="#181725"/>
            </svg>
        </button>
        <canvas class="track__canvas track__canvas_popup"></canvas>
      </div>
    </div>
  </div>
  <div class="popup__answers">
    <button class="answer answer_1 stop-button">
      <div class="answer__head">
        <div class="answer__icon">
          <svg width="14" height="11" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.8821 1H11.8542C11.7101 1 11.5733 1.06617 11.4851 1.1794L5.42212 8.85998L2.51488 5.1763C2.4709 5.12047 2.41485 5.07532 2.35092 5.04424C2.28699 5.01317 2.21686 4.99699 2.14578 4.9969H1.11788C1.01935 4.9969 0.964945 5.11013 1.02524 5.1866L5.05302 10.2893C5.24125 10.5276 5.603 10.5276 5.7927 10.2893L12.9748 1.18823C13.0351 1.11323 12.9806 1 12.8821 1Z" fill="white" stroke="white"/>
            </svg>
            
        </div>
        <p class="answer__title answer__title_1">${this.data.answers[0].title}</p>
      </div>
      <p class="answer__hint answer__hint_1">${this.data.answers[0].hint}</p>
    </button>
    <button class="answer answer_2 stop-button">
      <div class="answer__head">
        <div class="answer__icon">
          <svg width="14" height="11" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.8821 1H11.8542C11.7101 1 11.5733 1.06617 11.4851 1.1794L5.42212 8.85998L2.51488 5.1763C2.4709 5.12047 2.41485 5.07532 2.35092 5.04424C2.28699 5.01317 2.21686 4.99699 2.14578 4.9969H1.11788C1.01935 4.9969 0.964945 5.11013 1.02524 5.1866L5.05302 10.2893C5.24125 10.5276 5.603 10.5276 5.7927 10.2893L12.9748 1.18823C13.0351 1.11323 12.9806 1 12.8821 1Z" fill="white" stroke="white"/>
            </svg>
            
        </div>
        <p class="answer__title answer__title_2">${this.data.answers[1].title}</p>
      </div>
      <p class="answer__hint answer__hint_2">${this.data.answers[1].hint}</p>
    </button>
  </div>

    `
  }
}
