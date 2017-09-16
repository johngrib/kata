function permutator(number) {
    var input = String(number).split('');
    let set = [];

    function mix(arr, m) {
        if (arr.length === 0) {
            var num = m.join('');
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

function subNum(str, start, end) {
    return parseInt(str.substr(start, end), 10);
}

var numbers = permutator(9876543210);
var primes = [2, 3, 5, 7, 11, 13, 17];
var result = [];

for(var i = 0; i < numbers.length; i++) {
    var number = numbers[i];

    var pass = true;
    for(var j = 0; j < primes.length; j++) {
        var num = subNum(number, j + 1, 3);
        if(num % primes[j] !== 0) {
            pass = false;
            break;
        }
    }
    if(pass) {
        result.push(parseInt(number, 10));
    }
}

console.log(result.reduce((a,b) => a+b));
