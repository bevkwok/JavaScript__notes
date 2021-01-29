// What is object literal?
var person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};

const openingHours = {
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
    // can't do this before ES6, can't compute property name
    [`day-${5-4}`]: {
        close: 24
    }
};

const weekday = ['mon', 'tue', 'wed', 'thu', 'fri'];

const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    // adding opening hours in here (old ways)
    // openingHours: openingHours,

    // ES6 enhanced object literals (new ways)
    openingHours,

    // older way to create method
    order: function(starterIndex, mainIndex){
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },

    // ES6 enhanced way - easier syntax
    order(starterIndex, mainIndex){
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },
}
console.log(restaurant);