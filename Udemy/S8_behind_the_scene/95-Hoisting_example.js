/*
console.log(me); 
// undefined
console.log(job);
// Cannot access before initialization
console.log(year);
// Cannot access before initialization
*/

var me = 'Bev';
let job = 'Developer';
const year = '1997';


/*
console.log(declaration(1,2));
// 3
console.log(expression(1,2));
// Cannot access 'expression' before initialization
console.log(expressAgain);
// TypeError: expressAgin is not a function
*/

function declaration(a,b){
    return a + b;
}
const expression = (a,b) => a + b;
var expressAgain = (a, b) => a + b;

// Good practice
// use cont and let 
// variable should be at the top of its scope
// declare all function first and use them after declaration. 

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x); 
// this return true
// using the var variable will create a property in window object
console.log(y === window.y);  // false
console.log(z === window.z);  // false

