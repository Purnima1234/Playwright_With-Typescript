// Romanizer - Convert numbers to Roman numerals (TypeScript)

function toRoman(num: number): string {
    if (num < 1 || num > 3999) {
        throw new RangeError("Input must be between 1 and 3999");
    }

    const values: number[] = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    const symbols: string[] = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];

    let result: string = "";

    for (let i = 0; i < values.length; i++) {
        while (num >= values[i]) {
            result += symbols[i];
            num -= values[i];
        }
    }

    return result;
}

function fromRoman(str: string): number {
    const map: Record<string, number> = {
        I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000
    };

    let result: number = 0;

    for (let i = 0; i < str.length; i++) {
        const curr: number = map[str[i]];
        const next: number = map[str[i + 1]];

        if (next && curr < next) {
            result -= curr;
        } else {
            result += curr;
        }
    }

    return result;
}

// Examples - toRoman
console.log(toRoman(1));     // I
console.log(toRoman(4));     // IV
console.log(toRoman(9));     // IX
console.log(toRoman(14));    // XIV
console.log(toRoman(40));    // XL
console.log(toRoman(58));    // LVIII
console.log(toRoman(1994));  // MCMXCIV
console.log(toRoman(3749));  // MMMDCCXLIX

// Examples - fromRoman
console.log(fromRoman("III"));       // 3
console.log(fromRoman("IV"));        // 4
console.log(fromRoman("LVIII"));     // 58
console.log(fromRoman("MCMXCIV"));  // 1994

// Error handling example
try {
    console.log(toRoman(4000));
} catch (e) {
    console.error((e as Error).message); // Input must be between 1 and 3999
}
