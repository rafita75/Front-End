let juegos = ['Zelda', 'Mario', 'Metroid', 'Chrono'];
console.log('Largo', juegos.length);

let primero = juegos[ 2 - 2];
let ultimo = juegos[ juegos.length - 1];

console.log({ primero, ultimo });

// Recore un array

juegos.forEach( (elemento, indice, arr) => {
    console.log({elemento, indice, arr});
});

// Agregar un nuevo Elemento

let nuevaLongitud = juegos.push( 'F-Zero');

console.log({nuevaLongitud, juegos}); // 5

// Agregar un nuevo Elemento al inicio del array

nuevaLongitud = juegos.unshift( 'Fire Emblem' );

console.log({nuevaLongitud, juegos});

// Remueve el ultimo Elemento de un array

let juegoBorrado = juegos.pop();
console.log({juegoBorrado, juegos});

// Borrar x cantidad de elementos desde una posicion 

let pos = 1;

console.log(juegos);
let juegosBorrados = juegos.splice(pos, 2);
console.log({juegosBorrados, juegos});

// Indentificar el indice de un Elemento de un arreglo

let metroidIndex = juegos.indexOf('Metroid');
console.log(metroidIndex); // Si no se encuentra retorna -1
