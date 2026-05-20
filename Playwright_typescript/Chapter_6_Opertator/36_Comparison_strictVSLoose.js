// == is loose equality operator
// === is strict equality operator  

let a=10; b='10';

console.log(a==b); //true
console.log(a===b); //false 

//=== strict equality operator will compare both value and data type
//== loose equality operator will compare only value and it will ignore data type 

console.log(0==""); //true
console.log(0===""); //false
console.log(1==true); //true
console.log(1===true); //false  
