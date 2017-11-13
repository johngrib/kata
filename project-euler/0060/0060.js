// Sieve of Eratosthenes
var prime = (function sieve(max) {
    var num = 3;
    var composite = {};
    var prime = [2];

    while(num < max) {
        if(composite[num]) {
            num += 2;
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
})(1000000);

function findNextPrime() {
    var num = getMaxPrime();
    while(true) {
        num += 2;
        var end = parseInt(Math.sqrt(num), 10);

        for(var i = 0; i < prime.length; i++) {
            var p = prime[i];
            if(p > end) {
                return prime.push(num);
            }
            if(num % p === 0) {
                break;
            }
        }
    }
}

function getMaxPrime() {
    return prime[prime.length - 1];
}

function isPrime(p) {
    while(p > getMaxPrime()) {
        findNextPrime();
    }
    return search(0, prime.length - 1, p);
}
function search(min, max, p) {
    var mid = parseInt((min + max) / 2, 10);
    var num = prime[mid];
    if(num == p || prime[mid + 1]== p) {
        return true;
    } else if(mid === min || mid === max) {
        return false;
    } else if(num > p) {
        return search(min, mid, p);
    } else if(num < p) {
        return search(mid, max, p);
    }
    return false;
}

function isConcatPrime(p1, p2) {
    var s1 = parseInt(String(p1).concat(String(p2)), 10);
    var s2 = parseInt(String(p2).concat(String(p1)), 10);
    return isPrime(s1) && isPrime(s2);
}

function primeMapper(list) {
    var listMap = {};
    for(var i = 0; i < list.length; i++) {
        var p1 = list[i];
        for(var j = i + 1; j < list.length; j++) {
            var p2 = list[j];

            if(isConcatPrime(p1, p2)) {
                if(!listMap[p1]) {
                    listMap[p1] = [];
                }
                listMap[p1].push(p2);
            }
        }
    }
    return listMap;
}

function depthMapper(listMap, dict) {
    for(var key in listMap) {
        var list = listMap[key];
        var map = {};
        for(var i = 0; i < list.length; i++) {
            var p = list[i];
            if(dict[p]) {
                map[p] = intersection(dict[p], list);
            }
        }
        listMap[key] = depthMapper(map, listMap);
    }
    return listMap;
}

function intersection(list1, list2) {
    var map = {};
    list1.forEach((n) => { map[n] = true; });
    return list2.filter((n) => map[n]);
}

var listMap = primeMapper(prime.filter((n) => n < 10000));
var depthMap = depthMapper(listMap, listMap);

var resultList = [];
(function getDepthList(map, list) {
    if(Object.keys(map).length < 1 && list.length === 5) {
        return resultList.push(list);
    }
    for(var key in map) {
        getDepthList(map[key], list.concat(key));
    }
})(depthMap, [])

var result = resultList.map(
    (list) => list.map((n) => parseInt(n, 10))
                    .reduce((a,b) => a + b)
);

console.log(Math.max.apply(null, result));

