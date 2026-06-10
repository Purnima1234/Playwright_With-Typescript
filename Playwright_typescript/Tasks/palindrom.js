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
