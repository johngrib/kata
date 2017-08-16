var number = 600851475143;
var limit = parseInt(Math.sqrt(number));
var primes = sieve(limit);
var result = getFactors(number, primes);

console.log(result.pop());

// Sieve of Eratosthenes
function sieve(max) {
    var composite = {};
    var prime = [];
    var num = 2;

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
}

// factorization
function getFactors(number, primes) {

    var prime = primes.shift();
    var factors = [];

    while (number > 1) {
        if(number % prime === 0) {
            number = number / prime;
            factors.push(prime);
            continue;
        }
        prime = primes.shift();
    }
    return factors;
}
