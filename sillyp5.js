let audios = [];
// let files = ["./sounds/hoo.mp3", "./sounds/hoow.mp3", "./sounds/ooow.mp3", "./sounds/yeah-yeah.mp3", "./sounds/yeeeah.mp3", "./sounds/ah-chuk-aah.mp3", "./sounds/aow.mp3", "./sounds/daaw.mp3", "./sounds/duh-ah.mp3"];
let files = ["./sounds/1.mp3", "./sounds/2.mp3", "./sounds/3.mp3", "./sounds/4.mp3", "./sounds/5.mp3", "./sounds/6.mp3", "./sounds/7.mp3", "./sounds/8.mp3", "./sounds/9.mp3",]
let fft, noise, filter;
function preload() {
  for (let i=0; i < (files.length-1); i++) {
    let mySound = loadSound(files[i]);
    audios.push(mySound);
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(220);
  filter = new p5.BandPass();
  noise = new p5.Noise();
  noise.disconnect();
  noise.connect(filter);

  fft = new p5.FFT();
  reverb = new p5.Reverb();
}

function mousePressed(){
  let dryWet = constrain(map(mouseX, 0, width, 0, 1), 0, 1);
  // 1 = all reverb, 0 = no reverb
  reverb.drywet(dryWet);
  let freq = map(mouseX, 0, width, 20, 10000);
  freq = constrain(freq, 0, 22050);
  filter.freq(freq);
  // give the filter a narrow band (lower res = wider bandpass)
  filter.res(50);

  background(220);
    fill(0);
  textAlign('center');
  // console.log('kaw');
  let rdm = random(10, 100)
  textSize(rdm);
  // setVolume(random(0.1, 1.0))
  text('kaw', mouseX, mouseY);
  let sf = audios[Math.floor(Math.random()*audios.length)]
  reverb.process(sf, 3, 2);
  sf.play();

//   if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {

//   }
}
