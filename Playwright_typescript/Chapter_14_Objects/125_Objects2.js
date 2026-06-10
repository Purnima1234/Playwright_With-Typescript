//Objects are always copy by reerence

let a={status: "pass"};

let b=a; //b is a copy of a but it is not a new object. It is a reference to the same object in memory. So, if we change the value of b, it will also change the value of a because both a and b are pointing to the same object in memory.

b.status="fail";

console.log(a); //output: {status: "fail"}
console.log(b); //output: {status: "fail"}