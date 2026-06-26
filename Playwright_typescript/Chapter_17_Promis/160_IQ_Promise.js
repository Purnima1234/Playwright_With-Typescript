Promise.resolve(1)
.then(function(value){
    console.log(value);
    return value +1;

})
.then(function(value){
    console.log(value);
    return value +=1;
})
.then(function(value) {
    console.log(value);
    return value +=1;
})
.then(function(value) {
    console.log(value);
    return value +=1;
});
