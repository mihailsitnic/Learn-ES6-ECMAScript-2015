'use strict';

function* greet() {
  console.log(`greetors are 'lazy'`);
  yield 'How';
  console.log(`I'm not called until the second next`);
  yield 'Are';
  console.log(`Call me before 'you?'`);
  yield 'You';
  console.log(`Called when 'done'`);
}

var greeter = greet();

for (let word of greeter) {
  console.log(word);
}

// console.log(greeter.next());
// console.log(greeter.next());
// console.log(greeter.next());
// console.log(greeter.next());
