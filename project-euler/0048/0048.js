var limit = Math.pow(10, 10);

function pow(number, p) {
    var result = 1;
    while(p-- > 0) {
        result *= number;
        if(result >= limit) {
            result = result % limit;
        }
    }
    return result;
}

var sum = 0;

for(var i = 1; i <= 1000; i++) {
    var number = pow(i,i);
    sum += pow(i, i);
}

console.log(sum % limit);
