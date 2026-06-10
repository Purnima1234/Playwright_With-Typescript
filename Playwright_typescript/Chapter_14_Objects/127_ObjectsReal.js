let config={}

    config.browser= "chrome";
    config.timeout=5000;
    config.testname="Login Test";

    console.log(config.browser);
    console.log(config.timeout);
    console.log(config.testname);
 

    delete config.browser; //delete the browser property from the config object

    console.log(config.browser); //output: undefined. This is because we have deleted the browser property 
    // from the config object. So, when we try to access the browser property, it returns undefined because it 
    // does not exist in the config object anymore.


    //also can define objects inside

    let config2 = {
        browser: "Chrome",
        timeout: 5000,
        testname: "Login Test"
    }
    
    console.log(config2.browser);
    console.log(config2.timeout);
    console.log(config2.testname);