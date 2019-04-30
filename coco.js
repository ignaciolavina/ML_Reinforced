class Coco {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.speed = 1;
  }

  show() {
    fill(255);
    ellipse(this.x, this.y, 50, 50);
  }
}
