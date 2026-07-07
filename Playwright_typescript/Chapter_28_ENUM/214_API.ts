enum HTTPMETHOD {
    GET = "GET",
    POST = "POST",
    PUT = "PUT",
    DELETE = "DELETE"   
}

function sendRequest(url: string, method: HTTPMETHOD) {
    console.log(`Sending ${method} request to ${url}`);
}

sendRequest("https://example.com/api/data", HTTPMETHOD.GET);
sendRequest("https://example.com/api/data", HTTPMETHOD.POST);
sendRequest("https://example.com/api/data", HTTPMETHOD.PUT);
sendRequest("https://example.com/api/data", HTTPMETHOD.DELETE);

