//accessing and modifying
let statuses= ["passed", "failed", "skipped"];

console .log (statuses[0]);
 //We also go in reverse brought from python

console.log(statuses.at(-1)); // Output: "skipped" (last element)
console.log(statuses.at(-2)); // Output: "failed" (second-to-last element)
console.log(statuses.at(-3)); // Output: "passed" (third-to-last element) 
 //-4 will be undefined
  
//while using reverse we will use at method to access elements from the end of the array, as it provides a more intuitive way to access elements in reverse order without needing to calculate the index based on the array's length.

 // Modifying an array element
statuses[1] = "in progress"; // Changes "failed" to "in progress"
console.log(statuses); // Output: ["passed", "in progress", "skipped"]  