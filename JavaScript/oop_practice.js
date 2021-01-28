class Character{
    constructor(name, health){
        this.name = name;
        this.health = health;
        this.speed = 3;
        this.strength = 3;
    }

    sayName(){
        console.log(`Hi, my name is ${this.name}!`)
    }

    showStats(){
        console.log(`${this.name}'s health : ${this.health}hp speed: ${this.speed} strength: ${this.strength}`)
    }

    eat(){
        this.health += 10;
        console.log(`${this.name} is eating and health increased to ${this.health}`)
    }
}

const ben = new Character("Ben", "100");
ben.sayName();
ben.showStats();
ben.eat();

class StrongCharacter extends Character{
    constructor(name){
        super(name, 150);
        this.speed = 5;
        this.strength = 5;
        this.wisdom = 10;
    }

    speakWisdow(){
        this.eat()
        console.log(`I am super wise now and my health is ${this.health}`);
    }
}

const strongBen = new StrongCharacter("Strong Ben");
strongBen.sayName();
strongBen.speakWisdow();

// about object
// looping through an object doesn't mean they will return in the order you like
// to get all value in order, have to put them into an array first

let user = {
    name: "bev",
    email: "bev@gmail.com",
    like: "105"
}

console.log(Object.values(user));
console.log(Object.keys(user));
//pulling out an array of keys
//use it to loop over the object
//is the best way to loop over an object

let userKeys = Object.keys(user);
console.log(userKeys);

for(let value of userKeys){
    console.log(value);
    console.log(user[value]);
}