function getLimit() {
    var n = 1;
    var nine5 = Math.pow(9, 5);
    var num = 9;

    while(true) {
        if(nine5 * n < num) {
            return nine5 * n;
        }
        n += 1;
        num = num * 10 + 9;
    }
}

var powerMap = {};
for(var i = 1; i < 10; i++) {
    powerMap[i, Math.pow(i, 5)];
}

var limit = getLimit();

var result = 0;
for (var i = 2; i <= limit; i++) {

    var number = i.toString()
        .split('')
        .map((n) => Math.pow(parseInt(n, 10), 5))
        .reduce((a,b) => a + b)
    ;
    if(i === number) {
        result += number;
    }
}

console.log(result);
