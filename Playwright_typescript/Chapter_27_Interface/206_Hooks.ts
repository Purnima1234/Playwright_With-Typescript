interface TestHook {
    (testName: string): void;

}

let beforeEachHook: TestHook = (testName: string): void => {
    console.log('Before each test hook executed for test: ', testName);
}
let afterEachHook: TestHook=(testName: string): void => {
    console.log('After each test hook executed for test: ', testName);
}

beforeEachHook("Test 1");
afterEachHook("Test 1");
