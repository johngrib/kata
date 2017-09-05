function isPandigit(numberStr) {
    return '123456789' == numberStr.split('').sort().join('');
}

var cMap = {};

// 1 자리 숫자 * 4 자리 숫자 => 4 자리 숫자
for(var a = 1; a <= 9; a++) {
    for(var b = 1000; b <= 9999; b++) {
        var c = a * b;
        var str = ''.concat(a).concat(b).concat(c);
        if(isPandigit(str)) {
            cMap[c] = true;
        }
    }
}

// 2 자리 숫자 * 3 자리 숫자 => 4 자리 숫자
for(var a = 10; a <= 99; a++) {
    for(var b = 100; b <= 999; b++) {
        var c = a * b;
        var str = ''.concat(a).concat(b).concat(c);
        if(isPandigit(str)) {
            cMap[c] = true;
        }
    }
}

var result = Object.keys(cMap)
    .map((n) => parseInt(n, 10))
    .reduce((a,b) => a+b)
;

console.log(result);
