// String 
let nombre = 'Angel Juarez';
console.log(nombre); 

nombre = 'Kevin Juarez';
console.log(nombre);

nombre = "Celso Juarez";

console.log( typeof nombre ); // String

nombre =  123;

console.log( typeof nombre ); // Number

// Booleanos 
let esMarvel = true;
esMarvel = false;

console.log(esMarvel);
console.log( typeof esMarvel ); // Boolean

// Numeros
let edad = 17;
console.log( typeof edad ); // Number   

edad = 17.001;
console.log( typeof edad ); // Number

// camelCase
let superPoderDeSpiderMan; 
console.log( typeof superPoderDeSpiderMan ); // Undefined

// snakeCase - no muy comun en js
let super_poder_de_spider_man;

// Nulos
let soyNull = null;
console.log( typeof soyNull ); // object

// Symbol 
let symbol1 = Symbol('a');
let symbol2 = Symbol('a');

console.log( typeof symbol1 ); // symbol

console.log( symbol1 === symbol2 ); // false