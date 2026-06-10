let name= "purnima";
let length = name.length;
console.log(length);

//reverse the string without using inbuilt functions
let reverse="";
for(let i=length-1; i>=0; i--){
    reverse+=name[i];
}   

console.log(reverse);


let name="Madam";
let length = name.length;
let reverse="";

for(let i=length-1; i>=0;i--){
    reverse+=name[i];
    
}



if (name.toLowerCase() === reverse.toLowerCase()) {
    console.log("The String is palindrome");    

}

else {
    console.log("The String is not palindrome");
}
