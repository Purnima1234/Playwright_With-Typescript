 //map function

 //based on the condition , it will provide new array with the transformed values. It takes a callback function as an argument, which is executed for each element in the array and returns a new value that will be included in the resulting array.

 let arr=[30, 45, 75, 90];

 let grades= arr.map(s => s===45 ? "justpassed" : s>45 && s===75 ? "distinction" : s>=90 ? "Excellent" : "failed");
console.log(grades);

//Filter keeps the element that pass a test

 let arr=[30, 45, 75, 90];
 let  passed=arr.filter(s => s>60);
 console.log(passed);

 //reduce function  
 
 let arr=[30, 45, 75, 90];
 let total= arr.reduce((a,b) => a+b,0);
    console.log(total);