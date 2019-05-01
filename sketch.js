const WIDTH = 600;
const HEIGHT = 700;
// neruonal_ canvas:
const R_WIDTH = 400;
const R_HEIGHT = 400;
const ID_NUMBER = 0;
const NW_SIZE = 500;

var coco;
var candy;

var best_nw_net;

var list_connections;

function setup() {
  var canvas = createCanvas(WIDTH, HEIGHT);
  //coco = new Coco(100, 100);

  best_nw_net = new NeuralNetwork(0, NW_SIZE, 2, 7, 2, 2);
  //candy = new Candy();

  //list_connections = new list_connections();

  //best_nw_net.set_initial_values();

  //var final_value = best_nw_net.get_values();
}

function draw() {
  draw_left();
}

function draw_left() {
  background(0);
  // rect(0, 0, NW_SIZE, NW_SIZE);
  // coco.move();
  // coco.show();
  best_nw_net.draw();
}
