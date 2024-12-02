export const determinarGanador = (puntosJugadores) => {
    const[puntosMinimos, puntosComputadora] = puntosJugadores;

    setTimeout(() => {
        if (puntosMinimos > 21 || puntosComputadora === 21 || puntosComputadora > puntosMinimos && puntosComputadora <= 21) {
            alert("Computadora Gana");
        } else if (puntosComputadora === puntosMinimos) {
            alert("Empate");
        } else if (puntosComputadora > 21 || puntosJugador === 21 || puntosMinimos > puntosComputadora && puntosMinimos <= 21) {
            alert("Jugador Gana");
        }
    }, 100);
}