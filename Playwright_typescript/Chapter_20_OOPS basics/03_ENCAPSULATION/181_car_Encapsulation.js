class car{

    #engineName;
 constructor(name, EngineName){
this.name=name;
this.#engineName=EngineName;

 }

 getEngine(){
    return this.#engineName;
 }
 setEngine(newEngineName){
    this.#engineName=newEngineName;
 }  

}

let tesla= new car("Tesla", "V8");
console.log(tesla.name);
console.log(tesla.getEngine());
tesla.setEngine("V9");
console.log(tesla.getEngine());