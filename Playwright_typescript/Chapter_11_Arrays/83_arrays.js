let fruits = []; //empty array
let vegetables = ["carrot", "broccoli", "spinach"];

console.log(vegetables[0]); // Output: "carrot"
console.log(vegetables.length); // Output: 3
vegetables.push("kale"); // Adds "kale" to the end of the array
console.log(vegetables); // Output: ["carrot", "broccoli", "spinach", "kale"]
vegetables.pop(); // Removes the last element ("kale") from the array
console.log(vegetables); // Output: ["carrot", "broccoli", "spinach"]   

//array index starts at 0


let numbers=[3,5,7,8,9,12,13,14];

//length of the array
y=numbers.length
console.log(y);

// search the number by using index
z=numbers[0];
console.log(z);

// search upto certsin numbers using slice method
let numbers=[3,5,7,8,9,12,13,14];
let z=numbers.slice(2,6);
console.log(z); //[ 7, 8, 9, 12 ]

//add number at the end of the array
let numbers=[3,5,7,8,9,12,13,14];
numbers.push(98);
console.log(numbers)

//removes last number from the array
let numbers=[3,5,7,8,9,12,13,14];
numbers.pop();
console.log(numbers)

//remove 2nd number from the array

let numbers=[3,5,7,8,9,12,13,14];
numbers.splice(2,1)
console.log(numbers) //[ 3, 5, 8, 9, 12, 13, 14 ]

//`reverse the array

let numbers=[3,5,7,8,9,12,13,14];

numbers.reverse();
console.log(numbers);
 
let scores = [1,2,3,4,5,6];

let x = scores.at(-1);
let y= scores.at(-2);
let z= scores.at(-3);
let xl = scores.at(-4);
let yl = scores.at(-5);
let zl = scores.at(-6);

let all=[x,y,z,xl,yl,zl]
console.log(all); // Output: [6, 5, 4, 3, 2, 1]

let scores2 = [1,2,3,4,5,6];
d=scores2.indexOf(3);
console.log(d);