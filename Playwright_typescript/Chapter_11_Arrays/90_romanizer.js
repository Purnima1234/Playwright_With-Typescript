// Romanizer - Convert numbers to Roman numerals

function toRoman(num) {
    const values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    const symbols = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];

    let result = "";

    for (let i = 0; i < values.length; i++) {
        while (num >= values[i]) {
            result += symbols[i];
            num -= values[i];
        }
    }

    return result;
}

// Examples
console.log(toRoman(1));     // I
console.log(toRoman(4));     // IV
console.log(toRoman(9));     // IX
console.log(toRoman(14));    // XIV
console.log(toRoman(40));    // XL
console.log(toRoman(58));    // LVIII
console.log(toRoman(1994));  // MCMXCIV
console.log(toRoman(3749));  // MMMDCCXLIX

// Reverse: Roman numeral string to number
function fromRoman(str) {
    const map = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
    let result = 0;

    for (let i = 0; i < str.length; i++) {
        const curr = map[str[i]];
        const next = map[str[i + 1]];
        if (next && curr < next) {
            result -= curr;
        } else {
            result += curr;
        }
    }

    return result;
}

// Examples
console.log(fromRoman("III"));      // 3
console.log(fromRoman("IV"));       // 4
console.log(fromRoman("LVIII"));    // 58
console.log(fromRoman("MCMXCIV")); // 1994
