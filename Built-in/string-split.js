const str = 'Apple is a red fruit that I like'

// cut the string everytime there is a blankspace
const words = str.split(' '); 
console.log(words);
/* [
    'Apple', 'is',
    'a',     'red',
    'fruit', 'that',
    'I',     'like' 
    ]
*/


// cut the string at each chars
const chars = str.split('');
console.log(chars);
/*
    [
    'A', 'p', 'p', 'l', 'e', ' ',
    'i', 's', ' ', 'a', ' ', 'r',
    'e', 'd', ' ', 'f', 'r', 'u',
    'i', 't', ' ', 't', 'h', 'a',
    't', ' ', 'I', ' ', 'l', 'i',
    'k', 'e'
    ]
*/

//copy the whole string, not a cutting point
const strCopy = str.split();
console.log(strCopy);
// [ 'Apple is a red fruit that I like' ]