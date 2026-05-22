//Problem: Given the percentage of test cases passed in a CI build, report build health.

let buildHEalth=86;

if(buildHEalth ===100) {
    console.log("Green Build");

}
else if (buildHEalth>=90 && buildHEalth<=99){
    console.log("Output: 🟡 Stable — Investigate failures")

}

else if(buildHEalth>=70 && buildHEalth<=89){
    console.log("Output: 🟠 Unstable — Investigate failures");
}
else {
    console.log("Output: 🔴 Broken Build — Block deployment");

}

