const env= {
    Base_URL: "https://www.google.com",
    Timeout: 5000,
    Browser: "Chrome"
}

const ExpectedResponse = {
    status:200,
    body: {
        user: {role:"admin", active:"true"}
    }

}