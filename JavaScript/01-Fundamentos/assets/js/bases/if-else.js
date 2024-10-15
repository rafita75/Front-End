let a = 10;

if (a >= 10) {
    console.log('A es mayor o igual a 10');
} else {
    console.log('A es menor a 10');
}

// console.log("Fin de programa");

const hoy = new Date(); // crear una instancia de Date
let dia = hoy.getDay(); // 0: Domingo, 1: Lunes, ...

console.log({dia});
/* 
if ( dia === 0 ){
    console.log('Domingo');
} else {
    if ( dia === 1 ) {
        console.log('Lunes');
    } else {
        console.log('No es lunes ni domingo');
    }
} */

if ( dia === 0 ) {
    console.log('Domingo');
} else if ( dia === 1 ) {
    console.log('Lunes');
}/* ... */ else {
    console.log('Error');
}

/* 
    dia = 0; es una asignacion 
    dia == '0'; No importa el tipo de dato pero tiene que ser igual a 0
    dia === '0'; es estricto y tiene que ser del mismo tipo de dato
*/

// Sin usar if else, o switch, únicamente objetos
dia = 32; // 0: Domingo, 1: Lunes, ...

// día de la semana
/* 
const dias = {
    0: 'Domingo',
    1: 'Lunes',
    2: 'Martes',
    3: 'Miercoles',
    4: 'Jueves',
    5: 'Viernes',
    6: 'Sabado',
} */

const dias = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];

console.log(dias[dia] || 'Error');