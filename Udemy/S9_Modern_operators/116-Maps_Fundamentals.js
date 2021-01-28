//// What is map?
// a data structure used to map values to keys, like an object

//// Map vs Object
// Map key can be any types, Object key only string

const rest = new Map();
rest.set('name', 'Panda Express'); // key, value
rest.set(1, 'Seattle, WA');
rest.set(2, 'Lynnwood, WA');

console.log(rest.set('2', 'Lynnwood, WA'));
console.log(rest.set('categories', ['Chinese', 'Fast Food', 'Take Out']));
console.log(rest.set('open', 11)
    .set('close', 23)
    .set(true, 'We are open :D')
    .set(false, 'We are close :('));

    console.log(rest.get(1));

const time = 21;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

//// Check if key is in map
console.log(rest.has('categories')); // true
console.log(rest.has('1')); // false

//// Delete a key
console.log(rest.delete('2'));
console.log(rest);

//// Get size of map
console.log(rest.size);

//// Delete the whole map
console.log(rest.clear());

//// Array and object can be a map key too
console.log(rest.set([1, 2], 'Test')); // can't retrieve this way
console.log(rest.get([1, 2])); // undefined
// How to retrieve that key and value
// assign a variable to an array or objec first
const arr = [1, 2];
console.log(rest.set(arr, 'Test2'));
console.log(rest.get(arr)); // Test2

//// Can even store DOM
rest.set(document.querySelector('h1'), 'Heading');
// this will return an object