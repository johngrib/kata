function square(number) {
    return number * number;
}

var squareMap = {};
var square = [0];

for(var i = 1; i <= 1000; i++) {
    var sq = i * i;
    squareMap[sq] = i;
    square.push(sq);
}

var resultMap = {};
var maxP = -1;
var maxCount = -1;

for(var i = 1; i < square.length; i++) {

    var a2 = square[i];

    for(var j = i + 1; j < square.length; j++) {

        var b2 = square[j];
        var c2 = a2 + b2;

        if(squareMap[c2] === undefined) {
            continue;
        }

        var a = squareMap[a2];
        var b = squareMap[b2];
        var c = squareMap[c2];
        var p = a + b + c;

        if(p > 1000) {
            continue;
        }
        if(resultMap[p] === undefined) {
            resultMap[p] = 0;
        }
        resultMap[p] += 1;
        if(resultMap[p] > maxCount) {
            maxP = p;
            maxCount = resultMap[p];
        }
    }
}

console.log(maxP);
