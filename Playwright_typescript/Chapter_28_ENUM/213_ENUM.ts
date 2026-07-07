enum Browser {
    Chrome = "chrome",
    Firefox = "firefox",
    Edge = "edge",
    Safari = "safari"
}

function launchBrowser(browser: Browser) {

    switch (browser) {
        case Browser.Chrome:
            console.log("Launching Chrome browser");
            break;
         case Browser.Firefox:
            console.log("Launching Firefox browser");
            break;
        case Browser.Edge:
            console.log("Launching Edge browser");
            break;  
            case Browser.Safari:
            console.log("Launching Safari browser");
            break;
        default:
            console.log("Unsupported browser");
            break;
    }
            
            

}