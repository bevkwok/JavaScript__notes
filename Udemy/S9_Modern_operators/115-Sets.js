// ES6 introduced 2 more data strucutre: sets and maps
///////// SETS
// A set = a collection of unique values, can't have duplicates
// new Set(), put literable in ()

console.log(new Set('Beveryly')); // Set(6) { 'B', 'e', 'v', 'r', 'y', 'l' }

const ordersSet = new Set(['Paste', 'Pizza', 'Pizza', 'Risotto', 'Paste']);

console.log(ordersSet); // Set(3) { 'Paste', 'Pizza', 'Risotto' }
console.log(ordersSet.size); // 3
console.log(ordersSet.has('Pizza')); // true
ordersSet.add('Garlic Bread');
ordersSet.add('Garlic Bread');
ordersSet.delete('Paste');
// ordersSet.clear()  <= This delete all elements
console.log(ordersSet); // Set(4) { 'Pizza', 'Risotto', 'Garlic Bread' }

for (const order of ordersSet) console.log(order);
// Set are literables and the order of elements is irrelevant


/////// Main use case - delete duplicate
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef']
const allPosition = new Set(staff);
console.log(allPosition); // Set(3) { 'Waiter', 'Chef', 'Manager' }
const positionArray = [...allPosition];
console.log(positionArray); // [ 'Waiter', 'Chef', 'Manager' ]
const positionArray2 = [...new Set(staff)];
console.log(positionArray2); // [ 'Waiter', 'Chef', 'Manager' ]
