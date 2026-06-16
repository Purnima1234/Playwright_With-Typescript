function print ()  {
console.log("Normal function is called");

}

function placeholder (ClipboardItem, PramodCallback) {
console.log("Placeholder function is called");
pramodCallback();
}


//FirstWay
placeholder("Pizza", print);

//second way
placeholder("pizza", function() {
    console.log("Anonymous function is called");
});

//third way - arrow function
placeholder ("pizza", () =>{
    console.log("Arrow function is called");

});

