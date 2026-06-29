class BaseTest {
    setup(){

        console.log("BaseTest setup");

    }
}

class APItest extends BaseTest {
   setup () {
        console.log("API Test setup");
    }
}

let test= new APItest();
test.setup();
