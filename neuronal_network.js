class NeuralNetwork {
  constructor(initial_point, size, neurons_init_layer, neurons_interm_layer, num_layers, neurons_final_layer) {

    // Id for each neuron
    this.id_neurons = 0;

    // layers
    this.neurons_init_layer = neurons_init_layer;
    this.neurons_interm_layer = neurons_interm_layer;
    this.neurons_final_layer = neurons_final_layer;

    this.list_initial_layer = [];

    //For representation
    this.initial_point = initial_point;
    this.size = size;
    this.num_layers = num_layers;

    this.x_space = this.size / (this.num_layers + 1);
    this.y_space = this.size / (this.neurons_init_layer + 1);

    // Middle layer
    this.list_interm_layer = []; // matrix

    /*
    for (var i = 0; i < this.neurons_interm_layer; i++) {
      this.list_interm_layer[i] = [];
      for (var j = 0; j < this.num_layers; j++) {
        this.list_interm_layer[i][j] = undefined;
      }
    }
    */

    // Final layer
    this.list_final_layer = [];

    // Conexions
    this.list_conections = [];

    this.create();
  }

  create() {
    //creation of first neural layer
    for (let i = 0; i < this.neurons_init_layer; i++) {
      this.list_initial_layer[i] = new Neuron(
        this.initial_point + 20, // this 20 is the neuron size
        this.y_space + i * this.y_space,
        this.id_neurons
      );
      this.id_neurons++;
    }

    // creating the middle layer
    this.y_space = this.size / (this.neurons_interm_layer + 1);

    for (var i = 0; i < this.neurons_interm_layer; i++) {
      this.list_interm_layer[i] = [];
      for (var j = 0; j < this.num_layers; j++) {
        this.list_interm_layer[i][j] = new Neuron(
          this.initial_point + this.x_space + j * this.x_space,
          this.y_space + i * this.y_space,
          this.id_neurons
        );
        this.id_neurons++;
      }
    }

    // Creating the final layer
    this.y_space = this.size / (this.neurons_final_layer + 1); //reset y
    for (let i = 0; i < this.neurons_final_layer; i++) {
      this.list_final_layer[i] = new Neuron(
        this.initial_point + this.size - 20, // 20 is for the size of the neuron
        this.initial_point + this.y_space + i * this.y_space
      );
    }

    //CONEXIONS!
    //Create conection first layer
    for (let i = 0; i < this.neurons_init_layer; i++) {
      for (let j = 0; j < this.neurons_interm_layer; j++) {
        this.list_conections.push(
          new Neural_connection(
            this.list_initial_layer[i],
            this.list_interm_layer[j][0]
          )
        );
      }
    }

    //Create conection matrix layer
    for (let i = 0; i < this.neurons_interm_layer; i++) {
      for (let j = 0; j < this.num_layers - 1; j++) {
        for (let k = 0; k < this.neurons_interm_layer; k++) {
          this.list_conections.push(
            new Neural_connection(
              this.list_interm_layer[i][j],
              this.list_interm_layer[k][j + 1]
            )
          );
        }
      }
    }

    //Create final layer conections
    for (let i = 0; i < this.neurons_interm_layer; i++) {
      for (let k = 0; k < this.neurons_final_layer; k++) {
        this.list_conections.push(
          new Neural_connection(
            this.list_interm_layer[i][this.num_layers - 1],
            this.list_final_layer[k]
          )
        );
      }
    }
  }

  // Drawing each neuron of each layer and the connections
  draw() {
    //Background
    fill(255, 255, 0);
    rect(this.initial_point, 0, this.size, this.size);

    // Drawing first layer
    for (let i = 0; i < this.neurons_init_layer; i++) {
      this.list_initial_layer[i].draw();
    }

    //Drawing second layer
    for (var i = 0; i < this.neurons_interm_layer; i++) {
      for (var j = 0; j < this.num_layers; j++) {
        this.list_interm_layer[i][j].draw();
      }
    }

    // Drawing final layer
    for (let i = 0; i < this.neurons_final_layer; i++) {
      this.list_final_layer[i].draw();
    }

    // Conection drawings
    for (let i = 0; i < this.list_conections.length; i++) {
      this.list_conections[i].draw();
    }
  }
}
