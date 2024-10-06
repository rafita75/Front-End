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