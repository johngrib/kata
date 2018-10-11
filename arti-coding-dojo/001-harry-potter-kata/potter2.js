// http://codingdojo.org/kata/Potter/
// test : mocha potter.js

const assert = require('assert');
const add = (a, b) => a + b;

const BOOK_PRICE = 8;
const DISCOUNT_RATE = [0, 1, 0.95, 0.90, 0.80, 0.75, 0];
const SET_PRICE = DISCOUNT_RATE.map((v, i) => v * i * BOOK_PRICE);

function byIncRate(a, b) {
    var expectA = SET_PRICE[a.size + 1] + SET_PRICE[b.size];
    var expectB = SET_PRICE[a.size] + SET_PRICE[b.size + 1];
    return (expectA < expectB) ? -1 : 1;
}

function price(list = []) {
    return list
        .reduce((setList, book) => put(setList, book), [])
        .map(set => SET_PRICE[set.size])
        .reduce(add);
}

function put(setList, book) {
    const set = setList.sort(byIncRate).find(s => !s.has(book));
    if (set) {
        set.add(book);
    } else {
        setList.push(new Set([book]));
    }
    return setList;
}

describe('calc book price', function () {
    it('test basics', function () {
        // assert.equal(0, price([]));
        assert.equal(8, price([0]));
        assert.equal(8, price([1]));
        assert.equal(8, price([2]));
        assert.equal(8, price([3]));
        assert.equal(8, price([4]));
        assert.equal(8 * 2, price([0, 0]));
        assert.equal(8 * 3, price([1, 1, 1]))
    });
    it('test simple discounts', function () {
        assert.equal(8 * 2 * 0.95, price([0, 1]))
        assert.equal(8 * 3 * 0.9, price([0, 2, 4]))
        assert.equal(8 * 4 * 0.8, price([0, 1, 2, 4]))
        assert.equal(8 * 5 * 0.75, price([0, 1, 2, 3, 4]))
    });
    it('test several discounts', function () {
        assert.equal(8 + (8 * 2 * 0.95), price([0, 0, 1]))
        assert.equal(2 * (8 * 2 * 0.95), price([0, 0, 1, 1]))
        assert.equal((8 * 4 * 0.8) + (8 * 2 * 0.95), price([0, 0, 1, 2, 2, 3]))
        assert.equal(8 + (8 * 5 * 0.75), price([0, 1, 1, 2, 3, 4]))
    });
    it('test edge cases', function () {
        assert.equal(2 * (8 * 4 * 0.8), price([0, 0, 1, 1, 2, 2, 3, 4]))
        assert.equal(
            3 * (8 * 5 * 0.75) + 2 * (8 * 4 * 0.8),
            price([0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 3, 4, 4, 4, 4]))
    });
     it('in arti room', function () {
        assert.equal(8, price([0]))
        assert.equal(16, price([0, 0]))
        assert.equal(15.20, price([0, 1]))
        assert.equal(51.20, price([0,0,1,1,2,2,3,4]))
        assert.equal(150, price([0,0,0,0,0,1,1,1,1,1,2,2,2,2,2,3,3,3,3,3,4,4,4,4,4]))
        assert.equal(132.4, price([0,0,0,0,0,1,1,1,1,1,2,2,2,2,2,3,3,3,4,4,4]))
    })
});
