interface Executable {
    name: string;
    run(): void;
    getStatus():string;

}

class TestCase implements Executable {
    name: string;
    constructor(name: string) {
        this.name= name;
    }
    run(): void {
        console.log(`Running test case: ${this.name}`);

    }
    getStatus(): string {
        return "Pass";
    }
}

let tc= new TestCase ("Verify Login redirect");
tc.run();
