(function ()  {
    console.log("Hi");

})();


// this funtion is used if we want ot revoke the function after its execution. It is also used to avoid polluting the global scope with variables and functions that are only needed within a specific block of code.

//arrow function with IIEF

(() => {
    console.log("Hi from arrow function");
})();
//Here in the arraow funtion no need to write function keyword and also no need to write return keyword if we have only one statement in the function.
