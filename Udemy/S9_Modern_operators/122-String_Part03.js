////// More Methods

//// split()
console.log('a+very+nice+string'.split('+')); // [ 'a', 'very', 'nice', 'string' ]

const [firstName, lastName] = 'Beverly Kwok'.split(' ');
console.log(firstName); // Beverly
console.log(lastName); // Kwok

//// join() - opposite of split
const newName = ['Ms.', firstName, lastName].join(' ');
console.log(newName); // Ms. Beverly Kwok

// Captialized a name
const captializedName = function(name) {
    const seperatedName = passenger.split(' ');
    const namesUpper = [];
    for (const n of seperatedName) {
        namesUpper.push(n[0].toUpperCase() + n.slice(1));
    }
    console.log(namesUpper.join(' '));
}
const passenger = 'jessica ann smith davis';
console.log(captializedName(passenger)); // Jessica Ann Smith Davis

// Challenge
const captializedName2 = function(name) {
    const seperatedName = passenger.split(' ');
    const namesUpper = [];
    for (const n of seperatedName) {
        namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
    }
    console.log(namesUpper.join(' ')); 
}
console.log(captializedName2(passenger)); // Jessica Ann Smith Davis

////// Padding a string to a desired length
const message = 'head to gate 23!';
console.log(message.padStart(25, '+')); // +++++++++head to gate 23!
console.log('bev'.padStart(25, '+')); // ++++++++++++++++++++++bev
console.log('bev'.padEnd(25, '-')); // bev----------------------
console.log('bev'.padStart(25, '+').padEnd(30, '-'));
// ++++++++++++++++++++++bev-----

// real world example
const maskCreditCard = function(number) {
    const str = number + '';
    const last4 = str.slice(-4);
    return last4.padStart(str.length, '*');
}
console.log(maskCreditCard(4444222233330101));


////// repeat()
const warning = 'Bad weather... All Departures Delayed...';
console.log(warning.repeat(3));

//// replace()
const sentense = 'I am a cat';
console.log(sentense.replace('cat', 'human'));