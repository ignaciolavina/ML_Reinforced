class Neural_connection {
  constructor(neuron1, neuron2) {
    this.neuron1 = neuron1;
    this.neuron2 = neuron2;
    this.weight = random(-1, 1);
  }

  draw() {
    if (weight < 0) {
      stroke(0);
      strokeWeight(abs(1 + weight * 4));
      line(neuron1.x, neuron1.y, neuron2.x, neuron2.y);
    } else {
      stroke(255);
      strokeWeight(1 + weight * 4);
      line(neuron1.x, neuron1.y, neuron2.x, neuron2.y);
    }
  }
}
