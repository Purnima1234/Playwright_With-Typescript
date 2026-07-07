// ===== JAVASCRIPT ARRAY FUNCTIONS =====

let arr = [1, 2, 3, 4, 5];

// --- ADD / REMOVE ---

// push() - add to end
arr.push(6);        
arr.push(1,2,98);
console.log(arr);                // [1,2,3,4,5,6]

// pop() - remove from end
arr.pop();                          // [1,2,3,4,5]

// unshift() - add to beginning
let arr = [1, 2, 3, 4, 5];
arr.unshift(0,4,5);   
console.log(arr);                  // [0,1,2,3,4,5]

// shift() - remove from beginning
let arr = [1, 2, 3, 4, 5];
arr.shift(0,4);   
console.log(arr);                         // [1,2,3,4,5]

// splice() - add/remove at index
arr.splice(2, 1);                   // remove 1 element at index 2 → [1,2,4,5]
arr.splice(2, 0, 3);                // insert 3 at index 2 → [1,2,3,4,5]

// --- ACCESS / SEARCH ---



// indexOf() - first index of value (-1 if not found)
console.log(arr.indexOf(3));        // 2

// lastIndexOf() - last index of value
console.log([1,2,3,2].lastIndexOf(2)); // 3

// includes() - check if value exists
console.log(arr.includes(4));       // true

// find() - first element matching condition

let arr=[8,4,2,6];
console.log (arr.find(x => x > 5));

console.log(arr.find(x => x > 3)); // 4

// findIndex() - index of first matching element
console.log(arr.findIndex(x => x > 3)); // 3

// at() - element at index (supports negative)
console.log(arr.at(-1));            // 5 (last element)
let  arr = [1,2,7,8,5];
let x = arr.at(-3);
console.log(x); // 7

// --- TRANSFORM ---

// map() - new array with transformed values
let doubled = arr.map(x => x * 2); // [2,4,6,8,10]
let arr=[1,4,6,8,5];
let squared=arr.map(x => x*2);
console.log(squared);


// filter() - new array with matching values
let evens = arr.filter(x => x % 2 === 0); // [2,4]

// reduce() - reduce array to single value
let  arr = [1,2,7,8,5];
let sum = arr.reduce((acc, x) => acc + x, 0);
console.log(sum); // 23

// reduceRight() - same as reduce but right to left
let sumR = arr.reduceRight((acc, x) => acc + x, 0); // 15

// flat() - flatten nested arrays
let nested = [1, [2, 3], [4, [5]]];
console.log(nested.flat());         // [1,2,3,4,[5]]
console.log(nested.flat(2));        // [1,2,3,4,5]

// flatMap() - map then flatten one level
let fm = [1, 2, 3].flatMap(x => [x, x * 2]); // [1,2,2,4,3,6]

// --- SORT / ORDER ---

// sort() - sort in place (lexicographic by default)
let nums = [3, 1, 4, 2];
nums.sort((a, b) => a - b);         // [1,2,3,4] ascending
nums.sort((a, b) => b - a);         // [4,3,2,1] descending

// reverse() - reverse in place
arr.reverse();                      // [5,4,3,2,1]
arr.reverse();                      // back to [1,2,3,4,5]

// --- COPY / COMBINE ---

// slice() - copy portion (non-mutating)
console.log(arr.slice(1, 3));       // [2,3]

// concat() - merge arrays
let merged = arr.concat([6, 7]);    // [1,2,3,4,5,6,7]

// spread - merge arrays (modern)
let merged2 = [...arr, ...[ 6, 7]]; // [1,2,3,4,5,6,7]

// fill() - fill with a value
let filled = new Array(3).fill(0);  // [0,0,0]
arr.fill(0, 2, 4);                  // [1,2,0,0,5] (fill 0 from index 2 to 3)

// copyWithin() - copy part of array within itself
[1, 2, 3, 4, 5].copyWithin(0, 3);  // [4,5,3,4,5]

// --- ITERATE ---

// forEach() - loop (no return value)
arr.forEach(x => console.log(x));

// every() - true if all elements match
console.log(arr.every(x => x >= 0)); // true

// some() - true if any element matches
console.log(arr.some(x => x > 4)); // true

// --- CONVERT ---

// join() - array to string
console.log([1, 2, 3].join("-"));   // "1-2-3"

// toString() - array to comma-separated string
console.log([1, 2, 3].toString());  // "1,2,3"

// Array.from() - create array from iterable/string
console.log(Array.from("hello"));   // ['h','e','l','l','o']
console.log(Array.from({length: 3}, (_, i) => i)); // [0,1,2]

// Array.isArray() - check if value is an array
console.log(Array.isArray([1, 2])); // true
console.log(Array.isArray("hi"));   // false

// Array.of() - create array from arguments
console.log(Array.of(1, 2, 3));     // [1,2,3]

// --- KEYS / VALUES / ENTRIES ---

// keys() - iterator of indexes
for (let i of [10, 20].keys()) console.log(i);     // 0, 1

// values() - iterator of values
for (let v of [10, 20].values()) console.log(v);   // 10, 20

// entries() - iterator of [index, value] pairs
for (let [i, v] of [10, 20].entries()) console.log(i, v); // 0 10, 1 20


//move all zeros to end
let x= [0,1,2,0,3,4,0,5];
let nonZero= x.filter(item => item!==0);
let zeros= x.filter(item => item===0);
let result=[...nonZero,...zeros];
console.log(result); // [1,2,3,4,5,0,0,0]