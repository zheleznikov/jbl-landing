export default class PlaySpaceSound {
  constructor(planet) {
    this.planet = planet;
    this.button = this.planet.querySelector(".track__button");
    this.playIcon = this.planet.querySelector(".track__svg_play");
    this.stopIcon = this.planet.querySelector(".track__svg_stop");
    this.audio = this.planet.querySelector(".track__audio");
    console.log(this.audio);

    this.handle();
  }

  changeIconView() {
    this.playIcon.classList.toggle("track__svg_off");
    this.stopIcon.classList.toggle("track__svg_off");
  }

  playOrStop() {
    this.audio.paused ? 
    this.audio.play() : 
    this.audio.pause();
  }

  buttonHandle() {
    this.changeIconView();
    this.playOrStop();
  }

  handle() {
    this.button.addEventListener("click", this.buttonHandle.bind(this));
  }
}
