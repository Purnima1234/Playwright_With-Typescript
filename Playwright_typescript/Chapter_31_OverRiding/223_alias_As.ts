let rawResponse: unknown = {
    status:200,
    body:{users: "admin", role:"tester"}

}

interface userResponse {
    status:number,
    body: {user:string, role:string}

}

let response= rawResponse as userResponse;
console.log("status", response.status);
console.log("user:", response.body.user);
