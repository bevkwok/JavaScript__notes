// ES6
class Cat {
    constructor(name, weight){
        this.name = name;
        this.weight = weight;
    }

    meowmeow(){
        console.log("Meow Meow");
    }
}
var catA = new Cat("Alex", 12); 

// use "extends" to make new classes that inherit from exisiting classes.

class kitty extends Cat {
    constructor(name){
        super(name, "light weight");
        // super() is a function that call the constructor of parent class
        this.size = "small";
    }

    kittyMeow(){
        //using super to get the parent method
        const meowSound = super.meowmeow();
        console.log(meowSound);
    }
}

const babyCat = new kitty("baby cat");
babyCat.kittyMeow();