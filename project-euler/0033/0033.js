function getGCD(a, b) {
    if(b === 0)
        return a;
    else
        return getGCD(b, a % b);
}

var numerator = [];
var denominator = [];

for(var a = 1; a <= 9; a++) {
    for(var b = a + 1; b <= 9; b++) {
        for(var c = 1; c <= 9; c++) {

            var matched = (c * (9 * a + b)) == (10 * a * b);
            if(matched) {
                numerator.push(10 * a + b);
                denominator.push(10 * b + c);
            }
        }
    }
}

var numMulti = numerator.reduce((a,b) => a * b, 1);
var denMulti = denominator.reduce((a,b) => a * b, 1);
var result = denMulti / getGCD(numMulti, denMulti);

console.log(result);
