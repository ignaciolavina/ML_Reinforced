var coco;

function setup() {
  createCanvas(600, 400);
  coco = new Coco(100, 100);
}

function draw() {
  background(0);
  coco.show();
}
