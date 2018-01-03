'use strict';

var myMap = new Map();

// API
/*
set()
get()
size
clear()
has()
*/

myMap.set('foo', 'bar');
myMap.set('Hello', 'World!');
// myMap.clear();

console.log(myMap.get('foo'));
console.log(myMap.has('foo'));
console.log(myMap.size);

for (var key of myMap.keys()) {
  console.log(key);
}

for (var value of myMap.values()) {
  console.log(value);
}

for (var [key, value] of myMap.entries()) {
  console.log(key + ' = ' + value);
}
