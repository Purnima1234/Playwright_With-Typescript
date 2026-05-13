console.log(a);
var a=10;
console.log(a);

//Functions

printhello();
function printhello(){
    console.log("hello world");

}


//function declarations are hoisted, so we can call the function before it is declared in the code. In the above code, we have called the function printhello before it is declared in the code. Since function declarations are hoisted, it will not throw an error and will print "hello world" in the console.

//function expressions are not hoisted, so we cannot call the function before it is declared in the code. In the above code, if we change the function declaration to a function expression, it will throw an error because function expressions are not hoisted. For example:  

function getsattuscode(){
 //var statusCode = 200;    Js engine will hoist the declaration of statusCode but not the initialization, so it will be undefined at the time of console.log(statusCode);
    console.log("status code is 200"); 
    var statusCode = 200;
    console.log(statusCode);    
}
getsattuscode();
