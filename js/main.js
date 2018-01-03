'use strict';

function* greet() {
  let friendly = yield 'How';
  console.log(friendly);
  yield 'Are';
  yield 'You';
}

var greeter = greet();


console.log(greeter.next().value);
console.log(greeter.next('the heck').value);
console.log(greeter.next().value);
