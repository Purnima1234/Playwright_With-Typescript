var a=10;
 console.log(a)

 function printhello(){
  
    var a= 50; //Redeclaring the Variable
    
    console.log(a)

    if (true){
    var a=100; //Redeclaring the Variable
    console.log(a)
   }
   console.log("F ->", a);
 }
 
   console.log("g ->", a);
   printhello();


//In the above code, we have declared a variable 'a' with var keyword. We have redeclared the variable 'a' inside the function printhello and also inside the if block. Since var is function scoped, it will override the previous value of 'a' and will print 100 in the console.
//Function scoped alwasys takes the last value assigned to it, even if it is redeclared multiple times within the same function.