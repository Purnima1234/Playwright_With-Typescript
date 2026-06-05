function retry (testname, maxretries, delay){
    console.log(`Running test ${testname} with max retries ${maxretries} and delay ${delay}`)
}

retry("Login Test", 3, 1000);


//default parameter
function retry (testname, maxretries=3, delay=1000){
    console.log(`Running test ${testname} with max retries ${maxretries} and delay ${delay}`)
}   
retry("Login Test"); // Running test Login Test with max retries 3 and delay 1000
retry("Login Test", 5); // Running test Login Test with max retries 5 and delay 1000
retry("Login Test", 5, 2000); // Running test Login Test with max retries 5 and delay 2000      