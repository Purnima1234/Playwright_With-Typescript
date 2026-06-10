const obj1= {a: 1, b:2, c:3};

const copy= {...obj1}; //spread operator is used to copy the properties of obj1 to copy. It creates a new object with the same properties and values as obj1. So, copy is a new object in memory but it has the same properties and values as obj1.

console.log(copy); //output: {a: 1, b: 2, c: 3}         

const obj2= {...obj1}; //spread operator is used to copy the properties of obj1 to obj2. It creates a new object with the same properties and values as obj1. So, obj2 is a new object in memory but it has the same properties and values as obj1.