/* function saludar1( nombre ){
    console.log( arguments );
    console.log('Hola ' + nombre);
} */

// Retornar un valor
function saludar1( nombre ){
    console.log( arguments );
    console.log('Hola ' + nombre);
    return 1;

    // Esto nunca se va a ejecutar
    console.log('Hola Mundo despues del return');
}

const saludar2 = function( nombre ) {
    console.log('Hola ' + nombre);
}

// Funciones de flecha
const saludarFecha = () => {
    console.log('Hola Mundo');
}

const saludar3 = ( nombre ) => {
    console.log('Hola ' + nombre);
}

const saludar4 = nombre => {
    console.log('Hola ' + nombre);
}

//saludar1();
//saludar1('Angel', 17, false, 'Guatemala');
//saludar2('Rafael');
//saludar3('Juarez');

const retornoDeSaludar1 = saludar1('Angel', 17, false, 'Guatemala'); //1
//console.log(retornoDeSaludar1);

function sumar(a, b){
    return a + b;
}

const sumar2_1 = (a, b) => {
    return a + b;
}

const sumar2_2 = (a, b) => a + b;

function getAleatorio() {
    return Math.random();
}

const getAleatorio2 = () => Math.random();

/* console.log(sumar(1,2));
console.log(sumar2_1(3,2));
console.log(sumar2_1(3,5)); */

console.log(getAleatorio());
console.log(getAleatorio2());