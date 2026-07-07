interface Basepage {
    url: string;
    title:string;
    openVWO(url:string): void;
}
interface loginpage extends Basepage {
    username: string;
    password:string;
    loginbuttonselector: string;


}

let LoginPage: loginpage = {
    url: "https://example.com/login",
    title: "Login Page",
    username: "testuser",   
    password: "password123",
    loginbuttonselector: "#login-button",
    openVWO(url: string): void {
        console.log(`Opening VWO at ${url}`);
    }

}