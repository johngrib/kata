const polyFunc = {
    3: (n) => n * (n+1) / 2,
    4: (n) => n * n,
    5: (n) => n * (3*n-1) / 2,
    6: (n) => n * (2*n-1),
    7: (n) => n * (5*n-3) / 2,
    8: (n) => n * (3*n-2),
}

// 다각수 리스트를 생성한다
function collectList(func, limit) {
    let n = 1;
    let val = func(n++);
    const list = [];
    while(val < limit) {
        list.push(String(val));
        val = func(n++);
    }
    return list;
}

// 다각수 head map 을 만든다. (앞 두 글자를 head 라 한다)
// 3각수 1275와 4각수 2500 이 있다고 할 때, map 의 구조는 다음과 같다
// '12' => [{num:'1275', poly:3}], '25' => [{num:'2500', poly: 4}]
const polyMap = ((map) => {
    function collectMap(polyNum) {
        collectList(polyFunc[polyNum], 9999).filter((n) => n >= 1000)
            .forEach((val) => {
                const ns = String(val);
                const head = ns.slice(0, 2);
                if(!map[head]) {
                    map[head] = [];
                }
                map[head].push({num: ns, poly: polyNum});
        });
    }
    [3,4,5,6,7,8].forEach(collectMap);
    return map;
})({});

var resultList;

// 답을 구한다
function getResult() {
    var list = collectList(polyFunc[8], 9999).filter((n) => n >= 1000);
    for(var i = 0; i < list.length; i++) {
        deepSearch([{num: list[i], poly: 8}], '', []);
        if(resultList) {
            return resultList.map((n) => parseInt(n, 10));
        }
    }
}

// 재귀하며 숫자 목록에 꼬리를 이어붙인다. 길이가 6이 되면 답을 리턴한다.
function deepSearch(list, exclude, resultSet) {
    if(resultSet.length >= 6) {
        const head = resultSet[0].slice(0,2);
        const tail = resultSet[resultSet.length - 1].slice(2);
        if(head === tail) {
            return resultList = resultSet;
        }
    }
    list.forEach((obj) => {
        if(exclude.indexOf(obj.poly) >= 0) {
            return;
        }
        const tailList = polyMap[obj.num.slice(2)];
        if(!tailList) {
            return;
        }
        const tails = tailList.filter((o) => exclude.indexOf(o.poly) < 0 );
        deepSearch(tails, exclude.concat(obj.poly), resultSet.concat(obj.num));
    });
}

console.log(getResult().reduce((a,b) => a+b));
