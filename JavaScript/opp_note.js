// tranditional way to make class, tranditional OOP
// OOP became very popular, so js also find a way to make object and classes
// object base language

// create a function that can create an animal
// Pair objects and functions to create constructor
var Animal = function Animal(name, weight){
    this.name = name;
    this.weight = weight;
}
// using the functino to make a new animal
var oscar = new Animal("Oscar", 14);


// Another way to create class
// ES6
class Cat {
    constructor(name, weight){
        this.name = name;
        this.weight = weight;
    }
}
var catA = new Cat("Alex", 12); 
// key word "new" and  "this." make them a class
// the reason why it's OOP is how the instances attach to the class name

// One more way to create object
var CatCreator = function CatCreator(name, weight){
    return {name: name, weight: weight};
}
var catB = CatCreator("Baba", 14);


// Prototype 
// attaching thing through prototype
// allows us to attach function to classes
Cat.prototype.meow = function(){
    console.log("Meow");
}
console.log(catA.meow());

// Prototype example 2
var x = [1,2,3];
Array.prototype.arrLength = function(){
    console.log(this.length);
}
console.log(x.arrLength());
// In tranditional OOP, the class itself is not an instance
// In Prototypo OOP, the class is an instance called the prototype
// and from that prototype, we create the instances and allow them to inherit behavior.
// *instance = object