var divisorMap = {};
var amicable = {};

for(var i = 1; i <= 10000; i++) {

    if(!divisorMap[i]) {
        var divisors = getDivisors(i);
        divisorMap[i] = divisors.reduce((a,b) => a+b, 0) - i;
    }
    var sum = divisorMap[i];

    if(divisorMap[sum] == i && sum != i) {
        amicable[i] = true;
        amicable[sum] = true;
    }
}

var ami = Object.keys(amicable)
    .map((n) => parseInt(n, 10))
    .reduce((a,b) => a+b)
;

console.log(ami);

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
