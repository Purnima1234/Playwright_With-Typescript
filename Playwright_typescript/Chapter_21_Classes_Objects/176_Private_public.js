//private variablestarts eith#
//Private variables will not allow to use outside the class

class credentials {

    //constructor
    constructor (user, key, password) {
        this.user=user;
        this.key=key;
        this.#password=password;


    }

    //Behaviour
    purnimaGetautHeader() {
        return "Bearer" + this.#password;

    }
}

let cred= new credentials("user1", "key1", "password1");
console.log(cred.user);


