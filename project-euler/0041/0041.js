/*
    1 + 2 + ... + 9 = 45 => 3 * n
    1 + 2 + ... + 8 = 36 => 3 * n
    1 + 2 + ... + 7 = 28 => 3의 배수가 아님
    1 + 2 + ... + 6 = 21 => 3 * n
    1 + 2 + ... + 5 = 15 => 3 * n
    1 + 2 + 3 + 4 = 10   => 3 의 배수가 아님
    1 + 2 + 3 = 6        => 3 * n
    1 + 2 = 3            => 3 * n
    1 = 1                => 3 의 배수가 아님

    1~4, 1~7 의 permutation만 조사하면 된다.
*/

// Sieve of Eratosthenes
function sieve(max) {
    var composite = {};
    var num = 2;
    var primes = {};

    while(num < max) {
        if(composite[num]) {
            num += 1;
            continue;
        }
        primes[num] = true;

        var next = num + num;
        while(next < max) {
            composite[next] = true;
            next += num;
        }
        num += 1;
    }
    return primes;
}

function permutator(number) {
    var input = String(number).split('');
    let set = [];

    function mix(arr, m) {
        if (arr.length === 0) {
            var num = parseInt(m.join(''));
            set.push(num);
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

var primeMap = sieve(7654321);
var input7 = permutator(1234567).reverse();

var max = -1;
for(var i = 0; i < input7.length; i++) {
    var number = input7[i];
    if(primeMap[number]) {
        max = number;
        break;
    }
}

console.log(max);

