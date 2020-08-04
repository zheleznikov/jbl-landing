export default class PlaySpaceSound {
  constructor(planet) {
    this.planet = planet;
    this.button = this.planet.querySelector(".track__button");
    this.playIcon = this.planet.querySelector(".track__svg_play");
    this.stopIcon = this.planet.querySelector(".track__svg_stop");
    this.audio = this.planet.querySelector(".track__audio");

    this.handle();
  }

  changeIconView() {
    this.playIcon.classList.toggle("track__svg_off");
    this.stopIcon.classList.toggle("track__svg_off");
  }

  playOrStop() {
    if (this.audio.paused) {
      this.audio.play()
    } else {
      this.audio.pause();
      this.audio.src = this.audio.src;
    }
  }

  buttonHandle() {
    this.changeIconView();
    this.playOrStop();
    console.log(this.playIcon);
  }

  setStartPlayState() {
    this.playIcon.classList.remove("track__svg_off");
    this.stopIcon.classList.add("track__svg_off");
  }

  handle() {
    this.button.addEventListener("click", this.buttonHandle.bind(this));
    this.audio.addEventListener('ended', this.setStartPlayState.bind(this));
  }
}
