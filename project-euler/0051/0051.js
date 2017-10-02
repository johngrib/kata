/*
# 8개의 소수를 만드는 것이 목표.
# 소수는 1의 자리가 1, 3, 7, 9 중 하나여야 하므로 1의 자리를 치환하는 경우는 제외한다.
# 찾아낸 8개의 소수는 모두 같은 자리수여야 한다.
# '*' 이 하나일 경우, 생성한 숫자 집합에서 최소한 3 개의 3의 배수가 발생한다.
    => 최대 7개 소수만 생성되므로 '*'이 하나인 경우는 제외한다.
# '*' 이 두 개인 경우도 마찬가지.
# '*' 이 세 개인 경우는 '*'을 제외한 다른 숫자의 합이 3의 배수가 아닌 경우에 한하여
    => 최대 10개의 소수 생성이 가능하다.
# '*' 이 여섯 개인 경우도 최대 10개의 소수 생성이 가능하다.
    => 중복되는 숫자가 3개, 6개가 있는 소수를 실마리 삼아 검사하자.
# 문제에서 제시한 56003 부터 체크를 시작한다.
*/
function dup3check(number) {
    var str = String(number);
    var arr = str.split('');
    var count = {};

    for(var i = 0; i < arr.length; i++) {
        var num = arr[i];
        if(count[num] === undefined) {
            count[num] = 0;
        }
        count[num] += 1;
    }
    var delimiter = null;
    for(var key in count) {
        if(count[key] % 3 === 0) {
            delimiter = key;
            break;
        }
    }
    if(delimiter === null) {
        return false;
    }
    return str.split(delimiter);
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
})(1000000).filter((n) => n > 56003);

var result = -1;

for(var i = 0; i < prime.length; i++) {
    var p = prime[i];
    var ret = dup3check(p);

    if(!ret) {
        continue;
    }

    var primesArr = [];

    for(var j = 0; j <= 9; j++) {

        var temp = ret.join(j);

        if(temp.startsWith('0')) {
            continue;
        }
        var num = parseInt(temp, 10);
        if(primeMap[num]) {
            primesArr.push(num);
        }
    }
    if(primesArr.length === 8) {
        result = primesArr;
        break;
    }
}

console.log(result.sort((a,b) => a > b)[0]);
