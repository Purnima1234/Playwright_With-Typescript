//Question 2 — Test Case Pass/Fail Verdict

//Problem: Compare actual result with expected result and print test verdict.

//Sample Input/Output:

//ternary operator syntax: condition ? expression1 : expression2

let expectedresult="Login Successful";
let actual   = "Login Successful";

let testresult=expectedresult===actual ? "testpassed": "testfailed";
console.log(testresult);

//IF else statement - test passed

let expectedresult="Login Successful";
let actual   = "Login Successful";

if(expectedresult===actual){
    console.log("Output: Testpassed");
}
else{
    console.log("output: Testfailed");

}


////IF else statement - test failed

let expectedresult="Login Successful";
let actual   = "Invalid Credentials";

if(expectedresult===actual){
    console.log("Output: Testpassed");
}
else{
    console.log(`❌ Test Failed — Expected: ${expectedresult}, Got: ${actual}`);

}
