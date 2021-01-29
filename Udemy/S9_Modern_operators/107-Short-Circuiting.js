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
};


//// 3 things about & and || operator
// they can use any data type
// they can return any data type
// they can do short-circuiting (short-circuit evaluation)

// || operator Short-Circuiting (if the first value is a truthy value, the value will be return immediately )
console.log('----- OR -----');
console.log(3 || 'Jonas'); // 3
console.log('' || 'Jonas'); // Jonas
console.log(true || 0); // true
console.log(undefined || null); // null
console.log(undefined || 0 || '' || 'Hello' || 23 || null); // 'Hello'

//// Using it with restaurant object
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);
const guests2 = restaurant.numGuests || 10;
console.log(guests2);


// & operator short-circuit when the first value is falsy
// if the first element is false, the whole statement is false
console.log('----- AND -----');
console.log(0 && 'Jonas'); // 0
console.log('Bev' && 0); // 0
console.log(7 && 'Bev'); // Bev
console.log('hi' && 23 && null & 'bev'); // null (one false = false)

//// Using it with restaurant object
if (restaurant.orderPizza) {
    restaurant.orderPizza('mushrooms', 'spinach');
}
// if the orderPizza is true, it will run orderPizza
// if orderPizza is false, it will return false
restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');


