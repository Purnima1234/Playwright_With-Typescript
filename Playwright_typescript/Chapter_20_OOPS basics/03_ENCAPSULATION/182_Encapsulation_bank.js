class icici{
    #balance;

    constructor(name, balance){
        this.name=name;
        this.#balance=balance
    }

    getBalance(){
        return this.#balance;

}
setBalance(balance, isCashier){
    if(isCashier) {
        this.#balance=balance;
    } else{
        console.log("Not allowed");

    }

}}

let purnima= new icici("Poornima", 1000);
console.log(purnima.name);
console.log(purnima.getBalance());
purnima.setBalance(2000, true);
console.log(purnima.getBalance());