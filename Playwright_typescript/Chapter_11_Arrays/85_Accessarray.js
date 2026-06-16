//accessing and modifying
let statuses= ["passed", "failed", "skipped"];

console .log (statuses[0]);
 //We also go in reverse brought from python

console.log(statuses.at(-1)); // Output: "skipped" (last element)
console.log(statuses.at(-2)); // Output: "failed" (second-to-last element)
console.log(statuses.at(-3)); // Output: "passed" (third-to-last element) 
 //-4 will be undefined
  
//while using reverse we will use at method to access elements from the end of the array, as it provides a more intuitive way to access elements in reverse order without needing to calculate the index based on the array's length.

 // Modifying an array element
statuses[1] = "in progress"; // Changes "failed" to "in progress"
console.log(statuses); // Output: ["passed", "in progress", "skipped"]  

let arr=[2,3,4,5,6];

let x=arr.unshift(1);
console.log(x); // Output: 6 (returns new length of the array)
console.log(arr); // Output: [1, 2, 3, 4, 5, 6] (adds 1 at the beginning of the array)

let arr=[2,3,4,5,6];
let y=arr.shift();
console.log(y); // Output: 2 (returns the removed element)

let arr3=[3,4,5,6,7,8];
let x= Math.max(...arr3);
console.log(x);

let arr4=[9,7,6,4,5,10];

let secondlargest=arr4.sort((a,b) => b-a)[1];
console.log(secondlargest);

secondsmall= arr4.sort((a,b) => a-b)[1];
console.log(secondsmall);
let a=[2,3,4,5,6];
let b=[2,4,5,6];

let z= a.filter(x => !b.includes(x));
console.log(z); // Output: [3] (elements in a that are not in b)