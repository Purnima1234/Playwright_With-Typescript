// ============================================================
// 23 - null vs undefined in JavaScript
// ============================================================

// ----------------------------------------------------------
// UNDEFINED
// ----------------------------------------------------------
// A variable is "undefined" when it has been DECLARED
// but has NOT been assigned a value yet.
// JavaScript sets it automatically.

let myVariable;
console.log(myVariable);        // undefined  (no value given)
console.log(typeof myVariable); // "undefined"

function greet(name) {
    console.log(name); // undefined if no argument is passed
}
greet(); // undefined — we forgot to pass a name

// ----------------------------------------------------------
// NULL
// ----------------------------------------------------------
// "null" means the variable EXISTS and has been INTENTIONALLY
// set to "no value" / "empty" by the developer.
// You have to set null yourself — JS never does it for you.

let myNull = null;
console.log(myNull);        // null
console.log(typeof myNull); // "object"  ← known JS quirk!

// ----------------------------------------------------------
// COMPARISON
// ----------------------------------------------------------

console.log(null == undefined);  // true  (loose equality — both mean "nothing")
console.log(null === undefined); // false (strict equality — different types)

// ----------------------------------------------------------
// SIMPLE ANALOGY
// ----------------------------------------------------------
// Think of a glass:
//   undefined = the glass does not exist yet / was never filled
//   null      = the glass exists but is intentionally EMPTY

// ----------------------------------------------------------
// QUICK SUMMARY
// ----------------------------------------------------------
// | Feature          | undefined              | null                      |
// |------------------|------------------------|---------------------------|
// | Set by           | JavaScript (automatic) | Developer (intentional)   |
// | Meaning          | Variable not assigned  | Intentionally empty/reset |
// | typeof           | "undefined"            | "object" (JS quirk)       |
// | == (loose)       | null == undefined → true                           |
// | === (strict)     | null === undefined → false                         |
