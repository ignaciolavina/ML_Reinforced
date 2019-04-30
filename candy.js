class Candy {
  constructor() {
    this.x = random(0, WIDTH);
    this.y = random(0, HEIGHT);
  }

  draw() {
    fill(255, 0, 0);
    ellipse(this.x, this.y, 20, 20);
  }
}
