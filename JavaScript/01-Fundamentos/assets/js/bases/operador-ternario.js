/* 
    dias de semana abrimos a las 11,
    pero los fines de semana brimos a las 9
*/

// Entra a un sitio web, para consultar si esta abierto hoy
const dia = 0; // 0: domingo, 1: lunes ...
const horaActual = 10;

let horaApertura;
let mensaje; // Esta abierto, esta cerrado, hoy abrimos a las xx

/* // if (dia === 0 || dia === 6) {
if ([0,6].includes(dia)) {
  console.log("Fin de semana");
  horaApertura = 9;
} else {
  console.log("Dia de semana");
  horaApertura = 11;
} */

horaApertura = ([0,6].includes(dia)) ? /* verdadero  */9  : /* falso */ 11;

/* if (horaActual >= horaApertura) {
    mensaje = 'Esta abierto';
} else {
    // mensaje = 'Esta cerrado, hoy abrimos a las ' + horaApertura;
    mensaje = `Esta cerrado, hoy abrimos a las ${horaApertura}`;
} */

mensaje = horaActual >= horaApertura ? 'Esta abierto' : `Esta cerrado, hoy abrimos a las ${horaApertura}`;

console.log({ horaApertura, mensaje });