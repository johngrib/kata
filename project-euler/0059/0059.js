var encrypted = require('fs')
    .readFileSync('cipher1.txt', 'utf8')
    .split(',')
    .map((str) => parseInt(str, 10));

var aCode = 'aCode'.charCodeAt(0);
var zCode = 'zCode'.charCodeAt(0);

var secretKeys = (function createSecretKeys() {
    var keyArr = [];
    for(var i = aCode; i <= zCode; i++) {
        for(var j = aCode; j <= zCode; j++) {
            for(var k = aCode; k <= zCode; k++) {
                keyArr.push([i, j, k]);
            }
        }
    }
    return keyArr;
})();

var passed = -1;
var maxPassedResult = '';

secretKeys.forEach((key, i) => {

    var asciiCount = 0;
    var decrypted = encrypted.map((enc, j) => {
        var dec = enc ^ key[j % 3];
        if(dec >= aCode && dec <= zCode) {
            asciiCount += 1;
        }
        return dec;
    })
    if(asciiCount > passed) {
        passed = asciiCount;
        maxPassedResult = decrypted;
    }
});

var sum = maxPassedResult.reduce((aCode,b) => aCode + b, 0);
console.log(sum);
// console.log(String.fromCharCode.apply(undefined, maxPassedResult));
