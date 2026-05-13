//Var is a funtion scoped

var a=10;
console. log(a);  //Global scope variable

function printHello(){
    console.log("Hello");

    var a=20; //local scope variable
    console.log(a);
    if (true) {
        var a=30; //var is function scoped, so it will override the local scope variable
         console.log(a);
    }
}
printHello();

