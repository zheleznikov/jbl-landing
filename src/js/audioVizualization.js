export default function audioVizualization(planet, canvasWidth) {
  const canvas = planet.querySelector('.track__canvas');
  const audio = planet.querySelector('.track__audio');
  const button = planet.querySelector('.track__button');
  const context = new (window.AudioContext || window.webkitAudioContext)()
  const analyser = context.createAnalyser();
  const ctx = canvas.getContext('2d');
  const source = context.createMediaElementSource(audio);
  source.connect(analyser);
  analyser.connect(context.destination);
  canvas.width = canvasWidth;
  canvas.height = 20;


  function draw() {
    const array = new Uint8Array(analyser.frequencyBinCount);
    analyser.getByteFrequencyData(array);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#C9EF5D';

    for (let i = 0; i < 150; i++) {
      let x = i * 2;
      let height = -(array[i] / 75);
      let width = 1.5;
      ctx.fillRect(x, canvas.height - 10, width, height)
    }

    for (let i = 0; i < 150; i++) {
      let x = i * 2;
      let height = (array[i] / 75);
      let width = 1.5;
      ctx.fillRect(x, canvas.height - 10, width, height)
    }

    window.requestAnimationFrame(draw);
  }
  
  // draw();

  button.addEventListener('click', draw)

  button.addEventListener('click', function() {
    context.resume().then(() => {
      console.log('Playback resumed successfully');
    });
  });

}







