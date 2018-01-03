'use strict';

function* greet() {
  console.log(`You called 'next()'`);
  yield 'Hello';
}

let greeter = greet();
console.log(greeter);

let next = greeter.next();
console.log(next);

let done = greeter.next();
console.log(done);
