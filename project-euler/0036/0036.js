function dec2bin(dec){
    return (dec >>> 0).toString(2);
}

function isPalindromicBinary(number) {
    var bin = dec2bin(number);
    var reversed = bin.split('').reverse().join('');
    return bin === reversed;
}

function isPalindromic(number) {
    var num = number.toString();
    var reversed = num.split('').reverse().join('');
    return num === reversed;
}

var sum = 0;
for(var i = 1; i <= 1000000; i++) {
    if(isPalindromic(i) && isPalindromicBinary(i)) {
        sum += i;
    }
}

console.log(sum);
