/*
Point List
    High Card       : 0
    One Pair        : 1
    Two Pair        : 2
    Three of a Kind : 3
    Straight        : 4
    Flush           : 5
    Full House      : 6
    Four of a Kind  : 7
    Straight Flush  : 8
    Royal Flush     : 9
*/
function toInt(numStr) {
    return parseInt(numStr, 10);
}
function toNumberList(hand) {
    return hand.map((card) => card.substr(0,2))
        .sort()
        .reverse();
}
function toNumberSet(hand) {
    var set = new Set();
    toNumberList(hand).forEach((n) => set.add(n));
    return set;
}
function toNumberMap(hand) {
    var map = {};
    toNumberList(hand).forEach((num) => {
        if(map[num] === undefined) {
            map[num] = 0;
        }
        map[num] += 1;
    });
    return map;
}
function toSuitList(hand) {
    return hand.map((card) => card.substr(2)).sort();
}
function checkHighCard(hand) {
    return [0].concat(toNumberList(hand)).join('');
}
function checkOnePair(hand) {
    if(toNumberSet(hand).size != 4) {
        return false;
    }
    var map = toNumberMap(hand);
    for(var key in map) {
        if(map[key] === 2) {
            var cards = toNumberList(hand);
            var pair = cards.filter((n) => n == key);
            var other = cards.filter((n) => n != key);
            return [1].concat(pair).concat(other).join('');
        }
    }
}
function checkTwoPair(hand) {
    if(toNumberSet(hand).size != 3) {
        return false;
    }
    var map = toNumberMap(hand);
    for(var key in map) {
        if(map[key] > 2) {
            return false;
        }
    }
    for(var key in map) {
        if(map[key] === 1) {
            var cards = toNumberList(hand);
            var pair = cards.filter((n) => n != key);
            var other = cards.filter((n) => n == key);
            return [2].concat(pair).concat(other).join('');
        }
    }
    return false;
}
function checkThreeKind(hand) {
    var map = toNumberMap(hand);
    for(var key in map) {
        if(toInt(map[key]) === 3) {
            var cards = toNumberList(hand);
            var three = cards.filter((n) => n == key);
            var other = cards.filter((n) => n != key);
            return [3].concat(three).concat(other).join('');
        }
    }
    return false;
}
function checkStraight(hand) {
    if(toNumberSet(hand).size != 5) {
        return false;
    }
    var cards = toNumberList(hand);
    if(toInt(cards[0]) - toInt(cards[4]) !== 4) {
        return false;
    }
    return [4].concat(cards).join('');
}
function checkFlush(hand) {
    var suit = toSuitList(hand);
    if(suit[0] === suit[4]) {
        var cards = toNumberList(hand);
        return [5].concat(cards).join('');
    }
    return false;
}
function checkFullHouse(hand) {
    if(toNumberSet(hand).size !== 2) {
        return false;
    }
    var cards = toNumberList(hand);
    var map = toNumberMap(hand);
    for(var key in map) {
        if(map[key] === 3) {
            var house = cards.filter((n) => n == key);
            var pair = cards.filter((n) => n != key);
            return [6].concat(house).concat(pair).join('');
        }
    }
    return false;
}
function checkFourKind(hand) {
    if(toNumberSet(hand).size > 2) {
        return false;
    }
    var cards = toNumberList(hand);
    if(cards[0] === cards[3]) {
        return [7].concat(cards).join('');
    }
    if(cards[1] === cards[4]) {
        return [7].concat(cards.reverse()).join('');
    }
    return false;
}
function checkStraightFlush(hand) {
    if(!checkFlush(hand) || !checkStraight(hand)) {
        return false;
    }
    var cards = toNumberList(hand);
    return [8].concat(cards).join('');
}
function checkRoyalFlush(hand) {
    if(!checkStraightFlush(hand)) {
        return false;
    }
    var cards = toNumberList(hand);
    if(cards[0] != 14) {
        return false;
    }
    return [9].concat(cards).join('');
}

var fs = require('fs');
var games = fs.readFileSync('poker.txt', 'utf8')
    .trim()
    .replace(/(\d)/g, '0$1')
    .replace(/T/g, 10)
    .replace(/J/g, 11)
    .replace(/Q/g, 12)
    .replace(/K/g, 13)
    .replace(/A/g, 14)
    .split('\n')
    .map((row) => row.split(/\s/))
    .map((row) => [row.slice(0,5), row.slice(5)])
    ;

var checker = [
    checkRoyalFlush,
    checkStraightFlush,
    checkFourKind,
    checkFullHouse,
    checkFlush,
    checkStraight,
    checkThreeKind,
    checkTwoPair,
    checkOnePair,
    checkHighCard
];

var count = 0;
for(var i = 0; i < games.length; i++) {
    var game = games[i];
    var hand1 = game[0];
    var hand2 = game[1];

    var player1 = null;
    var player2 = null;
    for(var j = 0; j < checker.length; j++) {
        var player1 = checker[j](hand1);
        if(player1 !== false) {
            break;
        }
    }
    for(var j = 0; j < checker.length; j++) {
        var player2 = checker[j](hand2);
        if(player2 !== false) {
            break;
        }
    }
    if(player1 > player2) {
        count++;
    }
}

console.log(count);
