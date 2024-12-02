import { pedirCarta } from "./pedir-carta";
import { acumularPuntos } from "./acumular-puntos";
import { crearCarta } from "./crear-carta";
import { determinarGanador } from "./determinar-ganador";
  
// turno de la computadora
export const turnoComputadora = (puntosMinimos, deck, turno, puntosJugadores) => {
    let puntosComputadora = 0;
    do {
        const carta = pedirCarta(deck);
        puntosComputadora = acumularPuntos(turno,carta,puntosJugadores);

        crearCarta(carta, turno);
    } while (puntosComputadora < puntosMinimos && puntosMinimos <= 21);

    determinarGanador(puntosJugadores);
};