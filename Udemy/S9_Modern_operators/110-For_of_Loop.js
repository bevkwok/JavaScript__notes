'use strict';

const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
}

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for(const item of menu) console.log(item); // get the element

for(const item of menu.entries()) console.log(item); // get the index

// What is .entries() ?
console.log(menu.entries()); // Object [Array Iterator] {}
console.log([...menu.entries()]); // Object [Array Iterator] {}
/*
[
    [ 0, 'Focaccia' ],
    [ 1, 'Bruschetta' ],
    [ 2, 'Garlic Bread' ],
    [ 3, 'Caprese Salad' ],
    [ 4, 'Pizza' ],
    [ 5, 'Pasta' ],
    [ 6, 'Risotto' ]
]
*/

for (const item of menu.entries()) {
    console.log(`${item[0] + 1}: ${item[1]}`);
}
/*

1: Focaccia
2: Bruschetta
3: Garlic Bread
4: Caprese Salad
5: Pizza
6: Pasta
7: Risotto

*/

for (const [i, item] of menu.entries()) {
    console.log(`${i + 1}: ${item}`);
}