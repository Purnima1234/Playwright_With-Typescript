class Basetest {
    setup(){
        console.log("Base: Open Browser");
        
    }
    teardown(){
        console.log("Base:close Browser");
    }
}

class UITest extends Basetest {
    setup(){
        super.setup();
        console.log("UI: Open Browser");
    }
    teardown(){
        super.teardown();// it indicates call parent class method also
        console.log("UI:close Browser");
    }
}

let test= new UITest();
test.setup();
test.teardown();