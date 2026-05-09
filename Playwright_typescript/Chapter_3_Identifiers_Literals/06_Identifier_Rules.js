// ============================================
// JAVASCRIPT IDENTIFIER RULES WITH EXAMPLES
// ============================================

// Rule 1: Must start with a letter, underscore (_), or dollar sign ($)
let name = "Alice";       // starts with a letter ✓
let _name = "Bob";        // starts with underscore ✓
let $name = "Charlie";    // starts with dollar sign ✓

// Rule 2: Cannot start with a digit
// let 1name = "Invalid"; // ✗ SyntaxError
let name1 = "Valid";      // digit in middle is fine ✓

// Rule 3: Can contain letters, digits, _ or $
let my_var_1 = 100;       // letters, digits, underscore ✓
let $total$amount = 500;  // dollar signs allowed ✓
let camelCase1 = true;    // mix of letters and digit ✓

// Rule 4: Cannot use reserved keywords as identifiers
// let if = 5;       // ✗ SyntaxError - 'if' is a keyword
// let return = 10;  // ✗ SyntaxError - 'return' is a keyword
let ifCondition = 5;      // keyword-based name is fine ✓

// Rule 5: Case-sensitive
let myVar = "Hello";
let myvar = "World";
let MYVAR = "Test";
console.log(myVar);  // Hello
console.log(myvar);  // World
console.log(MYVAR);  // Test

// Rule 6: No spaces allowed
// let my var = 10;  // ✗ SyntaxError - spaces not allowed
let myVariable = 10;      // use camelCase instead ✓
let my_variable = 20;     // or underscore ✓

// Rule 7: Unicode characters are allowed
let café = "coffee";      // unicode letter ✓
let π = 3.14159;          // greek letter ✓
console.log(café);        // coffee
console.log(π);           // 3.14159