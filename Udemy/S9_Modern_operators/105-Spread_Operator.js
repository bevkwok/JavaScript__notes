'use strict';

const arr = [7, 8, 9];

const newArr = [1, 2, ...arr];
console.log(newArr); //[ 1, 2, 7, 8, 9 ]
console.log(...newArr); // 1 2 7 8 9

//* spread operator works on all iterables: arrays, strings, maps, sets
const str = 'Bev';
const letters = [...str, '', 'K.']
console.log(letters); // [ 'B', 'e', 'v', '', 'K.' ]
console.log(...letters); // B e v  K.

// Object will work too

