Array.prototype.sortNumber = function() {
    return this.sort((a, b) => { return a > b });
}

var limit = 20;
var primes = sieve(limit);
var factorMap = {};
var factorCount = {};

for(var i = 2; i <= limit; i++) {
    var factorList = getFactorList(i);
    factorMap[i] = factorList;
}

// count;
for(key in factorMap) {
    var fac = factorMap[key];
    var count = {};
    fac.forEach(function(num){
        if(count[num]) {
            count[num] += 1;
        } else {
            count[num] = 1;
        }
    });

    for(num in count) {
        if(!factorCount[num]) {
            factorCount[num] = 0;
        }
        if(factorCount[num] < count[num]) {
            factorCount[num] = count[num];
        }
    }
}

var result = 1;
for(num in factorCount) {
    result *= Math.pow(parseInt(num), factorCount[num]);
}

console.log(result);

// factorization
function getFactorList(number) {

    var factors = [];

    function getFactor(number, primeList) {
        if(primeList.length < 1) {
            return factors.sortNumber();
        }
        if(factorMap[number]) {
            return factors.concat(factorMap[number]).sortNumber();
        }
        if(number % primeList[0] == 0) {
            factors.push(primeList[0]);
            return getFactor(number / primeList[0], primeList);
        }
        return getFactor(number, primeList.slice(1));
    }
    return getFactor(number, primes);
}

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
