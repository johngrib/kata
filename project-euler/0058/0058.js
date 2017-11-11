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
})(40000000);

function findPrime(limit) {
    var lastPrime = prime[prime.length - 1];
    if(limit < lastPrime) {
        return;
    }
    var number = lastPrime;
    while(lastPrime < limit) {
        number += 2;
        var end = Math.sqrt(number)
        var check = false;
        for(var i = 0; i < prime.length; i++) {
            var p = prime[i];
            if(p > end) {
                check = true;
                break;
            }
            if(number % p === 0) {
                check = false;
                break;
            }
        }
        if(check) {
            lastPrime = number;
            prime.push(number);
        }
    }
}

var searchIndex = 0;
function isPrime(number) {
    findPrime(number);
    for(var i = searchIndex; i < prime.length; i++) {
        var p = prime[i];
        if(p > number) {
            searchIndex = i;
            return false;
        }
        if(p == number) {
            searchIndex = i;
            return true;
        }
    }
    return false;
}

/*
1: 1,
2: 2,2,2,2,
3: 4,4,4,4,
4: 6,6,6,6,
*/
var number = 1;
var width = 1;
var add = 2;
var primeCount = 0;
var p = [];
while(true) {
    for(var i = 0; i < 3; i++) {
        number += add;
        if(isPrime(number)) {
            p.push(number);
        }
    }
    number += add;
    add += 2;
    width += 2;

    if(p.length * 10 <= (width * 2 - 1)) {
        break;
    }
}

console.log(width);
