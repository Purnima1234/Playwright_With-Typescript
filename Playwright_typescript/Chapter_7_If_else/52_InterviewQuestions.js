if ("hello") console.log("string is truthy"); //string is truthy
 if(22) console.log("number is truthy"); //number is truthy
    if(true) console.log("boolean is truthy"); //boolean is truthy
    if({}) console.log("object is truthy"); //object is truthy
    if([]) console.log("array is truthy"); //array is truthy


    if("" ) console.log("wont print"); //wont print
    if(null) console.log("wont print"); //wont print
    if(undefined) console.log("wont print"); //wont print
    if(0) console.log("wont print"); //wont print
    if(-0) console.log("wont print");   
    if(NaN) console.log("wont print"); //wont print 


    let name=undefined;

    if(name) {
        console.log("name is defined");
    }

    else {
        console.log("name is not defined");
    }