// null is a variable, also a type
// JS will return it as object = is a bug

// let vs var
// let is block scope
// var is function scope, try to not use it

// 17. Strings and Template Literals
// easier way to add variable in string
const name = 'Beverly';
const intro = `My name is ${name}, hi!` // ES6 feature
console.log(intro)

// add new line
console.log(`String with \n\ new line \n\ one more`)
// ******** 20. Type Conversion and Coercion

const inputYear = '1991';
console.log(inputYear + 18);  // this will return 199118
// How to convert it to num?
const YearInNum = Number(inputYear);
console.log(YearInNum);

//What is NaN? - An invalid number
// Num to String
String(23);
