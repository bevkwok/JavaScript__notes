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

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

//// Property NAMES

const properties = Object.keys(restaurant.openingHours);
console.log(properties); 
// [ 'thu', 'fri', 'sat' ]
// * properties is an array

let openStr = `We open ${properties.length} days: `

for (const day of properties) {
    openStr += `${day}, `
}
console.log(openStr); // We open 3 days: thu, fri, sat, 

for (const day of Object.keys(restaurant.openingHours)) {
    console.log(day);
}

//// Property VALUES
const values = Object.values(restaurant.openingHours);
console.log(values);
/*
[
    { open: 12, close: 22 },
    { open: 11, close: 23 },
    { open: 0, close: 24 }
]
*/
const entries = Object.entries(restaurant.openingHours);
console.log(entries); // turns objects into an array
/*
[
    [ 'thu', { open: 12, close: 22 } ],
    [ 'fri', { open: 11, close: 23 } ],
    [ 'sat', { open: 0, close: 24 } ]
]
*/
for (const x of entries) {
    console.log(x);
}
/* 
[ 'thu', { open: 12, close: 22 } ]
[ 'fri', { open: 11, close: 23 } ]
[ 'sat', { open: 0, close: 24 } ]
*/

for (const [key, {open, close}] of entries) {
    console.log(`On ${key}, we open at ${open} and close at ${close}`);
}
/*
On thu, we open at 12 and close at 22
On fri, we open at 11 and close at 23
On sat, we open at 0 and close at 24
*/