//////// More string method

const airline = 'Hong Kong Airline';
const plane = 'A320';
//// Case
console.log(airline.toLowerCase()); // hong kong airline
console.log(airline.toUpperCase()); // HONG KONG AIRLINE
// Practice - bEverly to Beverly
const name = 'bEverly';
const nameLower = name.toLowerCase();
const nameCorrect = nameLower[0].toUpperCase() + nameLower.slice(1);

console.log(name); // bEverly
console.log(nameLower); // beverly
console.log(nameCorrect); // Beverly

//// Comparing email
const email = 'hello@bev.io';
const login = ' Hello@Bev.Io \n';

const lowerLogin = login.toLowerCase();
const trimmedLogin = lowerLogin.trim();
console.log(lowerLogin);
//  hello@bev.io 

console.log(trimmedLogin); // hello@bev.io

const normalEmail = login.toLowerCase().trim();
console.log(normalEmail); // hello@bev.io

////// Replacing
const priceGB = '288,98£'
const priceUS = priceGB.replace('£', '$').replace(',', '.');
console.log(priceUS);

const announce = 'come to boarding door 23. Boarding door 23'
console.log(announce.replace('door', 'gate')); 
// come to boarding gate 23. Boarding door 23

// console.log(announce.replaceAll('door', 'gate'));
//// regular expression
console.log(announce.replace(/door/g, 'gate')); 
// come to boarding gate 23. Boarding gate 23

////// Booleans
const newPlane = 'A320neo';
console.log(newPlane.includes('A32')); // true
console.log(newPlane.includes('Boeing')); // false
console.log(newPlane.startsWith('Air')); // false
console.log(newPlane.endsWith('neo')); // true
// Practice
const checkBaggage = function(item) {
    const itemLower = item.toLowerCase();
    if(itemLower.includes('knife') || itemLower.includes('gun')) {
        console.log('Not allowed on board');
    } else {
        console.log('Welcome aboard!');
    }
};
checkBaggage('laptop, Food, pocket knife'); // Not allowed on board
checkBaggage('socks, camera'); // Welcome aboard!
checkBaggage('gun, snacks'); // Not allowed on board

