class BasePage {
    protected baseURL:string;

    constructor(baseURL:string) {
        this.baseURL=baseURL;
    }

    protected navigate(path:string):void{
        console.log("Navigating to" + this.baseURL + path);
    }
}

class LoginPage extends BasePage {
    constructor(baseURL:string) {
        super(baseURL);
    }
    login(username:string, password:string):void {  
        this.navigate("/login");
        console.log("Logging in with username: " + username + " and password: " + password);
    }
}

let page=new LoginPage("https://example.com");
page.login("user1", "password123");

