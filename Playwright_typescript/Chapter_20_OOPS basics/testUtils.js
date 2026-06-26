export let Base_URL="https://www.app.vwo.com";

//here we will add export before let to make it available for other files to use it. We can also use export default to export a single value from a module.

export function formatTestName(testname){
    return testname.toUpperCase();
}
let testname="this is a testname";
let formattedname= formatTestName(testname);
console.log(formattedname);
