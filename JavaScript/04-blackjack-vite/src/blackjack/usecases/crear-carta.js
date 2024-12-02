export const crearCarta = (carta, turno) => {
    const divCartasJugadores = document.querySelectorAll('.divCartas');
    const img = document.createElement("img");
    img.src = `assets/cartas/${carta}.png`;
    img.classList.add("carta");
    divCartasJugadores[turno].append(img);
}