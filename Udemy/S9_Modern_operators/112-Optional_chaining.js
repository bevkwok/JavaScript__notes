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
}
// Let say we are unaware if the restaurant open on Monday
console.log(restaurant.openingHours.mon); 
// undefined
// console.log(restaurant.openingHours.mon.open); 
// TypeError: Cannot read property 'open' of undefined

if(restaurant.openingHours.mon) {
    console.log(restaurant.openingHours.mon.open);
} // unreadable, what if openingHours = undefined?

// ES2020 solution - Optional Chaining
console.log(restaurant.openingHours.mon?.open); // undefined
// only if whatever before the ? exist, then after ? will be read or will return undefined.

console.log(restaurant.openingHours?.mon?.open); // undefined
// checking if openingHours and mon exsit

//// More pratical way to use
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat'];

for (const day of days) {
    console.log(day);
    const open = restaurant.openingHours[day]?.open ?? 'closed';
    // if can't find open in the day, default = closed
    // ?. and  ?? works well together
    console.log(`On ${day}, we open at ${open}`);
}

//// Methods
console.log(restaurant.order?.(0,1) ?? 'Method does not exist');
// [ 'Focaccia', 'Pasta' ]

console.log(restaurant.orderRisotto?.(0,1) ?? 'Method does not exist');
// Method does not exist

//// Arrays
const users = [
    {name: 'bev', email: 'b@gmail.com'}
];

console.log(users[0]?.name); // bev
// if users[0] exist, console log the name of that user
console.log(users[1]?.name); // undefined
console.log(users[1]?.name ?? 'User doesn\'t exsit'); // User doesn't exsit




