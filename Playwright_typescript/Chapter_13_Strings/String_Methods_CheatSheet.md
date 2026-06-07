# JavaScript String Methods — Cheat Sheet

```js
let s = "Hello World";
```

---

## Case

| Method | Example | Output |
|---|---|---|
| `toUpperCase()` | `s.toUpperCase()` | `"HELLO WORLD"` |
| `toLowerCase()` | `s.toLowerCase()` | `"hello world"` |
| `toLocaleUpperCase()` | `s.toLocaleUpperCase()` | `"HELLO WORLD"` (locale-aware) |
| `toLocaleLowerCase()` | `s.toLocaleLowerCase()` | `"hello world"` (locale-aware) |

---

## Length

| Property | Example | Output |
|---|---|---|
| `length` | `s.length` | `11` |

---

## Access Characters

| Method | Example | Output |
|---|---|---|
| `charAt(i)` | `s.charAt(0)` | `"H"` |
| `charCodeAt(i)` | `s.charCodeAt(0)` | `72` (UTF-16 code of `H`) |
| `codePointAt(i)` | `s.codePointAt(0)` | `72` (full Unicode code point) |
| `[i]` | `s[0]` | `"H"` (bracket notation) |
| `at(i)` | `s.at(-1)` | `"d"` (supports negative index) |

---

## Search / Check

| Method | Example | Output |
|---|---|---|
| `indexOf(val)` | `s.indexOf("o")` | `4` (first occurrence, `-1` if not found) |
| `lastIndexOf(val)` | `s.lastIndexOf("o")` | `7` (last occurrence, `-1` if not found) |
| `includes(val)` | `s.includes("World")` | `true` |
| `startsWith(val)` | `s.startsWith("Hello")` | `true` |
| `endsWith(val)` | `s.endsWith("World")` | `true` |
| `search(regex)` | `s.search(/world/i)` | `6` (index of match, `-1` if not found) |
| `match(regex)` | `s.match(/o/g)` | `["o", "o"]` (all matches or `null`) |
| `matchAll(regex)` | `[...s.matchAll(/o/g)]` | array of all match objects (needs `g` flag) |

---

## Extract / Slice

| Method | Example | Output |
|---|---|---|
| `slice(start, end)` | `s.slice(0, 5)` | `"Hello"` (supports negative index) |
| `substring(start, end)` | `s.substring(6, 11)` | `"World"` (no negatives) |
| `substr(start, length)` | `s.substr(6, 5)` | `"World"` ⚠️ deprecated |

---

## Replace

| Method | Example | Output |
|---|---|---|
| `replace(old, new)` | `s.replace("World", "JS")` | `"Hello JS"` (first match only) |
| `replaceAll(old, new)` | `s.replaceAll("l", "L")` | `"HeLLo WorLd"` (all matches) |

---

## Split

| Method | Example | Output |
|---|---|---|
| `split(sep)` | `s.split(" ")` | `["Hello", "World"]` |
| `split("")` | `s.split("")` | `["H","e","l","l","o"," ","W","o","r","l","d"]` |
| `split(sep, limit)` | `s.split(" ", 1)` | `["Hello"]` (limits number of results) |

---

## Trim (Remove Whitespace)

| Method | Example | Output |
|---|---|---|
| `trim()` | `"  hi  ".trim()` | `"hi"` |
| `trimStart()` | `"  hi  ".trimStart()` | `"hi  "` (removes leading spaces) |
| `trimEnd()` | `"  hi  ".trimEnd()` | `"  hi"` (removes trailing spaces) |

---

## Pad

| Method | Example | Output |
|---|---|---|
| `padStart(len, char)` | `"5".padStart(3, "0")` | `"005"` |
| `padEnd(len, char)` | `"5".padEnd(3, "0")` | `"500"` |

---

## Repeat / Concatenate

| Method | Example | Output |
|---|---|---|
| `repeat(n)` | `"ha".repeat(3)` | `"hahaha"` |
| `concat(...str)` | `"Hello".concat(" ", "World")` | `"Hello World"` |

---

## Convert To / From String

| Method | Example | Output |
|---|---|---|
| `toString()` | `(42).toString()` | `"42"` |
| `valueOf()` | `"hi".valueOf()` | `"hi"` (returns primitive value) |
| `String(val)` | `String(true)` | `"true"` |
| `String(val)` | `String(null)` | `"null"` |
| `String.fromCharCode(n)` | `String.fromCharCode(72)` | `"H"` (UTF-16 code → char) |
| `String.fromCodePoint(n)` | `String.fromCodePoint(128514)` | `"😂"` (full Unicode → char) |
| Template literal | `` `Value is ${42}` `` | `"Value is 42"` |

---

## Normalize (Unicode)

| Method | Example | Output |
|---|---|---|
| `normalize()` | `"\u00e9".normalize("NFC")` | `"é"` (composed form) |
| `normalize("NFD")` | `"\u00e9".normalize("NFD")` | `"é"` (decomposed form) |

---

## Well-Formed (ES2024)

| Method | Example | Output |
|---|---|---|
| `isWellFormed()` | `"hello".isWellFormed()` | `true` (no lone surrogates) |
| `toWellFormed()` | `"\uD800".toWellFormed()` | `"<replacement char>"` (fixes lone surrogates) |

---

## Compare / Misc

| Method | Example | Output |
|---|---|---|
| `localeCompare(str)` | `"apple".localeCompare("banana")` | `-1` (less), `0` (equal), `1` (greater) |

---

> **Tip:** String methods do **not** mutate the original string — they always return a **new** string.
