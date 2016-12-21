var osc1;
var osc2;

var mic;

var t, pt;
var interval = 50;
var onoff = false;


function setup() {
  createCanvas(400, 400);
  
  mic=new p5.AudioIn;
  mic.start();

  t = millis();
  pt = t;


  osc1 = new p5.Oscillator();
  osc1.setType('sine');
  //osc.setType('square');
  //osc.setType('triangle');
  osc1.freq(220);
  osc1.amp(0.0);
  osc1.start();

  osc2 = new p5.Oscillator();
  osc2.setType('sine');
  //osc.setType('square');
  //osc.setType('triangle');
  osc2.freq(220);
  osc2.amp(0.0);

  osc2.start();

}

function draw() {

  background(0);
  t = millis();
  var pitch = map(mic.getLevel(), 0, 1, 0, 1000);
  var pitch2 = mouseY;
  
  osc1.freq(pitch);
  osc2.freq(pitch2);

  if (t - pt > interval) {
    onoff = !onoff
    pt = t;
  }

  if (onoff == true) {
    osc1.amp(0.6);
    osc2.amp(0.6);
  } else {
    osc1.amp(0.0);
    osc2.amp(0.0);
  }
  fill(255);
  textSize(20);
  text("Oscillator 1:" + pitch + "Oscillator 2:" + pitch2, 10, 50);
}

function mouseReleased() {
  osc1.amp(0.0);
  osc2.amp(0.0);
}