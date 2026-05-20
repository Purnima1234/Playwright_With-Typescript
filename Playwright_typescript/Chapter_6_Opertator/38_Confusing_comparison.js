// ============================================================
// 38 - Confusing Comparisons: == (Loose) vs === (Strict) in JS
// ============================================================

// == performs TYPE COERCION before comparing
// === does NOT coerce types — value AND type must match

// ------------------------------------------------------------
// 1. Number vs String
// ------------------------------------------------------------
console.log("--- Number vs String ---");
console.log(0 == "0");      // true  → "0" is coerced to number 0
console.log(0 === "0");     // false → different types (number vs string)

console.log(1 == "1");      // true  → "1" coerced to 1
console.log(1 === "1");     // false

// ------------------------------------------------------------
// 2. Empty String & Zero
// ------------------------------------------------------------
console.log("\n--- Empty String & Zero ---");
console.log(0 == "");       // true  → "" coerced to 0
console.log(0 === "");      // false

console.log(0 == false);    // true  → false coerced to 0
console.log(0 === false);   // false → different types

console.log("" == false);   // true  → both coerce to 0
console.log("" === false);  // false

// ------------------------------------------------------------
// 3. null vs undefined
// ------------------------------------------------------------
console.log("\n--- null vs undefined ---");
console.log(null == undefined);     // true  → special JS rule
console.log(null === undefined);    // false → different types

console.log(null == 0);             // false → null only == undefined
console.log(null == false);         // false
console.log(undefined == false);    // false

// ------------------------------------------------------------
// 4. null / undefined vs other falsy values
// ------------------------------------------------------------
console.log("\n--- null / undefined coercion ---");
console.log(null == "");            // false
console.log(undefined == "");      // false
console.log(null == null);         // true
console.log(undefined == undefined); // true

// ------------------------------------------------------------
// 5. Boolean coercion surprises
// ------------------------------------------------------------
console.log("\n--- Boolean coercion ---");
console.log(true == 1);             // true  → true coerced to 1
console.log(true === 1);            // false
console.log(false == 0);            // true  → false coerced to 0
console.log(false === 0);           // false
console.log(true == "1");           // true  → true→1, "1"→1
console.log(true == "true");        // false → true→1, "true"→NaN

// ------------------------------------------------------------
// 6. NaN — Not equal to anything, even itself
// ------------------------------------------------------------
console.log("\n--- NaN comparisons ---");
console.log(NaN == NaN);            // false → NaN is never equal to NaN
console.log(NaN === NaN);           // false
console.log(NaN != NaN);            // true  ← use this to detect NaN
console.log(isNaN(NaN));            // true  ← preferred NaN check
console.log(Number.isNaN(NaN));     // true  ← safest NaN check

// ------------------------------------------------------------
// 7. Object / Array coercion
// ------------------------------------------------------------
console.log("\n--- Object / Array coercion ---");
console.log([] == false);           // true  → [] → "" → 0, false → 0
console.log([] === false);          // false
console.log([] == 0);               // true  → [] → "" → 0
console.log([0] == 0);              // true  → [0] → "0" → 0
console.log(["0"] == false);        // true  → ["0"]→"0"→0, false→0
console.log([] == ![]);             // true  → ![] is false → 0; [] → 0

// ------------------------------------------------------------
// 8. Object reference equality
// ------------------------------------------------------------
console.log("\n--- Object reference equality ---");
let a = { x: 1 };
let b = { x: 1 };
let c = a;

console.log(a == b);    // false → different object references
console.log(a === b);   // false → different object references
console.log(a == c);    // true  → same reference
console.log(a === c);   // true  → same reference

// ------------------------------------------------------------
// 9. String object vs string primitive
// ------------------------------------------------------------
console.log("\n--- String object vs primitive ---");
let strPrimitive = "hello";
let strObject    = new String("hello");

console.log(strPrimitive == strObject);     // true  → object coerced to primitive
console.log(strPrimitive === strObject);    // false → different types

// ------------------------------------------------------------
// 10. Quick Reference Summary
// ------------------------------------------------------------
/*
    CASE                    ==          ===
    ─────────────────────────────────────────
    0    ==  "0"            true        false
    0    ==  ""             true        false
    0    ==  false          true        false
    ""   ==  false          true        false
    null == undefined       true        false
    null == 0               false       false
    NaN  == NaN             false       false
    []   == false           true        false
    []   == 0               true        false
    []   == ![]             true        false

    RULE OF THUMB:
    → Always use === to avoid unexpected type coercion bugs.
    → Use == only when you intentionally want null/undefined equality.
*/
