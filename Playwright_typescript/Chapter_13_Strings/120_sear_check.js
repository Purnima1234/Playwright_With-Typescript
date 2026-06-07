//searching'

let url= "https://www.staging.google.com";

//inculdes funtion is used to check if a string contains a specific substring. It returns true if the substring is found in the string, otherwise it returns false.
 
let x= url.includes("staging"); // includes method is used to check if a string contains a specific substring. It returns true if the substring is found in the string, otherwise it returns false.
console.log(x); //true

//starts with / ends with function is used to check if a string starts with or ends with a specific substring. It returns true if the string starts with or ends with the specified substring, otherwise it returns false.
console.log(url.startsWith("https"));
console.log(url.endsWith("com"));

//index or lastindex

console.log(url.indexOf("a")); //indexOf method is used to find the index of the first occurrence of a specified substring in a string. It returns the index of the first occurrence of the substring, or -1 if the substring is not found.
console.log (url.lastIndexOf("a"));
 //search
let url= "https://www.staging.google.com";
 console.log(url.search(/google/));
