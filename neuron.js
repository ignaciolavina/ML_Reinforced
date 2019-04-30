class Neuron {
  constructor(x, y, id) {
    this.id = id;
    this.x = x;
    this.y = y;
    this.size = 20;

    this.neurons_prev = [];
    this.neurons_prev = [];
  }
  /*
    ArrayList <Neuron> neurons_prev = new ArrayList <Neuron> ();
    ArrayList <Neuron> neurons_post = new ArrayList <Neuron> ();
    */
  //conexiones

  //println("neuron: " + id_number + " x: " + x + ", y: " + y);
  /* 
      for (int i=0; i< neurons_prev.size(); i++){
         new Neural_connection(this, neurons_prev.get(i));
      }
      
    */

  draw() {
    fill(255, 0, 0);
    ellipseMode(CENTER);
    ellipse(this.x, this.y, this.size);
  }
}
