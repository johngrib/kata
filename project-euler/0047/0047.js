// Sieve of Eratosthenes
var prime = (function sieve(max) {
    var num = 2;
    var composite = {};
    var prime = [];

    while(num < max) {
        if(composite[num]) {
            num += 1;
            continue;
        }
        prime.push(num);

        var next = num + num;
        while(next < max) {
            composite[next] = true;
            next += num;
        }
        num += 1;
    }
    return prime;
})(1000000)

var factorMap = {};

function getFactors(number, primes) {

    var index = 0;
    var prime = primes[index];
    var factors = [];
    var lastFactor = -1;

    while (number > 1) {
        if(number % prime === 0) {
            number = number / prime;
            if(lastFactor === prime) {
                continue;
            }
            factors.push(prime);
            lastFactor = prime;
        } else {
            index++;
            prime = primes[index];
        }
    }
    return factors;
}

var compare = [];
var number = 1;

while(compare.length < 4) {

    number++;

    if(getFactors(number, prime).length === 4) {
        compare.push(number);
        continue;
    }
    compare = [];
}

console.log(compare[0]);

