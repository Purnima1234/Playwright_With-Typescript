function greettester (name, callback) {
    console.log("welcome, " + name);
    callback();

}

greettester("Naveen", function() {
    console.log("lets start testing");
});


//call back with parameters

function runtest(testname, callback) {
    let status = "pass";
    callback(testname, status);
}

runtest("Login test", function (name, result) {
    console.log(name + "=>" + result);
});


//syn call back for each

let bugs=["UI glitch", "API time out", "Wrong redirect"];

bugs.forEach(function(bug, i) { 
    console.log("bug" + (i+1) + "=>" + bug);
});

console.log("Total bugs: " + bugs.length);