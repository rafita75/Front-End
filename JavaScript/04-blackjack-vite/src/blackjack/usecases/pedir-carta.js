// Esta funcion me permite tomar una carta
/**
 * Funcion para pedir una carta del deck
 * @param {Array<string>} deck 
 * @returns {String}retorna una carta para el jugador
 */
export const pedirCarta = (deck) => {
    if (!deck || deck.length === 0) {
        throw "No hay cartas en el deck";
    }

    return deck.pop();
};