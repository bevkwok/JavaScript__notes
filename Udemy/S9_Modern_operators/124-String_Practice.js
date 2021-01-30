const flights =
    '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const splitFlights = flights.split('+');
console.log(splitFlights);

for (const f of splitFlights) {
    const [status, from, to, time] = f.split(';');
    const output = `${status.startsWith('_Delayed') ? '🔴' : ''}${status.replace(/_/g, ' ')} from ${from.slice(0, 3).toUpperCase()} to ${to.slice(0, 3).toUpperCase()} (${time.replace(':', 'h')})`.padStart(45);
    console.log(output);
}

console.log(Math.max(0, 10));