 /*
 1. n 이 0 인 경우를 생각해보면 b 는 소수여야 한다
 2. n 이 1 인 경우를 생각해보면 1 + a + b 이고, 가장 작은 소수는 2 이므로, 1 + a + b >= 2 이어야 한다.
 따라서 a 의 최소값은 1 - b 이다.
 3. b 가 2 인 경우는 n 이 2 일 경우 조건을 만족하지 못하므로, b 의 최소값은 일단 3 으로 생각한다.
 4. n = b 인 경우 합성수가 되므로 n 의 최대값은 b - 1 이다.
 5. n 이 홀수인 경우와 n 이 짝수인 경우를 생각해 보면, a 가 짝수인 경우 식의 결과가 짝수가 되므로 a 는 홀수여야 한다.
 */

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
})(1000);

function method(a, b, n) {
    return  n * (n + a) + b;
}

// a, b 에 대하여 가장 큰 n 값을 찾는 함수
function findMaxN(a, b) {
    var n = 0;
    while(true) {
        if(!primeMap[method(a, b, n)]) {
            return n;
        }
        n += 1;
    }
    return n;
}

var maxN = -1;
var maxA = -1;
var maxB = -1;

for(var i = 1; i < prime.length; i++) {
    var b = prime[i];

    if(b >= 1000) {
        break;
    }

    // a 는 홀수여야 한다.
    for(var a = 1 - b; a < 1000; a++) {
        if(a % 2 == 0) {
            continue;
        }
        var n = findMaxN(a, b);
        if(n > maxN){
            maxA = a;
            maxB = b;
            maxN = n;
        }
        a += 2;
    }
}

console.log(maxA * maxB)

