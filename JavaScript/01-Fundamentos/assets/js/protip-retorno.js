/* function crearPersona( nombre, apellido){
    return {
        nombre: nombre,
        apellido: apellido,
    }
} */

    // PROTIP

const crearPersona = ( nombre, apellido ) => ({nombre, apellido});

const persona = crearPersona('Angel', 'Juarez');
console.log(persona);

function imprimeArgumentos() {
    console.log( arguments );
}

/* const imprimeArgumentos2 = () => {
    console.log( arguments );
} */ // Error

const imprimeArgumentos2 = (edad,  ...args) => {
    //console.log( edad, args );
    return args;
}

imprimeArgumentos('10', true, false, 'Angel', 'Hola');
/* const argumentos = imprimeArgumentos2('10', true, false, 'Angel', 'Hola'); // Error 
console.log(argumentos); */
const [casado, vivo, nombre, saludo] = imprimeArgumentos2('10', true, false, 'Angel', 'Hola');
console.log({casado, vivo, nombre, saludo});

const {apellido : nuevoApellido} = crearPersona('Angel', 'Juarez');
console.log({nuevoApellido});

//Desestructuración de objetos

const tony = {
    nombre: 'Tony Stark',
    codeName: 'Iroman',
    vivo: false,
    //edad: 40,
    trajes: [
        'Mark I',
        'Mark V',
        'Hulkbuster',
    ],
};

/* const imprimePropiedades = (personaje) => {
    console.log(personaje.nombre);
    console.log(personaje.codeName);
    console.log(personaje.vivo);
    console.log(personaje.edad);
    console.log(personaje.trajes);   
}
 */
const imprimePropiedades = (nombre, codeName, vivo, edad = 18/* por si no existe una propiedad y no hacer validaciones se define el valor */, trajes) => {
    console.log({nombre});
    console.log({codeName});
    console.log({vivo});
    console.log({edad});
    console.log({trajes});   
}

imprimePropiedades(tony); 