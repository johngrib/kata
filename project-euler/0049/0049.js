function permutator(number) {
    var input = String(number).split('');
    let set = {};

    function mix(arr, m) {
        if (arr.length === 0) {
            var num = parseInt(m.join(''), 10);
            set[num] = true;
        } else {
            for (let i = 0; i < arr.length; i++) {
                let curr = arr.slice();
                let next = curr.splice(i, 1);
                mix(curr.slice(), m.concat(next))
            }
        }
    }
    mix(input, [])
    return set;
}

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
})(9999).filter((n) => n > 1000);

function solution() {
    for(var i = 0; i < prime.length; i++) {

        var first = prime[i];
        var second = first + 3330;
        var last = second + 3330;

        if(!primeMap[second] || !primeMap[last] || first === 1487) {
            continue;
        }

        var perMap = permutator(first);

        if(perMap[second] && perMap[last]) {
            return [first, second, last].join('');
        }
    }
}

console.log(solution());
