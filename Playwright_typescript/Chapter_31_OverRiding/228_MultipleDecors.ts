function first(method:any) {
    return function() {
        console.log("first");
        return method();

    }
}

function second(method:any) {
    return function() {
        console.log("second");
        return method();
    }
}

class Dog {
    @first
    @second
    bark() {
        return "Woof!";
    }
}

new Dog().bark();
