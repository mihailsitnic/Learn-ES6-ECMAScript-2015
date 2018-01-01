'use strict';

let recive = (complete = () => console.log('complete')) => complete();
recive();
