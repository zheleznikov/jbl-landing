export default function audioVizualization(canvas, audio, button) {

  const context = new (window.AudioContext || window.webkitAudioContext)()
  const analyser = context.createAnalyser();
  const ctx = canvas.getContext('2d');
  const source = context.createMediaElementSource(audio);
  source.connect(analyser);
  analyser.connect(context.destination);


  function draw() {
    const array = new Uint8Array(analyser.frequencyBinCount);
    analyser.getByteFrequencyData(array);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#C9EF5D';
    const count = 150;

    for (let i = 0; i < count; i++) {
      let x = i * 2;
      let height = -(array[i] / 2);
      let width = 1;
      ctx.fillRect(x, canvas.height, width, height)

    }
    window.requestAnimationFrame(draw);
  }

  draw();

  button.addEventListener('click', function() {
    context.resume().then(() => {
      console.log('Playback resumed successfully');
    });
  });



}





