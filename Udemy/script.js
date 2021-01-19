'use strict'; 
//this activate strict mode, must be first line
//forbid developer to do certain thing

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriverLicense = true; // misspell hasDriversLicense
// if (hasDriversLicense) console.log('I can drive :D');


//Function Declaration
// You can call this function before it got defined 
const age1 = calcAge1(1992);
function calcAge1(birthYear){ // birthYear = parameter is this one
    return 2020 - birthYear;;
}
const age1 = calcAge1(1992); // 1992 = arguement


//Function Expression, this produce a value
const age2 = calcAge2(1996); // You can't call calcAge2 here, will return error
const calcAge2 = function (birthYear){ //this function has no name = anonymise function
    return 2020 - birthYear;
}
// calcAge2 is a variable that holds the value returned by the anonymise function
const age2 = calcAge2(1996);

console.log(age1, age2);