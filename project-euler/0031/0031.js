function count(coins, limit) {
    if(coins.length < 1) {
        // 동전이 하나도 없다면 만들 수 있는 경우의 수는 0
        return 0;
    }
    if(coins[0] > limit) {
        // 가장 작은 동전이 만들어야 하는 금액보다 크다면 경우의 수는 0
        return 0;
    }
    if(coins[0] === limit) {
        // 가장 작은 동전이 만들어야 하는 금액과 같다면 경우의 수는 1
        return 1;
    }
    // 만들어야 하는 금액보다 한 단계 작은 금액을 만드는 경우의 수
    // +
    // 갖고 있는 동전 중 가장 작은 동전을 제외하고 만들 수 있는 경우의 수
    return count(coins, limit - coins[0]) + count(coins.slice(1), limit);
}

var result = count([1, 2, 5, 10, 20, 50, 100, 200], 200);

console.log(result);
