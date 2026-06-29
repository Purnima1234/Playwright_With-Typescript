class test {
    execute() {
        console.log("Reun Generic test execution");
    }
}

class APItest extends test {
    execute(){
        console.log("API test execution");

    }
}
class unittest extends test {
    execute() {
        console.log("unittest execution");
    }
}
class UItest extends test {
    execute() {
        console.log("UI test execution");
    }
}

let tests=  [new APItest(), new unittest(), new UItest()];

tests.forEach(function (test) {
    test.execute();
});