'use strict';

// "this" keyword related examples

const Bev = {
    firstName: 'Beverly',
    year: 1997,
    calcAge: function() {
        console.log(this);
        console.log(2021 - this.year);

        const isMillenial = function() {
            // console.log(this.year <= 1981);
        };
        isMillenial();
    },
    greet: () => console.log(`Hi ${this.firstName}`),
}

Bev.greet(); 

// undefined, arrow function "this"  points to parent object
// unless declaring var firstName = Beverly outside the Bev object

// ** don't use arrow function for a method **

// After creating a function inside the Bev.calaAge method
Bev.calcAge();  // Cannot read property 'year' of undefined
// ** "this" = undefined when it's in a functino
// 2 solutions for problem above
const self = this; // then use self.year 
// changing isMillenial function to an arrow function


// ----- ARGUEMENTS KEYWORD -----

const addExpression =  function (a, b){
    console.log(arguments);
    return a + b;
}
addExpression(1,3);
addExpression(1,3,5,7,9); 
// [Arguments] { '0': 1, '1': 3, '2': 5, '3': 7, '4': 9 }


var addArrow = (a, b) => {
    console.log(arguments);
    return a + b;
} 
addArrow(2,4); // argument is not undefined, doesn't work for arrow functions