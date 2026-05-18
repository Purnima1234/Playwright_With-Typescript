// ============================================================
// 26 - All Number Types / Literals in JavaScript
// ============================================================

// JavaScript has ONE number type: "number" (64-bit floating point)
// plus the special type "bigint" for very large integers.

// ----------------------------------------------------------
// 1. INTEGER  (whole numbers)
// ----------------------------------------------------------
let intPositive = 42;
let intNegative = -15;
console.log("Integer:", intPositive, intNegative); // 42  -15

// ----------------------------------------------------------
// 2. FLOATING POINT  (decimal numbers)
// ----------------------------------------------------------
let float1 = 3.14;
let float2 = -0.99;
let float3 = 1.5e3;   // scientific notation → 1500
let float4 = 2.5e-3;  // scientific notation → 0.0025
console.log("Float:", float1, float2, float3, float4);

// ----------------------------------------------------------
// 3. HEXADECIMAL  (base 16 — prefix: 0x)
// ----------------------------------------------------------
let hex1 = 0xFF;    // 255
let hex2 = 0x1A;    // 26
let hex3 = 0x00FF;  // 255 — used often in colors / binary data
console.log("Hex:", hex1, hex2, hex3); // 255  26  255

// ----------------------------------------------------------
// 4. OCTAL  (base 8 — prefix: 0o)
// ----------------------------------------------------------
let octal1 = 0o17;   // 15
let octal2 = 0o755;  // 493 — common in Unix file permissions
console.log("Octal:", octal1, octal2); // 15  493

// ----------------------------------------------------------
// 5. BINARY  (base 2 — prefix: 0b)
// ----------------------------------------------------------
let binary1 = 0b1010;   // 10
let binary2 = 0b11111111; // 255
console.log("Binary:", binary1, binary2); // 10  255

// ----------------------------------------------------------
// 6. BIGINT  (for integers larger than Number.MAX_SAFE_INTEGER)
//    Suffix: n
// ----------------------------------------------------------
let big1 = 9007199254740991n;        // Number.MAX_SAFE_INTEGER as BigInt
let big2 = 123456789012345678901234n; // beyond normal number range
console.log("BigInt:", big1, big2);
console.log("typeof BigInt:", typeof big1); // "bigint"

// ----------------------------------------------------------
// 7. SPECIAL NUMBER VALUES
// ----------------------------------------------------------
console.log("Infinity:  ", Infinity);          //  Infinity
console.log("-Infinity: ", -Infinity);         // -Infinity
console.log("NaN:       ", NaN);               //  NaN (Not a Number)
console.log("NaN check: ", isNaN("hello"));    //  true

// ----------------------------------------------------------
// 8. NUMBER LIMITS & USEFUL CONSTANTS
// ----------------------------------------------------------
console.log("MAX_SAFE_INTEGER: ", Number.MAX_SAFE_INTEGER);  // 9007199254740991
console.log("MIN_SAFE_INTEGER: ", Number.MIN_SAFE_INTEGER);  // -9007199254740991
console.log("MAX_VALUE:        ", Number.MAX_VALUE);         // 1.7976931348623157e+308
console.log("MIN_VALUE:        ", Number.MIN_VALUE);         // 5e-324 (smallest positive)
console.log("EPSILON:          ", Number.EPSILON);           // 2.220446049250313e-16

// ----------------------------------------------------------
// 9. NUMERIC SEPARATOR  (_)  — makes large numbers readable
// ----------------------------------------------------------
let million    = 1_000_000;
let pi         = 3.141_592_653;
let hexColor   = 0xFF_EC_D8;
console.log("Numeric separator:", million, pi, hexColor);

// ----------------------------------------------------------
// 10. TYPEOF CHECK
// ----------------------------------------------------------
console.log(typeof 42);        // "number"
console.log(typeof 3.14);      // "number"
console.log(typeof 0xFF);      // "number"
console.log(typeof 0b1010);    // "number"
console.log(typeof 0o17);      // "number"
console.log(typeof Infinity);  // "number"
console.log(typeof NaN);       // "number"  ← NaN is still type "number"!
console.log(typeof 42n);       // "bigint"

// ----------------------------------------------------------
// QUICK SUMMARY
// ----------------------------------------------------------
// | Type        | Example            | Prefix/Suffix |
// |-------------|--------------------|---------------|
// | Integer     | 42                 | none          |
// | Float       | 3.14 / 1.5e3      | none          |
// | Hexadecimal | 0xFF               | 0x            |
// | Octal       | 0o17               | 0o            |
// | Binary      | 0b1010             | 0b            |
// | BigInt      | 9007199254740991n  | n             |
// | Special     | Infinity / NaN     | none          |
