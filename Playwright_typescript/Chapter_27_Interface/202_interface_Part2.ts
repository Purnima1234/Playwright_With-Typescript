interface APIresponse {
    responseCode: number;
    body: string;
    headers?: Object;
    statuscode?: number;
}

let response2: APIresponse = {
    responseCode: 200,
    body: "Success",
    headers: {}
}

console.log("Response with headers:", response2);

//for options we can add ?
// headers is optional - we can omit it
let response3: APIresponse = {
    responseCode: 201,
    body: "Created"
}

console.log("Response without headers:", response3);