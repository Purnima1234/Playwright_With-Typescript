function getToken() {
    return Promise.resolve("abc123");
}

async function testapli() {
let token=await getToken();
console.log(token);
}
 run();
 
