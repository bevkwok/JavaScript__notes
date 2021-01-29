'use strict';

// Destructuring = break a complex data structure down to variable

const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];
// destructuring an array to get the same result
const [x, y, z] = arr;  // destructuring assignment
console.log(x, y, z);

// Destructuring - Nested Array
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
const [i, , [j, k]] = nested;
console.log(i ,j, k);

// Default value - unknown array
// setting a default in case of returning null
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);