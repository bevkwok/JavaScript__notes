const bev = {
    firstName: 'Bev',
    lastName: 'Kwok',
    birthYear: 1996,
    job: 'developer',
    calcAge: function(){ // this is a method that create age property for Bev
        this.age = 2020 - this.birthYear;
        return this.age;
    },
}

console.log(bev);
console.log(bev.firstName);
console.log(bev['lastName']);

const nameKey = 'Name';
console.log(bev['first' + nameKey]);
console.log(bev['last' + nameKey]);

// const interstedIn = prompt('What do you want to know about Bev? Choose between firstName, lastName, age, job and friends');
// console.log(bev.interstedIn); //this will return undefined
// console.log(bev[interstedIn]); //this will work

//Try to print Bev is a 24 years old developer

console.log(`${bev.firstName} is a ${bev.calcAge()} years old ${bev.job}` );