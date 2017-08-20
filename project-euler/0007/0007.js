
var primes = [2];
var number = 3;

while (primes.length != 10001) {
    if(isPrime(number)) {
        primes.push(number);
    }
    number += 2;
}

console.log(primes.pop());

function isPrime(number) {
    for(var i = 0; i < primes.length; i++) {
        var prime = primes[i];
        if(number % prime === 0) {
            return false;
        }
    }
    return true;
}
