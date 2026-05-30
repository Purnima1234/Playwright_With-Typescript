let browser= ["Chrome", "Opera", "firefox", "edge", "safari"];

console.log(browser.length);

//remove safari from the array

browser.pop("safari");

console.log(browser); // Output: ["Chrome", "Opera", "firefox", "edge"]

//remove edge from the array

browser.splice(3,1); //here 3 is index of edge and 1 means remove 1 element from the array