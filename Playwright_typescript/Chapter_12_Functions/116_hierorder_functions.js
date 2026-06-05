function runWithLogin(testfn, testname){
    let result=testfn();
   console.log(`Running ${testname} with result: ${result}`);
   return result;
}
    

function loginTest(){
    return "pass";
}

function loginTest2(){
    return "fail";
}

runWithLogin(loginTest, "Login Test 1");
console.log(runWithLogin(loginTest, "Login Test 1")); // pass
runWithLogin(loginTest2, "Login Test 2");
console.log(runWithLogin(loginTest2, "Login Test 2")); // fail
