var v=10;
let l=20
const c=30;


//Var can be redeclared and reassigned. Var is function scoped.

var browser="chrome";
var browser="firefox";`` //redeclared
browser="edge"; //reassigned allowed

//Redeclared means. delcaring the same variable again with var keyword. Reassigned means assigning a new value to the same variable.

//Let can be reassigned but not redeclared. Let is block scoped.

//Var Example - For Funtuon scoped

var testcases=["Login", "Logout", "signup" ];

for(var i=0; i<testcases.length; i++){
    console.log("Running tests",testcases[i])
}
console.log("Loop counter leaked",i);


