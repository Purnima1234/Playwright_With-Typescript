interface testcase {
    ID: number;
    name: string;
    description: string;
}

let test1:testcase = {
    ID: 2,
    name: "Test Case 1",
    description: "This is a test case description."
}
console.log(test1.ID);