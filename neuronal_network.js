class NeuralNetwork {
  constructor(
    initial_point,
    size,
    neurons_init_layer,
    neurons_interm_layer,
    num_layers,
    neurons_final_layer
  ) {
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

    print(size, this.num_layers);
    print(this.num_layers);

    this.x_space = this.size / (this.num_layers + 1);
    this.y_space = this.size / (this.neurons_init_layer + 1);
    print("size: ", this.size);
    //print("initials: ", y_space + "," + x_space);

    // Middle layer
    this.list_interm_layer = []; // matrix

    for (var i = 0; i < this.neurons_interm_layer; i++) {
      this.list_interm_layer[i] = [];
      for (var j = 0; j < this.num_layers; j++) {
        this.list_interm_layer[i][j] = undefined;
      }
    }

    // Final layer
    this.list_final_layer = [];

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

    print("neurons final layer", this.neurons_final_layer);
    this.y_space = this.size / (this.neurons_final_layer + 1); //reset y
    for (let i = 0; i < this.neurons_final_layer; i++) {
      this.list_final_layer[i] = new Neuron(
        this.initial_point + this.size - 20, // 20 is for the size of the neuron
        this.initial_point + this.y_space + i * this.y_space
      );
      /*
      println(
        "x: " +
          (this.initial_point + this.size) +
          ", y: " +
          (this.initial_point + this.y_space + i * this.y_space)
      );
      */
    }
  }

  draw() {
    //Background
    fill(255);
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
  }
}

/*
    this.list_interm_layer = []; // matrix
    for (var i = 0; i < 9; i++) {
      this.list_interm_layer[i] = [];
      for (var j = 0; j < 9; j++) {
        this.list_interm_layer[i][j] = undefined;
      }
    }

    this.list_final_layer = [];
    this.list_conections = [];




    //creating second neural layer
    this.y_space = this.size / (this.neurons_interm_layer + 1); //reset y
    for (let j = 0; j < this.num_layers; j++) {
      for (let i = 0; i < this.neurons_interm_layer; i++) {
        this.list_interm_layer[i][j] = new Neuron(
          this.initial_point + this.x_space + j * this.x_space,
          this.initial_point + this.y_space + i * this.y_space
        );
      }
    }

    //Creating final output layer
    this.y_space = this.size / (this.neurons_final_layer + 1); //reset y
    for (let i = 0; i < this.neurons_final_layer; i++) {
      this.list_final_layer[i] = new Neuron(
        this.initial_point + this.size,
        this.initial_point + this.y_space + i * this.y_space
      );
      println(
        "x: " +
          (this.initial_point + this.size) +
          ", y: " +
          (this.initial_point + this.y_space + i * this.y_space)
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

  set_initial_values(init_values) {
    for (let i = 0; i < this.list_initial_layer.length; i++) {
      this.list_initial_layer[i].value = 1; // this.init_values[i];
      //println("valor inicial " + list_initial_layer[i].id + " ," + list_initial_layer[i].value);
    }
  }

  draw() {
    for (let i = 0; i < this.list_initial_layer.length; i++) {
      this.list_initial_layer[i].draw();
    }

    for (let i = 0; i < this.list_interm_layer.length; i++) {
      for (let j = 0; j < this.list_interm_layer[0].length; j++) {
        this.list_interm_layer[i][j].draw();
      }
    }

    for (let i = 0; i < this.list_final_layer.length; i++) {
      this.list_final_layer[i].draw();
    }

    for (let i = 0; i < this.list_conections.length; i++) {
      this.list_conections.get(i).draw();
    }
  }
}
*/
