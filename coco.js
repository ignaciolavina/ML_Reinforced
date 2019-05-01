class Coco {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.speed = 10;
  }

  show() {
    fill(255, 0, 0);
    ellipse(this.x, this.y, 50, 50);
  }

  move() {
    this.x = this.x + random(-1 * this.speed, 1 * this.speed);
    this.y = this.y + random(-1 * this.speed, 1 * this.speed);
    if (this.x < 0 || this.x > WIDTH) {
      this.reset();
    }
    if (this.y < 0 || this.y > HEIGHT) {
      this.reset();
    }
  }

  reset() {
    this.x = WIDTH / 2;
    this.y = HEIGHT / 2;
  }
}
