interface Testconfig {
    browser:string;
    headless:boolean;
    baseURL: string;
    timeout?: number;
    retries?: number;

}

let ciConfig: Testconfig ={
    browser: "chromium",
    headless: true,
    baseURL: "https://example.com"

}

let localConfig: Testconfig={
    browser: "firefox",
    headless: false,
    baseURL: "http://localhost:3000",
    timeout: 5000,
    retries: 2
}