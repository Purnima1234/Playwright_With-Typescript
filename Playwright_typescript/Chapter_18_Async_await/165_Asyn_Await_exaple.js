function apicall(name) {
    return new Promise(function(resolve){
        setTimeout(function() {
            resolve({name: name, status: "200 OK"});
        }, 1000);
    });

}

async function seq() {
    console.log("starting the function");
    let r1= await apicall("Login");
    console.log(r1);
    let r2= await apicall("GetUserData");
    console.log(r2);
    let r3= await apicall("Logout");
    console.log(r3);    
    
}

seq();



async function parallelTest() {
    let [r1, r2,r3]= await Promise.all([
        apicall("Login"),
        apicall("GetUserData"),
        apicall("Logout")   
    ])
} 

console.log(r1);
console.log(r2);
console.log(r3);
