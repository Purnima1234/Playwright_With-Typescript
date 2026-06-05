//reverse the string
function reverseString(str) {
    return str.split("").reverse().join("");
}

console.log(reverseString("hello world")); // "dlrow olleh"

 //palindrome check
 let str = "A man, a plan, a canal, Panama";
 let reversed = str.split("").reverse().join("");

 //find duplicaresin string
 let str="hello workd";
 let duplicates=[...new Set(str.split("").filter((char, index, arr) => arr.indexOf(char) !== index))];
 console.log(duplicates); // ['l', 'o'] 
    