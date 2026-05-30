//search

let arr=["pass", "fail", "skip", "un attempted","fail"];

let x= arr.indexOf("fail");

console.log(x);

//when having duplicate values in the array, indexOf() will return the index of the first occurrence of the value. To find the last occurrence, we can use lastIndexOf() method.

let y = arr.lastIndexOf("fail");

console.log(y);


//includes() method checks if a specific value is present in the array and returns true or false accordingly.
let arr=["pass", "fail", "skip", "un attempted","fail"];
let z= arr.includes("skip");
console.log(z);

//find function is used to search for the first element in the array that satisfies a given condition. It takes a callback function as an argument, which is executed for each element in the array until a match is found. If a match is found, it returns the value of that element; otherwise, it returns undefined.

let nums=[1,2,3,6,7,8,6,5,4,9,11,15];

xy=nums.find(x=> x>11);
console.log(xy);

//Find only indexes

let numbers=[3,5,7,6,89,100]
let z=numbers.findIndex(x=> x>10);
console.log(z);
d=numbers.findLast(x=> x>10);
console.log(d);

lastind=numbers.findLastIndex(x=> x>10);
console.log(lastind);