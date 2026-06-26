let checkauth= Promise.resolve("Auth_OK");
let checkDB=Promise.resolve("DB_OK");
let checkCache=Promise.resolve("Cache_OK");

Promise.all([checkauth, checkDB, checkCache]). then(function(results) {
    console.log("All checks are passed");

})

Promise.all([
    Promise.resolve("OK"),
    Promise.reject("DB DOWN"),
    Promise.resolve("OK")

]). then (function(results) {
    console.log(results);
}).catch(function(error) {
    console.log("Error: " + error);
})


//consolidated all promises
Promise.allSettled([
    Promise.resolve("Test A Passed"),
    Promise.reject("Test B Failed"),
    Promise.resolve("Test C Passed")

]).then(function(results) {
    results.forEach(function(r,i) {
        console.log("Test " + (i+1) + " status: " + r.status);

    });
})