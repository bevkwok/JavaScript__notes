'use strict';

//// set some parameters to default so you don't have to set them
const booking = [];

const createBooking = function(flightNum, numPassengers, price) {
    // create an object
    const booking = {
        flightNum,
        numPassengers,
        price
    }

    console.log(booking);
    // push object to booking array;
    booking.push(booking);
}

createBooking('LH123', '');