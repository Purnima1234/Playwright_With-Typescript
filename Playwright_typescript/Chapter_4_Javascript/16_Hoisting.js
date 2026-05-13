//Hoisting means every variable and function declaration is moved to the top of their scope before the code is executed. This means that you can use a variable or a function before it is declared in the code. However, only the declarations are hoisted, not the initializations.

//example of hoisting with var

console.log(a); //undefined because only the declaration is hoisted, not the initialization
var a=10;
console.log(a); //10    
//In the above code, we have declared a variable 'a' with var keyword. We have used the variable 'a' before it is declared in the code. Since var is hoisted, it will not throw an error but will print undefined in the console. After the declaration and initialization of 'a', it will print 10 in the console.    

//example of hoisting with function

printhello(); //Hello World because function declarations are hoisted

function printhello(){
    console.log("Hello World");
}   
    