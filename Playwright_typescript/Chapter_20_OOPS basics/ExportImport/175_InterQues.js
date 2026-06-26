class Browser {

    //constructo

    constructor(name) {
        this.name=name;
    }

    //Behaviour
     launch() { //this is method
        console.log("I am launching the browser", this.name);
    }
    close() { //this is also method
        console.log("I am closing the browser", this.name);
        
     }


    }   

    let chrome= new Browser("chrome");
    let firefox= new Browser("firefox");

    chrome.launch();
    chrome.close(); 

    firefox.launch();
     firefox.close();
        

