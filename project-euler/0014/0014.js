var cache = {};

function seqCount(number) {
    var num = number;
    var count = 1;
    while (num !== 1) {
        if (cache[num]) {
            return cache[num] + count;
        }
        if(num % 2 === 0) {
            num = num / 2;
        } else {
            num = 3 * num + 1;
        }
        count += 1;
    }
    cache[number] = count;
    return count;
}

var max = -1;
var number = -1;
for(var i = 1; i <= 1000000; i++) {
    var result = seqCount(i);
    if(result > max) {
        max = result;
        number = i;
    }
}

console.log(number);
