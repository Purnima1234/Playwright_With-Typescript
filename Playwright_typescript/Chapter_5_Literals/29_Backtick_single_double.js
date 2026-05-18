// ============================================================
// 29 - Backtick vs Single Quote vs Double Quote
// ============================================================

// ----------------------------------------------------------
// SINGLE QUOTE  '...'
// ----------------------------------------------------------
let single = 'Hello World';
console.log(single); // Hello World

// ----------------------------------------------------------
// DOUBLE QUOTE  "..."
// ----------------------------------------------------------
let double = "Hello World";
console.log(double); // Hello World

// Single and Double are IDENTICAL in behaviour.
// Just pick one style and stay consistent.

// ----------------------------------------------------------
// BACKTICK  `...`  (Template Literal)
// ----------------------------------------------------------
let name = "Alice";
let age  = 25;

// 1. Embed variables directly with ${ }  — no + needed
let backtick = `My name is ${name} and I am ${age} years old.`;
console.log(backtick); // My name is Alice and I am 25 years old.

// 2. Multi-line without \n
let multiLine = `Line 1
Line 2
Line 3`;
console.log(multiLine);

// ----------------------------------------------------------
// QUICK COMPARISON
// ----------------------------------------------------------
// | Feature               | '...'  | "..."  | `...`  |
// |-----------------------|--------|--------|--------|
// | Basic string          |  YES   |  YES   |  YES   |
// | Embed variables ${}   |  NO    |  NO    |  YES   |
// | Multi-line            |  NO    |  NO    |  YES   |
// | Any difference?       | None   | None   | Powerful |
