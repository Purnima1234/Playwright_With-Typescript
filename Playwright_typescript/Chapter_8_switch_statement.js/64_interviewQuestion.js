let fruit="Banana";

switch (fruit) {
case "Apple":
    console.log("This is an apple");
case "Banana":
    console.log("This is a banana");
case "Orange":
    console.log("This is an orange");        
default:
    console.log("Unknown fruit");

}


//no break executes all the cases after the matched case until it finds a break statement or reaches the end of the switch statement. In this example, since there are no break statements, when fruit is "Banana", it will print "This is a banana" and "This is an orange" and "Unknown fruit".