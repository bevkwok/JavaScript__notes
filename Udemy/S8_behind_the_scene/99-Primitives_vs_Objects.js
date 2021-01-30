// Primities = number, string, bool, null, undefined
// Objects = array, object, function
// Primities = Primities Types (In Memery)
// Objects = Reference Types (In Memery)
// Because they don't store in memery the same way
// Primities Types (store in call stack, EC)
// Reference Types (store in Heap)

let age = 20;
let oldAge = age;
age = 21;
console.log(age);
console.log(oldAge);

const me = {
    name: 'Beverly',
    age: 23,
};

// when my friend is also called Beverly
const friend = me;
friend.age = 27 // but 27 years old

console.log('Friend: ', friend);
console.log('Me', me);
// This will change the age of me
// Friend:  { name: 'Beverly', age: 27 }
// Me { name: 'Beverly', age: 27 }