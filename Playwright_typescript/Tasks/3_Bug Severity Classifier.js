//Problem: Given a bug's impact score (1–10), classify the severity.

let Severity=8;
switch(Severity) {
    case critical(Severity>=9 && Severity<=10):;
        console.log("Output: Severity: Critical — Block release");
        break;
    case critical(Severity>=7 && severity <=8):
        console.log("Output: Severity: High");
        break;
    case(Severity>=4 && severity<=6):
        console.log("output: Severity: Medium");
        break;
    case(Severity>=1 && Severity<=3):
        console.log("Output: Severity: Low");
        break;
    default:
        console.log("Invalid score");

}