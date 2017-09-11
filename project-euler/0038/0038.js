var pandigitalMap = {};

function isPandigital(numberStr) {
    if(pandigitalMap[numberStr] === undefined) {
        pandigitalMap[numberStr] = ('123456789' === numberStr.split('').sort().join(''));
    }
    return pandigitalMap[numberStr];
}

var max = -1;

for(var i = 1; i < 50000; i++) {

    var number = i;
    var seq = 1;
    var str = '';

    while(str.length < 9) {
        str = str.concat(number * seq);
        seq += 1;
    }
    if(isPandigital(str) && parseInt(str, 10) > max) {
        max = parseInt(str, 10);
    }
}

console.log(max);

