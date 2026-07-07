class APIClient {
    public BaseURL: string;
    private apiKey: string;
    protected timeout: number;

    constructor(baseURL:string, apiKey:string, timeout:number) {
        this.BaseURL=baseURL;
        this.apiKey=apiKey;
        this.timeout=timeout;
    }
    protected getAuthHeader(): string {
        return `Bearer ${this.apiKey}`;
    }
    public sendRequest(path:string):void {
        console.log("GET" +this.BaseURL +path);
        console.log("Auth"+ this.getAuthHeader());
        console.log("Timeout"+ this.timeout);
    }

    }

class userAPIClient extends APIClient {
 
    getUser(userId:string):void {
        console.log("GET" + this.BaseURL + "/users/" + userId);
        console.log("Auth" + this.getAuthHeader());
        console.log("Timeout" + this.timeout);  

    }}