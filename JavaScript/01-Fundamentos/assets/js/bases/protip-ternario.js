const elMayor = (a, b) => (a > b) ? a : b;

const tieneMembresia = (miembro) => miembro ? '2 Dolares' : '10 Dolares';

console.log(elMayor(10, 15));

console.log(tieneMembresia(false));

const amigo = true;
const amigosArr = [
    'Peter',
    'Kenneth',
    'Ricardo',
    amigo ? 'Thor' : ' Loki'
]

console.log(amigosArr);

const nota = 65; // A+ A B+ ...
const grado = nota >= 90 ? 'A+':
              nota >= 70 ? 'B+':
              nota >= 50 ? 'C+': 'F';
              
console.log({nota, grado});