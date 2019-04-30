class NeuralNetwork {
  constructor(
    initial_point,
    size,
    neurons_init_layer,
    neurons_interm_layer,
    num_layers,
    neurons_final_layer
  ) {
    this.neurons_interm_layer = neurons_interm_layer;
    this.neurons_init_layer = neurons_init_layer;

    this.list_initial_layer = [];
    this.list_interm_layer = []; // matrix
    this.list_final_layer = [];
    this.list_conections = [];

    //For representation
    this.initial_point = initial_point;
    this.size = size;

    var y_space = this.size / (this.neurons_init_layer + 1);
    var x_space = this.size / (this.num_layers + 1);
  }

  create() {
    //creation of first neural layer
    for (let i = 0; i < this.neurons_init_layer; i++) {
      this.list_initial_layer[i] = new Neuron(
        this.initial_point,
        this.initial_point + this.y_space + i * this.y_space
      );
    }

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
        list_conections.add(
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
          this.list_conections.add(
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
        this.list_conections.add(
          new Neural_connection(
            this.list_interm_layer[i][this.num_layers - 1],
            this.list_final_layer[k]
          )
        );
      }
    }
  }

  /*
    public void draw(){
      for(int i= 0; i< list_initial_layer.length; i++){
        list_initial_layer[i].draw();       
      }
      
      for(int i= 0; i< list_interm_layer.length; i++){
        for(int j=0; j < list_interm_layer[0].length; j++){  
          list_interm_layer[i][j].draw();
        }
      }
      
      for(int i = 0; i<list_final_layer.length; i++){
         list_final_layer[i].draw();
      }
      
      for (int i=0; i<list_conections.size(); i++){
          list_conections.get(i).draw();
      }
      
    }
    
    
   */
}
