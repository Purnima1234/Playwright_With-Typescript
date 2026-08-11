function Log(originalMethod: any, context: ClassMethodDecoratorContext): any {
    const methodName = String(context.name);
    return function(this: any, ...args: any[]) {
        console.log(`Calling ${methodName} with arguments: ${JSON.stringify(args)}`);
        const result = originalMethod.apply(this, args);
        console.log(`Result: ${result}`);
        return result;
    }
}

class Calculator {
    @Log
    add(a:number, b:number) : number {
        return a+b;
    }
}

const calculator = new Calculator();
calculator.add(2,3);
