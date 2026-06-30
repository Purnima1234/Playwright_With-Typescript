class animal {
    constructor(name) {
        this.name=name;
    }
    eat(){
        console.log(`${this.name} is eating`);

    }

    sleep(){
        console.log(`${this.name} is sleeping`);
    }
}

class dog extends animal {

    constructor(name, breed){
        super(name);
        this.breed=breed;

    }

    bark(){
        console.log(`${this.name} is barking`);

    }
}

let dog1= new dog("Tommy", "German Shepherd");
dog1.eat();
dog1.sleep();
dog1.bark();
