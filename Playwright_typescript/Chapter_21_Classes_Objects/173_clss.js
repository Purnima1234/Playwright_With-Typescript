class Car {
    //cab
    //constructor

    constructor(name_given_during_object_creation) {
        this.name = name_given_during_object_creation;
    }
    
    //Attributes

     //behaviour
    drive() {
        console.log("I am driving",  this.name);
    }
   

}

const i10 = new Car("Model i10");
i10.drive();

const i20= new car("Model i20");
i20.drive();
 