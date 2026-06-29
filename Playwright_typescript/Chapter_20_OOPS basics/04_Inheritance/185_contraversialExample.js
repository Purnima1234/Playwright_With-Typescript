class BaseTest {
    setup(){
        console.log("BaseTest setup");
    }
}

class APITest extends BaseTest {
    setup() {
        console.log("API Test setup");
        //super.setup();
    }
}
let test= new APITest();
test.setup();
