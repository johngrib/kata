var primeMap = {};
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
        primeMap[num] = true;

        var next = num + num;
        while(next < max) {
            composite[next] = true;
            next += num;
        }
        num += 1;
    }
    return prime;
})(1000000);

var lastPrime = prime[prime.length - 1];

var max = {
    count: 1,
    prime: 2,
};

var sumMap = {};
for(var i = 0; i < prime.length; i++) {
    var p = prime[i];
    sumMap[p] = { count: 0, val: 0 };

    for(var key in sumMap) {
        var obj = sumMap[key];

        obj.count += 1;
        obj.val += p;

        if(obj.val <= lastPrime && primeMap[obj.val] && obj.count > max.count) {
            max.count = sumMap[key].count;
            max.prime = sumMap[key].val;
        }
        if(obj.val > lastPrime) {
            delete sumMap[key];
        }
    }
}

console.log(max.prime);

