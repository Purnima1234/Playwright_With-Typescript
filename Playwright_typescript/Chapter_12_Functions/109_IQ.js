
function status(code) {
    if(code >=200 && code<=300) return "success";
    if(code >=400 && code<=500) return "client error";
    if(code >=500 && code<=600) return "server error";

}

status(205);



function logintest(name) {
    console.log(`Hello, ${name}`);
    //no return statement in this function, so it will return undefined by default

}
let result = logintest("John");
console.log(result);
 //Answer Hello, John
//undefined

greet(Alice); // ReferenceError: greet is not defined

function greet(name) {
    return `Hello, ${name}`;    
    
}