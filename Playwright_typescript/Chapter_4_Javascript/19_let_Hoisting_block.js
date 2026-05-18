//Let in Blocked scope
//In JavaScript, variables declared with let and const are block-scoped, which means they are only accessible within the block they are defined in. This is different from var, which is function-scoped and can be accessed outside of the block it is defined in.
//In the example below, we are trying to access the variable 'score' before it is declared. Since 'score' is declared with let, it is not hoisted and will throw a ReferenceError. If we were to declare 'score' with var instead of let, it would be hoisted and would return undefined instead of throwing an error.

//Temporarly dead Zone (TDZ) is a behavior in JavaScript where variables declared with let and const are not accessible before they are declared. This means that if you try to access a variable before it is declared, you will get a ReferenceError. This is different from var, which is hoisted and can be accessed before it is declared, returning undefined. The TDZ helps to prevent bugs and makes the code more predictable by ensuring that variables are only accessible after they have been declared.        

if (true) {

    console .log(X) // ReferenceError: Cannot access 'X' before initialization

//This area is  TDZ for "score" and "x". We cannot access them before they are declared. If we try to access them, we will get a ReferenceError. Once we declare them, they become accessible and we can assign values to them and use them in our code.

   
    let x=100; //TDZ ends here for "x". Now we can access "x" and assign a value to it. We can also use "x" in our code without any issues.
    console .log(x) // 100




}