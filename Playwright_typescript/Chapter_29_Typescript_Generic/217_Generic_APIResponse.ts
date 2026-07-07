interface APIResponse<T> {
    statusCode: number;
    data: T;
}

function wrapresponse<T>(statusCode: number, data: T): APIResponse<T> {
    return {
        statusCode,
        data
    }
}
//whan we are not sure about the type of data we can use generic to define the type of data in the response.

