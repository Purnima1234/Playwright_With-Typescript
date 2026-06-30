interface ReadonlyAPIResponse {
    readonly statuscode: number;
    body: string;
    headerss?:object;
    responseTime?: number; 
}

//readonly property cannot be modified after initialization
let response1: ReadonlyAPIResponse = {
    statuscode: 200,
    body: "Success",
    headerss: {},
    responseTime: 150
}

console.log(response1.statuscode);