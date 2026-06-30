let unknown:unknown="hello";

if (typeof unknown==="string") {
    console.log("HI");
}

let message:string="hello";

let username: string="Purnima";
 let age2:number=30;

 //functionsand annotations
  function greeet(name:string) : string{
    return `Hello, ${name}`;
  }


  // arrow function annotations
  const multiply2=(a:number, b:number): number => a*b;


  //object annotations
  let user: {name:string, age:number}={
    name:"Purnima",
    age:30
  }