console.log(score)

let core=100;

//TDz is not possible with let and const. It will throw a ReferenceError: Cannot access 'score' before initialization. This is because let and const are not hoisted to the top of their scope like var. They are in a "temporal dead zone" from the start of the block until the declaration is processed, which means you cannot access them before they are declared.

//In the above code, we are trying to access the variable 'score' before it is declared. Since 'score' is declared with let, it is not hoisted and will throw a ReferenceError. If we were to declare 'score' with var instead of let, it would be hoisted and would return undefined instead of throwing an error. 

//Temporarly dead Zone (TDZ) is a behavior in JavaScript where variables declared with let and const are not accessible before they are declared. This means that if you try to access a variable before it is declared, you will get a ReferenceError. This is different from var, which is hoisted and can be accessed before it is declared, returning undefined. The TDZ helps to prevent bugs and makes the code more predictable by ensuring that variables are only accessible after they have been declared.

//--TDZ for "Score" starts here
//console.log(score) // ReferenceError: Cannot access 'score' before initialization
score=50 // ReferenceError: Cannot access 'score' before initialization
let score=100 // This is where the TDZ ends, and 'score' is now accessible and can be assigned a value.
console.log (Score)