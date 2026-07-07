# JavaScript Array Functions — Interview Cheat Sheet

---

## 1. ADD / REMOVE (Mutating)

| Method | Description | Example | Returns |
|---|---|---|---|
| `push()` | Add to **end** | `arr.push(6)` | New length |
| `pop()` | Remove from **end** | `arr.pop()` | Removed element |
| `unshift()` | Add to **beginning** | `arr.unshift(0)` | New length |
| `shift()` | Remove from **beginning** | `arr.shift()` | Removed element |
| `splice()` | Add/remove at any index | `arr.splice(2, 1, 99)` | Removed elements array |

```js
let arr = [1, 2, 3, 4, 5];

arr.push(6);            // [1,2,3,4,5,6]
arr.pop();              // [1,2,3,4,5]
arr.unshift(0);         // [0,1,2,3,4,5]
arr.shift();            // [1,2,3,4,5]
arr.splice(2, 1);       // removes index 2 → [1,2,4,5]
arr.splice(2, 0, 3);    // insert 3 at index 2 → [1,2,3,4,5]
```

---

## 2. ACCESS / SEARCH

| Method | Description | Example | Returns |
|---|---|---|---|
| `indexOf()` | First index of value | `arr.indexOf(3)` | Index or `-1` |
| `lastIndexOf()` | Last index of value | `arr.lastIndexOf(2)` | Index or `-1` |
| `includes()` | Check if value exists | `arr.includes(4)` | `true` / `false` |
| `find()` | First element matching condition | `arr.find(x => x > 3)` | Element or `undefined` |
| `findIndex()` | Index of first matching element | `arr.findIndex(x => x > 3)` | Index or `-1` |
| `at()` | Element at index (supports negative) | `arr.at(-1)` | Element |

```js
let arr = [1, 2, 3, 4, 5];

arr.indexOf(3);             // 2
arr.lastIndexOf(2);         // 1
arr.includes(4);            // true
arr.find(x => x > 3);      // 4
arr.findIndex(x => x > 3); // 3
arr.at(-1);                 // 5  (last element)
arr.at(-2);                 // 4
```

---

## 3. TRANSFORM (Non-Mutating — returns new array)

| Method | Description | Example |
|---|---|---|
| `map()` | Transform each element | `arr.map(x => x * 2)` |
| `filter()` | Keep elements matching condition | `arr.filter(x => x % 2 === 0)` |
| `reduce()` | Accumulate to single value (left → right) | `arr.reduce((acc, x) => acc + x, 0)` |
| `reduceRight()` | Accumulate to single value (right → left) | `arr.reduceRight((acc, x) => acc + x, 0)` |
| `flat()` | Flatten nested arrays | `arr.flat(2)` |
| `flatMap()` | Map then flatten one level | `arr.flatMap(x => [x, x*2])` |

```js
let arr = [1, 2, 3, 4, 5];

arr.map(x => x * 2);                    // [2,4,6,8,10]
arr.filter(x => x % 2 === 0);           // [2,4]
arr.reduce((acc, x) => acc + x, 0);     // 15
arr.reduceRight((acc, x) => acc + x, 0); // 15

let nested = [1, [2, 3], [4, [5]]];
nested.flat();      // [1,2,3,4,[5]]
nested.flat(2);     // [1,2,3,4,5]

[1,2,3].flatMap(x => [x, x * 2]);       // [1,2,2,4,3,6]
```

---

## 4. SORT / ORDER (Mutating)

| Method | Description | Example |
|---|---|---|
| `sort()` | Sort in-place (lexicographic by default) | `arr.sort((a, b) => a - b)` |
| `reverse()` | Reverse in-place | `arr.reverse()` |

```js
let nums = [3, 1, 4, 2];

nums.sort((a, b) => a - b);  // ascending  → [1,2,3,4]
nums.sort((a, b) => b - a);  // descending → [4,3,2,1]

let arr = [1, 2, 3, 4, 5];
arr.reverse();               // [5,4,3,2,1]
```

