let purnima_age=22;
let rj_will_go_goa=purnima_age>=18 ? "yes" : "no"

console.log(rj_will_go_goa) // yes

let purnima_can_drive=purnima_age>=18 ? "yes" : "no"
console.log(purnima_can_drive) // yes   


let environment="production"
let base_url=environment==="production" ? "https://www.production.com" : "http://localhost:3000"
console.log(base_url) // https://www.production.com


let isci=true;
let browserMode=isci ? "headless": "Headed"

console.log("Launching browser in:", browserMode ,"mode") // Launching browser in: headless mode

let temp=35;
let feel=(temp>=40) ? "Very hot" : (temp>=30) ? "Hot" : (temp>=20) ? "Warm" : "Cold"