function cafe(item, callWhenTableisReady) {
    console.log("finding...1");
    
}



function callWhenTableisReady () {
    console.log("98998889");

}

cafe ("Burger", callWhenTableisReady);

cafe("pizza", function() {
    console.log("Anonymous function is called");

})

cafe ("momos", ()=> {
    console.log("Arrow function is called");
})