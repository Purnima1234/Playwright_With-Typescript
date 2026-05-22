let purnima_age=22;
let rj_will_go_goa=purnima_age>=18 ? "yes" : "no"

console.log(rj_will_go_goa) // yes


let purnima_can_drive=purnima_age>=18 ? "yes" : "no"
console.log(purnima_can_drive) // yes  



let ActualSttauscode=200;
let expectedStatusCode=200;
let response=ActualSttauscode==expectedStatusCode? "Pass: Status code is correct" : "Fail: Status code is incorrect"



let environment="production"
let base_url=environment==="production" ? "https://www.production.com" : "http://localhost:3000"
console.log(base_url) // https://www.production.com


let isci=true;
let browserMode=isci ? "headless": "Headed"
console.log("Launching browser in:", browserMode ,"mode") // Launching browser in: headless mode


let temp=35;
let feel=(temp>=40) ? "Very hot" : (temp>=30) ? "Hot" : (temp>=20) ? "Warm" : "Cold"


let condition=true;
let skismale=condition? "true" : "false"
console.log(skismale) // true


//nested ternary operator : we have multiple conditions to check then we can use nested ternary operator
let age=5;
let Purnima_For_Vote = age>=18? "Eligible for vote" : age>=16? "Eligible for driving": "Not eligible for anything"
console.log(Purnima_For_Vote) // Not eligible for anything


let score=85;

let purnimascore= score>90 ? "Distinction" : score>80 ? "First class" : score>70 ? "Second class" : "Just pass"
console.log(purnimascore) // First class

//Maximum number between 2 numbers

let numberx=50;
let numbery=20;

let maximumnumber= numberx> numbery? numberx:numbery
console.log ("Maximunnumber is:", maximumnumber)


//maximum number between 3 numbers

let x=50;
let y=100;
let z=200;

let maxnumber= x>y && x>z? "maxnumber is x" :y>z && y>x? "maxnumber is y" : z>x && z>y? "maxnumber is z" : "unknown";
console.log( maxnumber);
