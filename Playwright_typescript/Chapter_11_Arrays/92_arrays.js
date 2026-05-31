let num= [1,55,66,22,64,76,24];
x=num.sort();
console.log(x);

//this is called lexical sorting as it considers first digit

let fruits=["banana", "apple", "grapes", "mango"];
y=fruit.sort();
console.log(y);
// here anser will be (apple, banana, grapes, mango) as it is in alphabetical order

// to sort in numerical order we can use compare function

let numbers=[1,55,66,22,64,76,24];

x=numbers.sort((a,b) => a-b);
console.log(x);

// the above is ascending order

// the below is descending order

y=numbers.sort((a,b) => b-a);
console.log(y);
