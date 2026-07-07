interface Calculator {
    add(a:number, b:number): number;
    substract(a:number, b:number): number;
    Multiply(a:number, b:number): number;

}

const calc: Calculator={
    add: (a,b) => a+b,
    substract: (a,b) => a-b,
    Multiply: (a,b) => a*b,

}