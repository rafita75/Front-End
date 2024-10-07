let personaje = {
    nombre: 'Tony Stark',
    codeName: 'Iroman',
    vivo: false,
    edad: 40,
    coords: {
        lat: 34.034,
        lng: -118.70,
    },
    trajes: [
        'Mark I',
        'Mark V',
        'Hulkbuster',
    ],
    direccion:{
        zip: '10880, 90265',
        ubicacion: 'Malibu, California',
    },
    'ultima-pelicula': 'Infinity War',

};

console.log({personaje});

console.log('Nombre', personaje.nombre);
console.log('Nombre', personaje['nombre']);
console.log('Edad', personaje.edad);

console.log('Coord', personaje.coords);
console.log('Lat', personaje.coords.lat);

console.log('No. Trajes', personaje.trajes.length);
console.log('Ultimo Traje', personaje.trajes[ personaje.trajes.length - 1]);

const x = 'vivo';

console.log('Vivo', personaje[x]);

console.log('Ultima película', personaje['ultima-pelicula']);
// no se permite utilizar el . para acceder a esa propiedad 

// Eliminar una propiedad 

delete personaje.edad;
console.log(personaje);

// Crear una nueva propiedad
personaje.casado = true;

// "Transformarlo en array"
const entriesPares = Object.entries(personaje);
console.log(entriesPares);

// Para no poder modificar el objeto
Object.freeze(personaje)

personaje.dinero = 10000000000;
personaje.casado = false; // no se modifica 
personaje.direccion.ubicacion = 'Costa Rica'; // se modifica por que es una propiedad del objeto direccion

console.log(personaje); // no se crea 

//Listado de todas las propiedades de un objeto

const propiedades = Object.getOwnPropertyNames(personaje);
console.log(propiedades);

const valores = Object.values(personaje);
console.log(valores);

// Documentación 
// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects