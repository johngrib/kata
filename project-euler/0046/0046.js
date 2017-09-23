var prime = [];
var primeMap = {};

// Sieve of Eratosthenes
(function sieve(max) {
    var num = 2;
    var composite = {};

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
})(10000)

function solution() {

    var compo = 9;

    while(true) {

        while(primeMap[compo]) {
            compo += 2;
        }

        for(var i = 0; i < prime.length; i++) {
            var pr = prime[i];
            if(pr >= compo) {
                return compo;
            }
            if(Number.isInteger(Math.sqrt((compo - pr) / 2))) {
                break;
            }
        }
        compo += 2;
    }
}

console.log(solution());
