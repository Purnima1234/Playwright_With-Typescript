
//Finding a year is a leap or not
let year= 2017

if((year%4===0 && year%100!==0) || (year%400===0)){
console.log("year is a leap");
}

else{
console.log("year not a leap year");

}

//HTTP status code category  verify

let statuscode=200;

if(statuscode>=200 && statuscode<=299){
console.log("success");
}
else if(statuscode>=300 && statuscode<=399){
console.log("Redirection");
}
else if(statuscode>=400 && statuscode<=499){
console.log("client Error");
}
else if(statuscode>=500 && statuscode<=599){
console.log("server Error");
}
else{
console.log("invalid");
}


