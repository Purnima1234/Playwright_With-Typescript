

//count of vovwels

let st3 = "poornimaU";
let vo="aeiouAEIOU";
let count=0;

for (let char of st3){
    if(vo.includes(char)){
        count++;
    }

    console.log(count);

}

//count of vowels
let st4="poornimaU";
let vow="aeiouAEIOU";
let count2=0;   
for(let char of st4) {
    if(vow.includes(char)){
        count2++;    
        
    }}
    console.log(count2);


    let st5="I love India";
    let vow2="aeiouAEIOU";
    let[word1, word2, word3]= st5.split(" ")
    console.log(word1);
    console.log(word2);
    console.log(word3);

    let count3=0
    let count4=0;
    let count5=0;


    for(let char of word1){
        if(!vow2.includes(char)) {
            count3++;
        }
    }

    for(let char of word2){
        if(!vow2.includes(char)) {
            count4++;
        }
    }

    for(let char of word3){
        if(!vow2.includes(char)) {
            count5++;
        }      
    
    }

    console.log("Consonants in word1: " + count3);
    console.log("Consonants in word2: " + count4);
    console.log("Consonants in word3: " + count5);  

    let wor="India is my country is great";
    let word2= wor.split(" ");
    console.log(word2); //[ 'India', 'is', 'my', 'country' ]

    let x=word2.map(item  => item.length);
    console.log(x); // [5, 2, 2, 7]

    let y= x.length;
    console.log(y); // 6

    let cha= [9,1,2,3,3,4,4,5,6];
    let du= cha.filter((item,index) => cha.indexOf(item) !==index);
    console.log(du)
    let un=cha.filter(item => !du.includes(item));
    console.log(un);
    //first non repeated character
    let f=cha[0];
    console.log(f);
    //repeated charcter
    let r=du[0];
    console.log(r);

     let cha2= [9,1,2,3,3,4,4,5,6];
     

     //find frequesncy of each element in the array
     let freq={};
        for(let item of cha2){
            if(freq[item]){
                freq[item]++;
            }
            else{
                freq[item]=1;
            }

        }
        console.log(freq);


        //anagrams
    let str1="missing";
    let str2= "purnima";
  
let str3=str1.split("").sort().join("");
let str4=str2.split("").sort().join("");

if (str3===str4){
    console.log("It is a anagram");

}else {
    console.log("It is not a anagram");
}
   

//longestword in the string

let str= "India is my country";
let [word1, word2, word3, word4] =  str.split(" ");
let x=word1.length
let y=word2.length
let z=word3.length
let r=word4.length
console.log(x);
console.log(y);
console.log(z);
console.log(r);

 if(x>y && x>z && x>r) { 
    console. log(word1+ " " + "is the largest word");
 } else if (y>x && y>z && y>r) {
    console.log(word2+ " " + "is the largest word");
 } else if (z>x && z>y && z>r) {
    console.log(word3+ " " + "is the largest word");
 } else {
    console.log(word4+ " " + "is the largest word");
 }


let c="Poornima";
let s= c.split("");
console.log(s);
let dup= s.filter((item,index) => s.indexOf(item) !==index);
console.log(dup);

let ccl="Poornima";
let dupl= {};


for(let char of ccl) {
    if(dupl[char]){
        dupl[char]++;
    }else
        dupl[char]=1;
}


