function dn(numberStr, n) {
    return parseInt(numberStr.substr(n, 1), 10);
}

function fullNumberStr() {
    var str = '.';
    var number = 1;
    while(str.length < 1000001) {
        str = str.concat(number);
        number += 1;
    }
    return str;
}

var d = dn.bind(undefined, fullNumberStr());
var count = 1;
var result = 1;

while(count < 1000000) {
    result = result * d(count);
    count = count * 10;
}
console.log(result);

