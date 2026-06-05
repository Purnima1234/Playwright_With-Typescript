function makecounter(start=0) {
    let count=start;
    return {
        increment() {count++},
        decrement() {count--},
        get(){ return count}

    }
}

let counter=makecounter(5);
counter.increment();
counter.increment();
COUNTER.increment();
console.log(counter.get()); // 8
console.log(decrement); // ReferenceError: decrement is not defined
console.log(counter.get()); // ReferenceError: increment is not defined
