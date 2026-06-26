let apicall= new Promise(function(resolve, reject) {
    reject("500 error");


});

apicall.then(function(response){
 console.log("Success or resolve");

}) .catch(function(error) {
    console.log("Error: " + error);
})