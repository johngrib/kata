function isSameDigitsCheck(number) {
    var str = toSortedString(number);
    for(var i = 2; i <= 6; i++) {
        var num = i * number;
        if(str !== toSortedString(num)) {
            return false;
        }
    }
    return true;
}

function toSortedString(number) {
    return String(number).split('').sort().join('');
}

var number = 10;
var result = -1;

while(true) {

    if(isSameDigitsCheck(number)) {
        result = number;
        break;
    }
    number += 1;
}

console.log(result);
