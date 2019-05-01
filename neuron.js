class Neuron {
  constructor(x, y, id) {
    this.id = id;
    this.x = x;
    this.y = y;
    this.size = 20;

    this.neurons_prev = [];
    this.neurons_prev = [];

    // print("neuron" + this.id + "x: " + this.x + "y: " + this.y);
  }

  draw() {
    fill(255, 0, 0);
    stroke(0);
    ellipseMode(CENTER);
    ellipse(this.x, this.y, this.size, this.size);
  }
}
