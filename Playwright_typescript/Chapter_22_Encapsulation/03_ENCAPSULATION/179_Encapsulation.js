class bankAccount {
    #balance = 0;

    deposit(amount){

        this.#balance += amount;


    }

    getBalance(){
        return this.#balance;

    }

    
}

const account= new bankAccount();
account.deposit(100);
account.getBalance();

console.log(account.getBalance());
