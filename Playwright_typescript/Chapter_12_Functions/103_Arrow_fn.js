//type 1:-

const greet= function (name) {
    return `hello, ${name}`;        

}

let r=greet("Alice");
console.log(r);


//type 2:=

const greet2= (name1) => name1;

console.log(greet2("Bob"));

const doubleIt =  n => n*2;
console.log(doubleIt(5));

const add = (a, b) => a + b;
console.log(add(3, 4)); 

 