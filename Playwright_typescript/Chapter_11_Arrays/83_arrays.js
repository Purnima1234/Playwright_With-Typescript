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

//get one object
let x=[{name:"John", age:30}, {name:"Jane", age:25}];

let y=x[1];
console.log(y)

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

//remove numbers from middle of the array
let num=[3,6,8,2,9,12,13,14];

let z= num.splice(2,3)

console.log(num)

//`reverse the array

let numbers=[3,5,7,8,9,12,13,14];

numbers.reverse();

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

//remove duplicates from the array
let numbers=[3,5,7,8,9,12,13,14,3,5,7];

let uniqueNumbers = [...new Set(numbers)];

let arr= ["purnima", "Honey", "Purnima", "Nydhili"];

let duplicates = arr.filter((item, index) => arr.findIndex(i => i.toLowerCase() === item.toLowerCase()) !== index);

console.log(duplicates); // Output: ["Purnima"]

//Find duplicates
let x=[2,4,5,3,5,6,7,8,9]
let duplicates = x.filter((item, index) => x.indexOf(item) !== index);
console.log(duplicates); // Output: [5]


//sum of the array
let names=[2,3,4,5,,5,5,,6]
let sum=names.reduce((accumulator, currentvalue) => accumulator + currentvalue, 0); 


let arr=[{purnima},{mydhili},{honey}, {Honey}];



console.log(y)
