let str= "Poornima";

let charfre= {};
for(let char of str){
  if (charfre[char]) {
    charfre[char]++;
} else{
  charfre[char]=1;
}
}
console.log(charfre)

//dupl
let str2="Poornima";
let dup= new Set();
 for( let char of str2) {
  if(dup.has(char)){
    console.log(char);
  } else {
    dup.add(char);
  }
 }

 let x= "Poornnima";
 let y= x.split("");
 console.log(y);

 let z= y.filter((item, index) => x.indexOf(item) !== index);
  console.log(z);

  let r= z.join(" ");
  console.log(r);
//second largest
let arr=[1,2,3,6,8,9,10];
let arr2= arr.sort((a,b) => b-a)[1];
console.log(arr2);

let  wordsall= "My name is purnima purnima";
let words2= wordsall.split(" ");
console.log(words2);
let word3= {};

for(let word of words2){
  if(word3[word]){
    word3[word]++;
  } else{
    word3[word]=1;
  }
}
console.log(word3)


let x="Hi Hello Hola";

let x1= x.split(" ");

let x2={};

for(let char of x){

if(x2[char]){
 (x2[char])++
}
else
 (x2[char]=1);
}

console.log(x2);

//count consonents

let str="Purnima";
let vow="aeiouAEIOU";
let count=0

for(let char of str) {
    if(vow.includes(char)){
        count++;
    }
}
console.log(count);

let str="Poornimaa";
let str2= str.split("");
console.log(str2);

let dup=str2.filter((item,index) => str2.indexOf(item)!==index);
console.log(dup);

let uni=str2.filter(item => !dup.includes(item));
console.log(uni);



//find duplicates and uniques in each word print first letter
let sen="hi hheelo hkkjj";
let [word1, word2, word3]= sen.split(" ");
console.log(word1);

let word1Chars = word1.split("");
let dupword1=word1Chars.filter((item,index)=>word1Chars.indexOf(item)!==index);
console.log(dupword1)