function isPentagonal(number) {
    return Number.isInteger(
        (1 + Math.sqrt(1 + (24 * number))) / 6
    );
}
function getHexagonal(n) {
    return n * (2 * n - 1);
}
// 모든 육각수의 집합은 삼각수 집합의 부분집합이므로 삼각수인지는 검사하지 않아도 된다
function solution() {
    var n = 144;
    while(true) {
        var hexa = getHexagonal(n);
        if(isPentagonal(hexa)) {
            return hexa;
        }
        n++;
    }
}
console.log(solution());
