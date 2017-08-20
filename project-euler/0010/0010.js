var result = sieve(2000000).reduce((a,b) => a + b );

console.log(result);

// Sieve of Eratosthenes
function sieve(max) {
    var composite = {};
    var prime = [];
    var num = 2;

    while(num < max) {
        if(composite[num]) {
            num += 1;
            continue;
        }
        prime.push(num);

        var next = num + num;
        while(next < max) {
            composite[next] = true;
            next += num;
        }
        num += 1;
    }
    return prime;
}
