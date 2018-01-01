'use strict';

function varFunc() {
  var previos = 0;
  var current = 1;
  var i;
  var temp;
  for (i = 0; i < n; i += 1) {
    temp = previos;
    previos = current;
    current = temp + current;
  }
}

function letFunc() {
  let previos = 0;
  let current = 1;
  for (let i = 0; i < n; i += 1) {
    let temp = previos;
    previos = current;
    current = temp + current;
  }
}
