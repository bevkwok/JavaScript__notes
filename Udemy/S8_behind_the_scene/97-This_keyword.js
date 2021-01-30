'use strict';

console.log(this); // the window object

const calcAge = function(Year) {
    console.log(2021 - Year);
    console.log(this); 
}
calcAge(1990); // undefined

const arrowFunction = Year => {
    console.log(2021 - Year);
    console.log(this);
}
arrowFunction(1990); // points to window object (parent)

const Bev = {
    year: 1997,
    calcAge: function() {
        console.log(this);
        console.log(2021 - this.year);
    }
}
Bev.calcAge(); // return Bev object

const covid = {
    year: 2019,
}

covid.calcAge = Bev.calcAge; // method borrowing
covid.calcAge(); // points to the object which called the method

const f = Bev.calcAge; // coping object in a variable
f(); // undefined, because f doesn't have a year property