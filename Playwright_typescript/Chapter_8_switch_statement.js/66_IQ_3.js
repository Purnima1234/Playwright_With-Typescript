let x=10;
switch(x) {
    case 10:
        let b=20;
        console.log("b1");
        break;
    case 10:
        let ba=10;
        console.log("b2");
        break;
    default:
        console.log("default");
}

//here duplicae case is not allowed in switch statement. It will throw an error. In this example, we have two cases with the same value 10, which is not allowed. Each case in a switch statement must have a unique value.