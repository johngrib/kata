var sequence = 1;
var triangle = -1;
var divisors = [];

while(divisors.length < 500) {

    triangle = getTriangleNumber(sequence);
    divisors = getDivisors(triangle);
    sequence += 1;
}

console.log(triangle);

function getTriangleNumber(sequence) {
    return ((1 + sequence) * sequence) / 2;
}

function getDivisors(number) {
    var divisors = [];
    var quotient = number;
    var seq = 1;

    while(quotient > seq) {
        if(number % seq === 0) {

            var quotient = number / seq;

            divisors.push(seq);

            if(quotient !== seq) {
                divisors.push(quotient);
            }
        }
        seq += 1;
    }
    return divisors;
}
