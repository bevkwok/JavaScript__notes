//// creating new Map without set

const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
}

const question = new Map([
    ['question', 'What is the best front-end framework?'],
    [1, 'Vue'],
    [2, 'Angular'],
    [3, 'React'],
    ['correct', 3],
    [true, 'You are correct!🥳'],
    [false, 'Sorry, no ☹️']
])

console.log(question); 
//// The result is identical to Object.entries()

console.log(Object.entries(restaurant));

//// Convert object to Map
const restaurantMap = new Map(Object.entries(restaurant));
console.log(restaurantMap);
// * object is not iterable, after Object.entries = iterable

//// Iteration
// log all available answer from question
for (const [key, value] of question) {
    if(typeof key === 'number') console.log(`Answer ${key} : ${value}`);
}
//// get the question
// console.log(question.get('question'));

// const answer = Number(prompt('Your answer'));
// console.log(answer);

// console.log(question.get('correct') === answer);

//// Convert map to array
console.log([...question]);
console.log(question.entries());
console.log(question.keys());
console.log([...question.keys()]);
console.log(question.values());
console.log([...question.values()]);

//// When to use map? When to use object? watch video 118.


