//Question 1 — HTTP Status Code Categorizer
//Problem: Given an HTTP status code, print which category it belongs to.

let statuscode=200;

if(statuscode>=200 && statuscode<=299){
    console.log("Output: success");
}

else if (statuscode>=300 && statuscode<=399){
    console.log("Output: redirection");
}

else if(statuscode>=400 && statuscode<=499){
    console.log("Output: Client Error");
}
else if(statuscode>=500 && statuscode<=599){
    console.log("Output: Server Error");
}
else{
    console.log("Output: Invalid status code");
}


//switch statement
 let statuscode=404;

 switch (true) {
    case(statuscode>=200 && statuscode<=299):
        console.log("Output: success");
        break;

    case(statuscode>=300 && statuscode<=399):
        console.log("Output: redirection");
        break;
    case(statuscode>=400 && statuscode<=499):
        console.log("Output: Client Error");
        break;  
    case(stauscode>=500 && statuscode<=599):
        console.log("Output: Server Error");  
        break;
    default:
     console.log("Output: Invalid status code");  

 }