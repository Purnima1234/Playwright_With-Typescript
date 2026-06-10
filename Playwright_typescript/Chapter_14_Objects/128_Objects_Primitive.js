//Primitive vs Reference types

//Primitive is normal varialbe which holds a value. It is stored in stack memory. It is immutable. It can be string, number, boolean, null, undefined, symbol, bigint.

//Reference type is an object which holds a reference to the value. It is stored in heap memory. It is mutable. It can be object, array, function, etc.

let a=10; //primitive type
let b=a; //b is a copy of a but it is not a new variable. It is a reference to the same value in memory. So, if we change the value of b, it will not change the value of a because both a and b are pointing to the same value in memory.

b=20;

conole.log(a); //output: 10
console.log(b); //output: 20

//Here b value is reassignong, so b value is changes  but a vlaue is not changed. because a and b are two different variables in memory. They have the same value but they are not the same variable in memory. So, when we compare a and b using the == operator, it returns true because they have the same value but they are not the same variable in memory.


//In case of reference type, if we change the value of b, it will also change the value of a because both a and b 
// are pointing to the same object in memory. So, when we compare a and b using the == operator,
//  it returns true because they are pointing to the same object in memory.

let obj1= {name: "purnima"}; //reference type
let obj2=obj1; //obj2 is a copy of obj1 but it is not a new object. It is a reference to the same object in memory. So, if we change the value of obj2, it will also change the value of obj1 because both obj1 and obj2 are pointing to the same object in memory.

obj2.name="varre";

console.log(obj1); //output: {name: "varre"}
console.log(obj2); //output: {name: "varre"}

