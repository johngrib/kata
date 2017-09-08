var primeMap = {};

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

        var next = num + num;
        while(next < max) {
            composite[next] = true;
            next += num;
        }
        num += 1;
    }
})(1000000);

var circularPrime = {};

Object.keys(primeMap).forEach(function(prime) {
    var rotated = prime;
    var isCircularPrime = true;
    for(var i = 0; i < prime.length; i++) {
        rotated = rotated.slice(1) + '' + rotated.slice(0,1);
        if(!primeMap[rotated]) {
            isCircularPrime = false;
            break;
        }
    }
    if(isCircularPrime) {
        circularPrime[rotated] = true;
    }
});

console.log(Object.keys(circularPrime).length);
