let a=10;
 console.log(a)

 function printhello(){
  
    let a= 50; //Redeclaring the Variable
    
    console.log(a)

    if (true){
    let a=100; //Redeclaring the Variable
    console.log(a)
   }
   console.log("F ->", a);
 }
 
   console.log("g ->", a);
   printhello();


//In the above code, we have declared a variable 'a' with let keyword. We have redeclared the variable 'a' inside the function printhello and also inside the if block. Since let is block scoped, it will not override the previous value of 'a' outside its block.
//Block scoped always takes the value assigned within its block, even if it is redeclared multiple times within the same function.