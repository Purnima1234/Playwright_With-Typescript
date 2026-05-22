let statuscode=200;

if (statuscode===200){
    console.log("success");
}
else if (statuscode===400){
    console.log("Bad request");
} else if (statuscode===401){
    console.log("Unauthorized");
} else if (statuscode===404){
    console.log("Not found");
} else if (statuscode===500){
    console.log("Internal server error");
}

else{
    console.log("unknown status code"); 
}