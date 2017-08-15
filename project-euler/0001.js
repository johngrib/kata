// javascript , underscore.js

function checkNumber(n) {
    return n % 3 === 0 || n % 5 === 0;
}

function add(a,b) {
    return a + b;
}

_.range(1,1000).filter(checkNumber).reduce(add, 0);
