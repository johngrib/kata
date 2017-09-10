var primeMap = {};
var prime = [];

// Sieve of Eratosthenes
(function sieve(max) {
    var composite = {};
    var num = 2;

    while(num < max) {
        if(composite[num]) {
            num += 1;
            continue;
        }
        primeMap[num] = true;
        prime.push(num);

        var next = num + num;
        while(next < max) {
            composite[next] = true;
            next += num;
        }
        num += 1;
    }
})(1000000);

function isRotPrime(number) {
    if(number <= 7) {
        return false;
    }
    var left = number.toString();
    while(left.length > 0) {
        if(!primeMap[parseInt(left, 10)]) {
            return false;
        }
        left = left.slice(1);
    }
    var right = number;
    while(right > 0) {
        if(!primeMap[right]) {
            return false;
        }
        right = (right - (right % 10)) / 10;
    }
    return true;
}

var result = prime
    .filter(isRotPrime)
    .reduce((a,b) => a+b);

console.log(result);
