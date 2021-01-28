// Special form of function expression

const calcAge2 = function (birthYear){ //this function has no name = anonymise function
    return 2020 - birthYear;
}

// Arrow function
// birthYear = input name
birthYear => 2020 - birthYear; 

// putting the arrow function in a variable
const calcAge3 = birthYear => 2020 - birthYear;
const age3 = calcAge3(1998);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2020 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years`;
}


console.log(yearsUntilRetirement(1991, 'Mary'));