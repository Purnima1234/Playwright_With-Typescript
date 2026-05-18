console .log("HI");

console.log(c)//Cannot access 'c' before initialization. This is because 'c' is declared with const, which is not hoisted and is in a temporal dead zone until it is initialized.
 //tdz for "c" starts here
 //we will see reference error if we try to access "c" before it is initialized. This is because "c" is in a temporal dead zone until it is initialized with a value. Once we initialize "c", it becomes accessible and we can use it in our code without any issues.

const c=100;