String.prototype.getSum = function() {
    var sum = 0;
    for(var i = 0; i < this.length; i++) {
        sum += this.charCodeAt(i) - 64;
    }
    return sum;
}

function getTriangle(n) {
    return n * (n + 1) / 2;
}

var maxCount = 0;
var maxTriangle = -1;
var triangleMap = {};

function isTriangle(number) {
    while(maxTriangle < number) {
        maxCount += 1;
        maxTriangle = getTriangle(maxCount);
        triangleMap[maxTriangle] = true;
    }
    return triangleMap[number] === true;
}

var fs = require('fs');
var result = fs.readFileSync('words.txt', 'utf8')
    .replace(/"/g, '')
    .split(',')
    .map((word) => word.getSum())
    .filter(isTriangle)
    .length
    ;

console.log(result);
