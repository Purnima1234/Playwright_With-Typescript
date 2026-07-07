let name="paap";
let reverse="";

for(let i=name.length-1; i>=0; i--){
    reverse+=name[i];
}

console.log(reverse);

if(name===reverse) {
    console.log("it is palindrome");
} else {
    console.log("it is not a palindrome");
}


let text="Programming";
let duplicates={};

for (let char of text) {
    if (duplicates[char]) {
        duplicates[char]++;
    } else {
        duplicates[char] = 1;
    }
}

console.log(duplicates);


let name2="programming";
let duplicates={};

for(let char in text2) {
    if (duplicates[char]){
        duplicates[char]++;
    }
    else{
        duplicates[char] =1;
    }
    }

    //duplicates in array
    let x=[2,3,4,4,5,5,6,];
    let y=x.filter((item, index) => x.indexOf(item) !== index);
    console.log(y); // Output: [4, 5]'


    //find duplicate characters

let str="poorniima";
let str1=str.split("");

console.log(str1);

let dup=str1.filter((item, index) => str1.indexOf(item)!==index);
console.log(dup);
let r= dup.length;
console.log(r);

let unique= str1.filter(item =>!dup.includes(item));
console.log(unique);