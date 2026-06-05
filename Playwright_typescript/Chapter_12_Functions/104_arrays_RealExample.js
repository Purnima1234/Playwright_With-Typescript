//if our statuscode is>=200 and <300

function validateStatuscode(status) {
    if(status >=200 && status<=300){
        console.log("success");
    }
}

return validateStatuscode(205);

//function as Expression
const  validateStatuscode =function(status) {
  if(status >=200 && status<=300){
        console.log("success");
    }
}

return validateStatuscode(205);


//function as Arrow funtion
const validateStatusCode_Arrow = (Status) =>{
    if(Status >=200 && Status<=300){
        console.log("success");
    }
}
return validateStatusCode_Arrow(205);