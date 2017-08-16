function solution(a, b, sum) {

    var next = a + b;

    if(next > 4000000) {
        return sum;
    }

    return solution(b, next, (next % 2 === 0) ? sum + next : sum)
}

var result = solution(0, 1, 0);

console.log(result);
