function openBowser () {
    return new Promise(function(resolve) {
        resolve("Open the browser");
    })
}

function gotoLogingpage(){
    return new Promise(function(resolve) {
        resolve("Login page is loaded");
        
    })
}

openBrowser()
.then(function(msg) {
    console.log("Step1", msg);
    return goToLogin();
}) .then (function(msg){
    console.log("step2: msg");
    return enterCredentials();
}).then (function(msg){
    console.log("step3: msg");
    return clickLogin();
}).then (function(msg){
    console.log("step4: msg");
}).catch(function(err){
    console.log("Error: " + err);

}).finally(function() {
    console.log("This will run regardless of the outcome of the promise");

})