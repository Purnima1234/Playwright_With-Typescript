class testcase{
    //CAB
    //consyructor
    constructor(name, status, priority){
        this.name=name;
        this.status=status;
        this.priority=priority;

    }
    //
    //behaviour

    display(){ //this is with in the class so it is a method
        console.log("Name of the testcase is", this.name);
        console.log("Status of the testcase is", this.status);
        console.log("Priority of the testcase is", this.priority);
    }

}

let loginTc=new testcase("Login page test", "Pass", "High");
let loginsignup= new testcase("SignupTC", "Fail", "Medium");

loginTc.display();
loginsignup.display();

