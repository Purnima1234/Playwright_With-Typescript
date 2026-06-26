let testrun= new Promise(function(resolve, reject){
let apicall=true;
 if(apicall) { 
resolve({status:"done"})  
 }  else  {
reject("500 error");
 }

})

testrun.then(function(response) {
    console.log(response)
})
.catch(function(error) {

    console.log("Error: " + error);
}).finally(function() {
    console.log("This will run regardless of the outcome of the promise");

})