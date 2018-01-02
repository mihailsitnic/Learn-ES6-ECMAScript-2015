'use strict';

let first = [1,2,3];
let second = [4,5,6];
first.push(second);
first.push(...second);

console.log([1,2,3]);
console.log(...[1,2,3]);
console.log(first);
console.log(...first);
