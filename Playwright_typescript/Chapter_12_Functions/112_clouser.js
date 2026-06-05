function outerFunction() {
    let message="hello";
    console.log("outer called"); // [Function: outerFunction]
    function innerFunction() {
        console.log(message); // hello
    }
    innerFunction();    
}

outerFunction();


