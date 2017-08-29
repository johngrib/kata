function getRecurringCycle(numerator, denominator) {

    var result = [];
    var check = {};
    var count = 1;

    while(true) {

        // 나누기에 부족하다면 한 자리 수 내려간다
        if(denominator > numerator) {
            numerator = numerator * 10;
            count += 1;
            continue;
        }
        re = numerator % denominator;

        // 나누어 떨어지면 순환소수가 아니므로 순환구간도 없다
        if(re === 0) {
            return 0;
        }

        if(check[re] > 0) {
            return count - check[re];
        }

        // 나누어 떨어지지 않는다면 결과를 기록한다
        if(re > 0) {
            numerator = re * 10;
            check[re] = count;
            count += 1;
            continue;
        }
    }
}

var maxNumber = -1;
var maxLength = -1;

for(var i = 1; i <= 1000; i++) {
    var length = getRecurringCycle(1, i);
    if(maxLength < length) {
        maxNumber = i;
        maxLength = length;
    };
}

console.log(maxNumber);
