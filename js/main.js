'use strict';
// promises with ES6(2015)
var d = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (true) {
      resolve('Hello, World!');
    } else {
      reject('No, bueno');
    }
  }, 2000);
});

d.then((data) => console.log('success : ', data)).
  catch((error) => console.error('error : ', error));
// d.catch((error) => console.error('error : ', error));
