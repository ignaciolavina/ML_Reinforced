const WIDTH = 600;
const HEIGHT = 400;
// neruonal_ canvas:
const R_WIDTH = 600;
const R_HEIGHT = 400;
const ID_NUMBER = 0;

var coco;
var candy;
var n1, n2;

function setup() {
  var canvas = createCanvas(1000, 400);
  leftCanvas = createGraphics(WIDTH, HEIGHT);
  tightCanvas = createGraphics(R_WIDTH, R_HEIGHT);
  coco = new Coco(100, 100);
  n1 = new Neuron(200, 200, ID_NUMBER);

  n2 = new Neuron(300, 300, ID_NUMBER);
  //candy = new Candy();
}

function draw() {
  draw_left();
  draw_right();
  //candy.draw();
}

function draw_left() {
  background(0);
  coco.move();
  coco.show();
}

function draw_right() {
  background(122);
  n1.draw();
  n2.draw();
}
