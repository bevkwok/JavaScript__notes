'use strict';

const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    openingHours: {
        thu: {
        open: 12,
        close: 22,
        },
        fri: {
        open: 11,
        close: 23,
        },
        sat: {
        open: 0, // Open 24 hours
        close: 24,
        },
    },

    order: function(starterIndex, mainIndex){
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },

    //// Rest
    orderPizza: function(mainIngredient, ...otherIngredients) {
        console.log(mainIngredient);
        console.log(otherIngredients);
    }
};

restaurant.orderPizza('mushroom', 'onion', 'olives', 'spinash');


////////// Rest Pattern and Parameter
// opposite of spread operator
// it collects multiple element and put them into an array

const arr = [1, 2, ...[3, 4]]; // SPREAD, because it's on right side

const [a, b, ...others] = [1, 2, 3, 4, 5]; // REST, because it's on the left
console.log(a, b, others);
// * rest element needs to be last element
// * only one rest at a time

/// Objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

///// Functions - passing many things into an array
const add = function(...numbers) {
    console.log(numbers);
    let sum = 0;
    for(let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    console.log(sum);
}
add(2 ,3); // [ 2, 3 ]
add(2 ,3, 5, 7, 9); // [ 2, 3, 5, 7, 9 ]
add(1, 2, 5, 2 ,3, 5, 7, 9);

// spread
const x = [23, 5, 7];
add(...x);
//* In this case, add function can take in both an array or a single arguement

