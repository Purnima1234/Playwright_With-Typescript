function logged(originalMethod: any, context: any): any {
    return function(this: any, ...args: any[]) {
        console.log("called");
        return originalMethod.call(this, ...args);
    }
}

class Greeter {
    @logged
    greet(name: string) {
        console.log(`Hello, ${name}!`);
    }
}

const greeter = new Greeter();
greeter.greet("World");