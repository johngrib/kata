String.prototype.getSum = function() {
    var sum = 0;
    for(var i = 0; i < this.length; i++) {
        sum += this.charCodeAt(i) - 64;
    }
    return sum;
}

var fs = require('fs');

var result = fs.readFileSync('p022_names.txt', 'utf8')
    .replace(/"/g, '')
    .split(',')
    .sort()
    .map((name, index) => name.getSum() * (index + 1))
    .reduce((a,b) => a+b)
;

console.log(result);

