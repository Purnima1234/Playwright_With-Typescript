let responsecode=404;

switch(responsecode) {
    case  200:
        console.log("success");
        break;      
    case 400:
        console.log("Bad request");
        break;  
    default:
        console.log("unknown status code");
}