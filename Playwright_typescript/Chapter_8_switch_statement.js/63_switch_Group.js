let browser ="Edge";

switch (browser) {

    case "chrome":
    case "Edge":
    case "Brave":
    case "Opera":    
        console.log("Chromium project");
        break;
    case "Firefox":
        console.log("Firefox browser");  
    case "safari":
        console.log("safari project");   
     default:
        console.log("unknown browser");    
}