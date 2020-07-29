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

    for (let i = 0; i < 150; i++) {
      let x = i * 2;
      let height = -(array[i] / 4);
      let width = 1;
      ctx.fillRect(x, canvas.height - 75, width, height)
    }

    for (let i = 0; i < 150; i++) {
      let x = i * 2;
      let height = (array[i] / 4);
      let width = 1;
      ctx.fillRect(x, canvas.height - 75, width, height)
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





