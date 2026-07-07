function getString(name:string):string {
    return name;
}

getString("Hello, TypeScript!");

function getFirstResult<T>(results:T[]) {
    return result[0];

}

let firstCode= getFirstResult<string>(["apple", "banana", "cherry"]);
let firstNumber= getFirstResult<number>([1, 2, 3, 4, 5]);

console.log(firstCode);
console.log(firstNumber);

