// 1 +2 +2 +2 +2 +4 +4 +4 +4 +6 +6 +6 +6 +8 +8 +8 +8 ...

function getSum(lastNum) {

    var num = 1;
    var sum = 1;
    var level = 1;

    while(num < lastNum) {
        var addNum = level * 2;
        for(var i = 0; i < 4; i++) {
            num += addNum;
            sum += num;
        }
        level += 1;
    }
    return sum;
}

console.log(getSum(1001 * 1001));
