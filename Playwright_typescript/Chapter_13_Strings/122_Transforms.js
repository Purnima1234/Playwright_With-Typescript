//lower to upper or vice versa

let str="Hello world";

console.log(str.toUpperCase());
console.log(str.toLowerCase());


//trim
console.log(str.trim()); //trim method is used to remove the whitespace from the beginning and end of the string. It does not remove the whitespace from the middle of the string.

console.log(str.trimStart());
console.log(str.trimEnd());

let msg="Test: Fail. Retry:Fail";
console.log(msg.replace("Fail","Pass")); //replace method is used to replace a specified value with another value in a string. It takes two arguments, the first argument is the value to be replaced and the second argument is the value to replace it with. It returns a new string with the replaced value. If the value to be replaced is not found in the string, it returns the original string.
console.log(msg.replaceAll("Fail", "Pass")); //replaceAll method is used to replace all occurrences of a specified value with another value in a string. It takes two arguments, the first argument is the value to be replaced and the second argument is the value to replace it with. It returns a new string with the replaced value. If the value to be replaced is not found in the string, it returns the original string.

//Conatination
let str1='Hello';
let strt2 ='world';



console.log(str1.concat(strt2)); //concat method is used to concatenate two or more strings. It takes one or more strings as arguments and returns a new string that is the concatenation of the original strings.

//replace

let url="https://www.google.com";
console.log(url.replace("https","http")); //replace method is used to replace a specified value with another value in a string. It takes two arguments, the first argument is the value to be replaced and the second argument is the value to replace it with. It returns a new string with the replaced value. If the value to be replaced is not found in the string, it returns the original string.
