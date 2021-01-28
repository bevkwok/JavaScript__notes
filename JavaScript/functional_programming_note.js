// map()
// a function that applies a callback function to each item in an array
// and return a new array

const values = [1,2,3,4,5];
const cubes = values.map( val => val**3 );
//anonymous function that passed in val and return val^3
// return [1, 8, 27, 64, 125]


//filter()
const values2 = [1, 2, 3, 4, 5];
const oddCubes = values2.filter( val => val % 2 !==0 ).map( val => val**3 );
// return [1, 27, 125]


// practice assignment

const pokemon = Object.freeze([
    { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
    { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
    { "id": 9,   "name": "Blastoise",  "types": ["water"] },
    { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
    { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
    { "id": 23,  "name": "Ekans",      "types": ["poison"] },
    { "id": 24,  "name": "Arbok",      "types": ["poison"] },
    { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
    { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
    { "id": 52,  "name": "Meowth",     "types": ["normal"] },
    { "id": 63,  "name": "Abra",       "types": ["psychic"] },
    { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
    { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
    { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
    { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
    { "id": 98,  "name": "Krabby",     "types": ["water"] },
    { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
    { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
    { "id": 133, "name": "Eevee",      "types": ["normal"] },
    { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
    { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
    { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
    { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
]);

var idDivideBy3 = pokemon.filter( p => p.id % 3 === 0);
var fireType = pokemon.filter( p => p.types.includes("fire"));
var multiType = pokemon.filter( p => p.types.length > 1);
var justName = pokemon.map( p => p.name);
var nameIdAbout99 = pokemon.filter( p => p.id > 99).map( p => p.name);
var poisonPokemon = pokemon.filter( p => p.types.includes("poison")).filter(p => p.types.length === 1);

var justType = pokemon.filter(p => p.types.length > 1).filter(p => p.types[1].includes("flying")).map( p => p.types[0]);

var normalCount = pokemon.filter(p => p.types.includes("normal")).length;

console.log(normalCount);
