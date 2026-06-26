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


let str="poornima";
let revstr= str.split("").reverse().join("");
console.log(revstr);

let str1="Poornima";
let revstr1="";
for(let i=str1.length-1; i>=0; i--){
    revstr1+=str1[i];
}


// search the number by using index
let x= [1,4,5,3,6,7,8,9]
//search 4th number
 let y=x[3];
console.log(y);

//remove 2nd number from the array
let x=[2,4,5,3,5,6,7,8,9]
let revx=x.reverse()
console.log(revx);

//remove Duplicates
let x=[2,4,5,3,5,6,7,8,8,9]


//remove Duplicates
let x=[2,4,5,3,5,6,7,8,8,9]
let unique = [...new Set(x)];
console.log(unique);

let dup= x.filter((item, index) => x.indexOf(item) != index);
console.log(dup)


let arr=[8,9,7,6,5]

let sorting=arr.sort((a,b) => b-a);
console.log(sorting);

let num= [1,2,5,8,9,67,54]

let y=Math.max(...num)
console.log(y)


let x=[2,3,4]
let y=[5,6,7]

let z= x.concat(y);
console.log(z);

//sum ofarray
let num=[1,2,3,4,5]
let sum=0;  
for(let n of num){
    sum+=n;
}

let x=[8,9,4,3,2,1];
let sum=0;

for (let n of x){
sum+=n;
}
console.log(sum)

let str='purnima'
let rvstr="";

for(let i=str.length -1; i>=0; i--){
rvstr+=str[i];
}
console.log(rvstr);

let str= "Pooornima";
let dup= {};


for(let char of str){
if(dup[char]){
dup[char]++
}
else
dup[char]=1
}
console.log(dup);