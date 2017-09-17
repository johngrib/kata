function getPentagonal(n) {
    return n * (3 * n - 1) / 2;
}

var pentaList = [1, 5];
var pentaMap = { 1: true, 5: true };
var maxPenta = pentaList[pentaList.length - 1];
var maxN = 2;

function nextPentagonal() {
    maxN += 1;
    maxPenta = getPentagonal(maxN);
    pentaMap[maxPenta] = true;
    pentaList.push(maxPenta);
}
function preparePentagonal(limit) {
    while(maxPenta < limit) {
        nextPentagonal();
    }
}
function isPentagonal(number) {
    preparePentagonal(number);
    return pentaMap[number] === true;
}

var result = -1;
var i = 1;

loopA:
while(result < 0) {

    var curr = pentaList[i];
    var j = i - 1;

    while(j >= 0) {
        var p = pentaList[j];

        if(isPentagonal(curr - p) && isPentagonal(curr + p)) {
            result = curr - p;
            break loopA;
        }
        nextPentagonal();
        j--;
    }
    i++;
}

console.log(result);
