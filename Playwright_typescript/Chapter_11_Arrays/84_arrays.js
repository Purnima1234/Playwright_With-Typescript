let arr=["apple",2,"grapes", "goat"];  //Traditional way

console.log(arr[0]); // Output: "apple"
console.log(arr[1]); // Output: 2
console.log(arr[2]); // Output: "grapes"
console.log(arr[3]); // Output: "goat"  
 console.log(arr[6]); // Output: undefined (index out of bounds)


 let testresults=["passed","failed", "skipped"];

 let mixed =[1, "hello", true, null, undefined];

 console.log(mixed[0]);

 //array constructor

 let scores= new Array(3); //this is length of the array, not the elements 

 let finalscores= new Array(2,4,7);
 console .log(scores);
 console.log(finalscores);

 //arrays are stored in memory as objects, so they can have properties and methods
 console.log(scores.length);
    console.log(finalscores.length);

//Javarscript is a runtime language, so arrays can hold any type of data and can be modified at runtime 
    

    let numbers= new Array(100,899,567,876);
    console.log(numbers);

    //array of

    let test= Array.of("passed", "failed", "skipped");
    console.log(test);


    //arrays from() method creates a new array from an array-like or iterable object

let greeting= Array.from ("helloWorld");
console.log(greeting); // Output: ["h", "e", "l", "l", "o", "W", "o", "r", "l", "d"]



//find missing elements in arary
let arr1=[1,2,3,4,5];
let arr2=[1,2,4,5]; 
let missingElements= arr1.filter(x=> !arr2.includes(x));
console.log(missingElements); // Output: [3]    

//remove duplicates from an array
let arr3=[1,2,2,3,4,4,5];
let uniqueElements= [...new Set(arr3)];
console.log(uniqueElements); // Output: [1, 2, 3, 4, 5]

//find the largest number in an array
let arr4=[10, 5, 20, 15];
let largestNumber= Math.max(...arr4);
console.log(largestNumber); // Output: 20   

//find the smallest number in an array
let arr5= [1,4,6,3.2,10];
let smallestnumber= Math.min(...arr5);
console.log(smallestnumber);

//find 2nd largest number in array
let arr7=[1,5,8,56,43];
let  secondlargest=arr7.sort((a,b) => b-a)[1];


//find second smallest number in arary
let arr8 = [4,3,78,98,65];
let secondsamllest= arr8.sort((a,b)=>a-b)[1];
console.log(secondsamllest);

//palindrome
let name="paaat";
let reversedName= name.split("").reverse().join("");
if(name===reversedName){
    console.log("it is a palindrome");
}
else {
    console.log("it is not a palindrome");

}

//prime number finding  
let number=17;
if(isPrime(number)){
    console.log(`${number} is a prime number`); 
}
function isPrime(num){
    if(num<=1){
        return false;
    }
    for(let i=2; i<=Math.sqrt(num); i++){
        if(num % i === 0){
            return false;
        }   
    return true;
}
}

//flatten nested array
let nestedArray = [1, [2, [3, [4, 5]]]];
let flattenedArray = nestedArray.flat(Infinity);
console.log(flattenedArray); // Output: [1, 2, 3, 4, 5] 


let x=[{name:"john", age:30}, {name:"jane", age:25}];
//find  the second object in the array
console.log(x[1]); // Output: {name: "jane", age: 25}   