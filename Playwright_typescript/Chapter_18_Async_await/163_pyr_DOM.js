function openBrowser() {
    return Promise.resolve("Browser opened");
}

function goToLogin() {
    return Promise.resolve("Navigated to login page");
}

function entercredentials() {
    return Promise.resolve("Credentials entered");
}

function clickagain() {
    return Promise.resolve("Login button clicked");
}

async function e2e() {
    let msg1= await openBrowser();
    console.log(msg1);
    let msg2= await goToLogin();
    console.log(msg2);
    let msg3= await entercredentials();
    console.log(msg3);
    let msg4= await clickagain();
    console.log(msg4);
}

e2e();