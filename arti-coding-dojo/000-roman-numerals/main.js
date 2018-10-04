const print = (str) => process.stdout.write(str);
const chain = (a, b) => b(a);

function calc(sign, signNumber, inputNumber) {
    const count = Math.floor(inputNumber / signNumber);
    print(sign.repeat(count));
    return inputNumber % signNumber;
}

const roman = (sign, signNumber) => calc.bind(null, sign, signNumber);

const define = [
    (num) => { print(`${num} : `); return num; },
    roman("M", 1000),
    roman("CM", 900),
    roman("D", 500),
    roman("CD", 400),
    roman("C", 100),
    roman("XC", 90),
    roman("L", 50),
    roman("XL", 40),
    roman("X", 10),
    roman("V", 5),
    roman("IV", 4),
    roman("I", 1),
    () => console.log(),
];

const printRoman = (num) => define.reduce(chain, num);

printRoman(1954);
printRoman(1776);
printRoman(1066);
printRoman(207);
printRoman(246);
printRoman(39);
printRoman(10);
printRoman(7);
printRoman(4);
printRoman(3);
printRoman(2);
printRoman(1);

