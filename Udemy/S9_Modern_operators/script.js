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


  // orderDelivery: function(obj) {
  //   console.log(obj);
  // }
  // can actually do destructuring right away

  orderDelivery: function({starterIndex, mainIndex, time, address}) {
    console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
  },
  // all variables are from one object

  // can also set default value
  orderDelivery1: function({starterIndex = 1, mainIndex = 1, time = '20:00', address}) {
    console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
  },

  // spread operator
  orderPasta: function(ing1, ing2, ing3) {
    console.log(`Paste with ${ing1}, ${ing2}, ${ing3}`);
  }
};

restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery1({
  address: 'Via del Sole, 21',
})

////////// Destructuring Objects
// in this case, variable name equal to property name
const {name, openingHours, categories} = restaurant;
console.log(name, openingHours, categories);

// want different variable name
// property name: variable name
const{name: restaurantName, openingHours: hours, categories:tags} = restaurant;
console.log(restaurantName, hours, tags);

// setting a default value in case returning undefined
const { menu = [], starterMenu: starters =[]} = restaurant;
console.log(menu, starters);

// mutate variables while destructuring
let a = 111;
let b = 999;
const obj = {a: 23, b: 7, c: 14};
// want to change 111 to 23 and 999 to 7
// {a, b} = obj; SyntaxError: Unexpected token '='
({a, b} = obj);
console.log(a, b);

// destructuring nested objects
const {fri} = openingHours;
console.log(fri); // { open: 11, close: 23 }
const {sat: {open, close}} = openingHours;
console.log(open, close); // 0 24
const {thu: {open: o, close: c}} = openingHours;
console.log(o, c); // 12 22


////////// Destructuring Arrays
let [first1, second] = restaurant.categories;
console.log(first1, second);
let [first2, , third] = restaurant.categories;
console.log(first2, third);

// Switching variable using destructuring
[first2, third] = [third, first2];
console.log(first2, third);


console.log(restaurant.order(2, 0));
const [starter, main] = restaurant.order(2, 0);
console.log(starter, main);


////////// Spread operator

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);
// a little similar to destructuring because it also help get elements out of arrays
// but spread operator doesn't create new variables
// best use with things that seperated by ,

//// Create swallow copy
const mainMenuCopy = [...restaurant.mainMenu];

//// Merge 2 arrays together
const entireMenu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(entireMenu);

//* spread operator works on all iterables: arrays, strings, maps, sets
const str = 'Bev';
const letters = [...str, '', 'K.']
console.log(letters); // [ 'B', 'e', 'v', '', 'K.' ]

// const ingredients = [prompt('Let\'s make pasta! Ingredient 1?'), prompt('Let\'s make pasta! Ingredient 2?'), prompt('Let\'s make pasta! Ingredient 3?')]

// console.log(ingredients);

// restaurant.orderPasta(...ingredients);

// or restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);

//// Objects with spread operator
const newRestaurant = {...restaurant, founder: 'Bev', foundedIn: 2002};
console.log(newRestaurant);

//// swallow copy 