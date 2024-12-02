import { valorCarta } from "./valor-carta";
 
 //Turno: 0 = jugador y el ultimo sera la computadora
export const acumularPuntos = (turno, carta, puntosJugadores) => {
    const smalls = document.querySelectorAll("small");

    puntosJugadores[turno] = puntosJugadores[turno] + valorCarta(carta);
    smalls[turno].innerText = puntosJugadores[turno];
    
    return puntosJugadores[turno];
}
