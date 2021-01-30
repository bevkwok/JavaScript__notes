'use strict';

let name = 'Amy';
let oldName = name;
name = 'Annie'
console.log(name, oldName);

const me = {
    name: 'bev',
    lastName: 'Kwok',
    age: 23
};

const olderMe = me;
olderMe.age = 24;

console.log(me); 
// { name: 'bev', lastName: 'Kwok', age: 24 }
console.log(olderMe); 
// { name: 'bev', lastName: 'Kwok', age: 24 }
// same result because the variable name points to a memory address in HEAP

// olderMe = {}; 
// this won't work because it point to a different memory address in the call stack

// Copying Objects

const me2 = {
    name: 'bev',
    lastName: 'Kwok',
    age: 23
};

const meCopy = Object.assign({}, me2); // this create a new object ** SHALLOW COPY **

meCopy.age = 24;

console.log(meCopy);
console.log(me2);

