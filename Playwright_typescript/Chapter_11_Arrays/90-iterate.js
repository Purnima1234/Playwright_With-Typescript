let tests=["pass", "fail", "skip", "undefined", "null"];
    for(let i=0; i<tests.length; i++){
     console.log(tests[i]);
    }

    //for of loop
   let tests=["pass", "fail", "skip", "undefined", "null"];
    for(test of tests) {
        console.log(test);
    }

    //for each loop

    let tests=["pass", "fail", "skip", "undefined", "null"];
    tests.forEach((test, index) => {
        console.log(test, index);

    })
