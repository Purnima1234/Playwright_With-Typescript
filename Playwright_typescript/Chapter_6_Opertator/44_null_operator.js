console.log(null>=0) // true
console.log(null>0) // false
//?? operator is used to check if a value is null or undefined. It returns the right-hand side value if the left-hand side value is null or undefined, otherwise it returns the left-hand side value.

let purnima_age=null;
let age=purnima_age ?? 18;

//if you are null, the given valuse will rplace.

//Purnima_age is null, assign the value 18 to age variable. If purnima_age is not null, then assign the value of purnima_age to age variable.