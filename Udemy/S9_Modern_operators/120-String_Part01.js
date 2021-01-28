const airline = 'Hong Kong Airline';
const plane = 'A320';

console.log(plane[0]); // A
console.log(plane[1]); // 3
console.log(plane[2]); // 2

console.log('B737'[0]); // B
console.log(airline.length); // 17
console.log('B737'.length); // 4

////// Methods
//// indexof()
console.log(airline.indexOf('l')); // 13
console.log(airline.lastIndexOf('g')); // 8
console.log(airline.indexOf('Kong')); // 5

//// slice();
console.log(airline.slice(5)); // Kong Airline 
console.log(airline.slice(5, 9)); // Kong
// try to get the word Hong
console.log(airline.slice(0, airline.indexOf(' '))); 
// airline.indexOf(' ') => find the first empty space

// try to get the last word
console.log(airline.slice(airline.lastIndexOf(' ') + 1));

// try to get word from the end
console.log(airline.slice(-4)); // line
console.log(airline.slice(5, -4)); // Kong Air

// Practice - write a function
const checkMiddleSeat = function(seat) {
    // B and E are middle seats
    const s = seat.slice(-1);
    if(s === 'B' || s === 'E') console.log('Middle seat');
    else console.log('Window. YEAH!');
}
console.log(checkMiddleSeat('11B'));
console.log(checkMiddleSeat('3C'));
console.log(checkMiddleSeat('9E'));

////// Why can we use all the method on string?
// JS do boxing with string, put string into an object
