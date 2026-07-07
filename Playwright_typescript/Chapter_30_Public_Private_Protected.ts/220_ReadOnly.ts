class playwrightConfig {
    readonly baseURL: string;
    readonly timeout: number;
    readonly retries: number;

    constructor(url:string, timeout:number, retries:number) {
        this.baseURL=url;
        this.timeout=timeout;
        this.retries=retries;

    }
    showconfig():void {
        console.log("BaseURL: " + this.baseURL);
        console.log("Timeout: " + this.timeout);
        console.log("Retries: " + this.retries);
    }

}