> **Interview Tip:** Without a comparator, `sort()` converts to strings — `[10, 9, 2].sort()` gives `[10, 2, 9]`. Always pass a comparator for numbers.

---

## 5. COPY / COMBINE

| Method | Description | Example | Mutates? |
|---|---|---|---|
| `slice()` | Copy a portion | `arr.slice(1, 3)` | No |
| `concat()` | Merge arrays | `arr.concat([6,7])` | No |
| `fill()` | Fill with a value | `arr.fill(0, 2, 4)` | Yes |
| `copyWithin()` | Copy part of array within itself | `arr.copyWithin(0, 3)` | Yes |
| Spread `...` | Merge/copy arrays | `[...arr, ...arr2]` | No |

```js
let arr = [1, 2, 3, 4, 5];

arr.slice(1, 3);                 // [2,3]  (non-mutating)
arr.concat([6, 7]);              // [1,2,3,4,5,6,7]
[...arr, 6, 7];                  // [1,2,3,4,5,6,7]

new Array(3).fill(0);            // [0,0,0]
arr.fill(0, 2, 4);               // [1,2,0,0,5]

[1,2,3,4,5].copyWithin(0, 3);   // [4,5,3,4,5]
```

---

## 6. ITERATE

| Method | Description | Returns |
|---|---|---|
| `forEach()` | Loop through elements | `undefined` |
| `every()` | True if **all** match condition | `boolean` |
| `some()` | True if **any** matches condition | `boolean` |

```js
let arr = [1, 2, 3, 4, 5];

arr.forEach(x => console.log(x));   // prints each element
arr.every(x => x >= 0);             // true
arr.some(x => x > 4);               // true
arr.some(x => x > 10);              // false
```

> **Interview Tip:** `forEach` cannot be stopped (no `break`). Use a `for...of` loop if you need early exit.

---

## 7. CONVERT

| Method | Description | Example |
|---|---|---|
| `join()` | Array → string with separator | `[1,2,3].join("-")` → `"1-2-3"` |
| `toString()` | Array → comma-separated string | `[1,2,3].toString()` → `"1,2,3"` |
| `Array.from()` | Create array from iterable | `Array.from("hello")` → `['h','e','l','l','o']` |
| `Array.isArray()` | Check if value is an array | `Array.isArray([1,2])` → `true` |
| `Array.of()` | Create array from arguments | `Array.of(1,2,3)` → `[1,2,3]` |

```js
[1, 2, 3].join("-");                        // "1-2-3"
[1, 2, 3].toString();                       // "1,2,3"
Array.from("hello");                         // ['h','e','l','l','o']
Array.from({length: 3}, (_, i) => i);       // [0,1,2]
Array.isArray([1, 2]);                       // true
Array.isArray("hi");                         // false
Array.of(1, 2, 3);                           // [1,2,3]
```

---

## 8. KEYS / VALUES / ENTRIES

| Method | Description |
|---|---|
| `keys()` | Iterator of indexes |
| `values()` | Iterator of values |
| `entries()` | Iterator of `[index, value]` pairs |

```js
let arr = [10, 20, 30];

for (let i of arr.keys())         console.log(i);      // 0, 1, 2
for (let v of arr.values())       console.log(v);      // 10, 20, 30
for (let [i, v] of arr.entries()) console.log(i, v);  // 0 10 | 1 20 | 2 30
```

---

## 9. QUICK REFERENCE — MUTATING vs NON-MUTATING

| Mutates Original | Does NOT Mutate |
|---|---|
| `push`, `pop` | `map`, `filter` |
| `shift`, `unshift` | `reduce`, `reduceRight` |
| `splice` | `slice`, `concat` |
| `sort`, `reverse` | `flat`, `flatMap` |
| `fill`, `copyWithin` | `find`, `findIndex` |

---

## 10. COMMON INTERVIEW QUESTIONS

### Q1. Remove duplicates from an array
```js
let arr = [1, 2, 2, 3, 3, 4];
let unique = [...new Set(arr)];      // [1,2,3,4]
// or
let unique2 = arr.filter((v, i) => arr.indexOf(v) === i);
```

