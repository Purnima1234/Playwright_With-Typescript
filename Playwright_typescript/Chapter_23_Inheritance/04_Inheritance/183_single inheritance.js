class Basepage {
    constructor(pageName){

    }

    open() {
        console.log("OPening the new Page");
    }

    close () {
        console.log("Closing the Page");
    }

    
}

class login extends Basepage {

}

const page= new login();
page.open();
page.close();