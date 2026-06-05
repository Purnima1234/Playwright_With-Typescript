//Rest of Param

function loginResult(suitName, ...results) {
    console.log(suitName);
    console.log(results);

}

loginResult("Logintest", "Passed", "Failed", "Skipped");
loginResult("Test Suite 1", 1,2,4,5,6,7,8,9,10);


//... this spread, can give any number of arguments to the function and it will be stored in the form of an array. It is also used to spread the elements of an array into individual elements. It is also used to spread the properties of an object into individual properties.