### Q2. Flatten a deeply nested array
```js
let nested = [1, [2, [3, [4]]]];
nested.flat(Infinity);               // [1,2,3,4]
```

### Q3. Sum of all elements
```js
let sum = [1, 2, 3, 4, 5].reduce((acc, x) => acc + x, 0); // 15
```

### Q4. Find max/min value
```js
let arr = [3, 1, 4, 1, 5, 9];
Math.max(...arr);   // 9
Math.min(...arr);   // 1
```

### Q5. Reverse an array without mutating
```js
let arr = [1, 2, 3, 4, 5];
let reversed = [...arr].reverse();   // [5,4,3,2,1] — original untouched
```

### Q6. Check if all elements are positive
```js
[1, 2, 3].every(x => x > 0);        // true
[-1, 2, 3].every(x => x > 0);       // false
```

### Q7. Group elements using reduce
```js
let words = ["one", "two", "three", "four"];
let grouped = words.reduce((acc, w) => {
  let len = w.length;
  acc[len] = acc[len] ? [...acc[len], w] : [w];
  return acc;
}, {});
// { 3: ['one','two'], 5: ['three'], 4: ['four'] }
```

### Q8. Chunk an array into groups
```js
function chunk(arr, size) {
  return arr.reduce((acc, _, i) =>
    i % size === 0 ? [...acc, arr.slice(i, i + size)] : acc, []);
}
chunk([1,2,3,4,5], 2);  // [[1,2],[3,4],[5]]
```

### Q9. Difference between `map` and `forEach`
| | `map` | `forEach` |
|---|---|---|
| Returns | New array | `undefined` |
| Use when | You need transformed array | You just need to loop |
| Chainable | Yes | No |

### Q10. What does `splice` vs `slice` do?
| | `splice` | `slice` |
|---|---|---|
| Mutates | Yes | No |
| Returns | Removed elements | New sub-array copy |
| Use | Remove/insert in place | Extract portion |

---

## 11. FULL METHOD SUMMARY TABLE

| Method | Category | Mutates | Returns |
|---|---|---|---|
| `push()` | Add/Remove | ✅ | New length |
| `pop()` | Add/Remove | ✅ | Removed element |
| `unshift()` | Add/Remove | ✅ | New length |
| `shift()` | Add/Remove | ✅ | Removed element |
| `splice()` | Add/Remove | ✅ | Removed elements |
| `indexOf()` | Search | ❌ | Index / `-1` |
| `lastIndexOf()` | Search | ❌ | Index / `-1` |
| `includes()` | Search | ❌ | boolean |
| `find()` | Search | ❌ | Element / `undefined` |
| `findIndex()` | Search | ❌ | Index / `-1` |
| `at()` | Access | ❌ | Element |
| `map()` | Transform | ❌ | New array |
| `filter()` | Transform | ❌ | New array |
| `reduce()` | Transform | ❌ | Any value |
| `reduceRight()` | Transform | ❌ | Any value |
| `flat()` | Transform | ❌ | New array |
| `flatMap()` | Transform | ❌ | New array |
| `sort()` | Order | ✅ | Sorted array |
| `reverse()` | Order | ✅ | Reversed array |
| `slice()` | Copy | ❌ | New array |
| `concat()` | Combine | ❌ | New array |
| `fill()` | Copy | ✅ | Modified array |
| `copyWithin()` | Copy | ✅ | Modified array |
| `forEach()` | Iterate | ❌ | `undefined` |
| `every()` | Iterate | ❌ | boolean |
| `some()` | Iterate | ❌ | boolean |
| `join()` | Convert | ❌ | string |
| `toString()` | Convert | ❌ | string |
| `Array.from()` | Create | ❌ | New array |
| `Array.isArray()` | Check | ❌ | boolean |
| `Array.of()` | Create | ❌ | New array |
| `keys()` | Iterate | ❌ | Iterator |
| `values()` | Iterate | ❌ | Iterator |
| `entries()` | Iterate | ❌ | Iterator |
