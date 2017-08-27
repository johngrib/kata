Array.prototype.sum = function() {
    var sum = 0;
    for(var i = 0; i < this.length; i++) {
        sum += this[i];
    }
    return sum;
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

var limit = 28124;
var abundantMap = {};

for(var i = 2; i <= limit; i++) {
    if(getDivisors(i).sum() - i > i) {
        abundantMap[i] = true;
    }
}

var abundant = Object.keys(abundantMap)
    .map((number) => parseInt(number, 10))
    ;

var sumAbundant = {};

for(var i = 0; i < abundant.length; i++) {
    var first = abundant[i];
    for(var j = i; j < abundant.length; j++) {
        var second = abundant[j]
        sumAbundant[first + second] = true;
    }
}

var sum = 0;
for(var i = 1; i <= limit; i++) {
    if(!sumAbundant[i]) {
        sum += i;
    }
}

console.log(sum);

