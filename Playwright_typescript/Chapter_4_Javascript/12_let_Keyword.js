//Let is modernway way for changing values
//Let is block scoped. It means it is only accessible within the block it is defined. It cannot be redeclared but can be reassigned.

let a=10;
let retrycount=0;
let retrycount=1;
let retrycount=2; //Redeclaring the same variable with let will throw an error. It cannot be redeclared.

let retrycount=0;
retrycount=retrycount+1 
retrycount=retrycount+1 
retrycount=retrycount+1 
//Reassigning the value of retrycount is allowed with let. It can be reassigned.
console .log(retrycount);
//Let is block scoped. It means it is only accessible within the block it is defined. It cannot be redeclared but can be reassigned.    

//Blocked scope example with let

if (testcases=="pending") {
    let executiontime=1000;
    console.log("Execution time for pending testcases",executiontime);
   
} //This is block scope 

console.log(executiontime); //This will throw an error because executiontime is not accessible outside the block it is defined. It is block scoped.