//it will execute atleats once even if the condition is false because in do while loop condition is checked after executing the block of code

//while loop example

let x=10;

while(x>10){
    console.log(x);
    x++;
}

//the above while loop wont execute where x=10 and it is not greater or less than 10.

//do while loop example

let x=10;
do {
    console.log(x);
    x++;
} while (x<10);
//the above do while loop will execute atleats once because in do while loop condition is checked after executing the block of code 
