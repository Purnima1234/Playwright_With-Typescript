// ╔══════════════════════════════════════════════════════════════════════════════════╗
// ║                     JAVASCRIPT STRING METHODS - CHEAT SHEET                    ║
// ╚══════════════════════════════════════════════════════════════════════════════════╝

let s = "Hello World";

// ┌─────────────────────────┬──────────────────────────────────────────────────────┐
// │      METHOD             │  EXAMPLE & OUTPUT                                    │
// ├─────────────────────────┼──────────────────────────────────────────────────────┤
// │ CASE                                                                            │
// ├─────────────────────────┼──────────────────────────────────────────────────────┤
console.log(s.toUpperCase());               // "HELLO WORLD"
console.log(s.toLowerCase());               // "hello world"
// ├─────────────────────────┼──────────────────────────────────────────────────────┤
// │ LENGTH                                                                          │
// ├─────────────────────────┼──────────────────────────────────────────────────────┤
console.log(s.length);                      // 11  (property, not a method)
// ├─────────────────────────┼──────────────────────────────────────────────────────┤
// │ ACCESS CHARACTERS                                                               │
// ├─────────────────────────┼──────────────────────────────────────────────────────┤
console.log(s.charAt(0));                   // "H"
console.log(s.charCodeAt(0));               // 72  (Unicode code of 'H')
console.log(s[0]);                          // "H"  (bracket notation)
console.log(s.at(-1));                      // "d"  (supports negative index)
// ├─────────────────────────┼──────────────────────────────────────────────────────┤
// │ SEARCH / CHECK                                                                  │
// ├─────────────────────────┼──────────────────────────────────────────────────────┤
console.log(s.indexOf("o"));                // 4   (first occurrence index)
console.log(s.lastIndexOf("o"));            // 7   (last occurrence index)
console.log(s.includes("World"));           // true
console.log(s.startsWith("Hello"));         // true
console.log(s.endsWith("World"));           // true
console.log(s.search(/world/i));            // 6   (regex search → returns index)
console.log(s.match(/o/g));                 // ["o","o"]  (all regex matches)
// ├─────────────────────────┼──────────────────────────────────────────────────────┤
// │ EXTRACT / SLICE                                                                 │
// ├─────────────────────────┼──────────────────────────────────────────────────────┤
console.log(s.slice(0, 5));                 // "Hello"   (start, end — supports negative)
console.log(s.substring(6, 11));            // "World"   (start, end — no negatives)
// ├─────────────────────────┼──────────────────────────────────────────────────────┤
// │ REPLACE                                                                         │
// ├─────────────────────────┼──────────────────────────────────────────────────────┤
console.log(s.replace("World", "JS"));      // "Hello JS"    (first match only)
console.log(s.replaceAll("l", "L"));        // "HeLLo WorLd" (all matches)
// ├─────────────────────────┼──────────────────────────────────────────────────────┤
// │ SPLIT                                                                           │
// ├─────────────────────────┼──────────────────────────────────────────────────────┤
console.log(s.split(" "));                  // ["Hello", "World"]
console.log(s.split(""));                   // ["H","e","l","l","o"," ","W","o","r","l","d"]
// ├─────────────────────────┼──────────────────────────────────────────────────────┤
// │ TRIM (remove whitespace)                                                        │
// ├─────────────────────────┼──────────────────────────────────────────────────────┤
console.log("  hi  ".trim());               // "hi"
console.log("  hi  ".trimStart());          // "hi  "  (removes leading spaces)
console.log("  hi  ".trimEnd());            // "  hi"  (removes trailing spaces)
// ├─────────────────────────┼──────────────────────────────────────────────────────┤
// │ PAD                                                                             │
// ├─────────────────────────┼──────────────────────────────────────────────────────┤
console.log("5".padStart(3, "0"));          // "005"  (pad left to length 3)
console.log("5".padEnd(3, "0"));            // "500"  (pad right to length 3)
// ├─────────────────────────┼──────────────────────────────────────────────────────┤
// │ REPEAT / CONCATENATE                                                            │
// ├─────────────────────────┼──────────────────────────────────────────────────────┤
console.log("ha".repeat(3));                // "hahaha"
console.log("Hello".concat(" ", "World"));  // "Hello World"
// ├─────────────────────────┼──────────────────────────────────────────────────────┤
// │ CONVERT TO / FROM STRING                                                        │
// ├─────────────────────────┼──────────────────────────────────────────────────────┤
console.log((42).toString());               // "42"
console.log(String(true));                  // "true"
console.log(String(null));                  // "null"
console.log(String.fromCharCode(72));       // "H"  (Unicode → character)
console.log(`Value is ${42}`);              // "Value is 42"  (template literal)
// ├─────────────────────────┼──────────────────────────────────────────────────────┤
// │ COMPARE / MISC                                                                  │
// ├─────────────────────────┼──────────────────────────────────────────────────────┤
console.log("apple".localeCompare("banana")); // -1  (less), 0 (equal), 1 (greater)
// └─────────────────────────┴──────────────────────────────────────────────────────┘
