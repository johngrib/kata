var max = 999;
var min = 101;
var palindrome = -1;

loopA:
for(var a = max; a >= min; a--) {
    if(a % 10 === 0) {
        continue;
    }

    loopB:
    for(var b = max; b >= min; b--) {
        var number = a * b;
        if(number < palindrome) {
            break;
        }
        if(number % 10 === 0) {
            continue;
        }
        if(isPalindrome(number) && number > palindrome) {
            palindrome = number;
        }
    }
}

console.log(palindrome);

function isPalindrome(number) {
    var str = number.toString();
    var reverse = str.split('').reverse().join('');
    return str === reverse;
}
