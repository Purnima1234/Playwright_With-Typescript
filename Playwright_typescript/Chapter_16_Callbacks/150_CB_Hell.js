//Reak QA scenario

//open bowser()
//Goto Loginpage()
//enter Credentials()
//click on login button()

function openbrowser(callback) {
    console.log("Browser is opened");
    callback();
    setTimeout (function() {
        callback();
    }, 3000);
    

}