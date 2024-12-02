import _ from 'underscore'; 

/**
 * Esta funcion crea un nuevo deck
 * @param {array<string>} tiposDeCartas Ejemplo: ["C", "D", "H", "S"]
 * @param {array<string>} tiposEspeciales Ejemplo: ["A", "J", "Q", "K"]
 * @returns {array} retorna un nuevo deck de cartas 
 */

// Esta funcion crea un nuevo deck
export const crearDeck = (tiposDeCartas, tiposEspeciales) => {
    if ( !tiposDeCartas || tiposDeCartas.length === 0 ) throw new Error ('TiposDeCartas es Obligatorio');
    if ( !tiposEspeciales || tiposEspeciales.length === 0 ) throw new Error ('tiposEspeciales es Obligatorio');

    let deck = [];
     
    for (let i = 2; i <= 10; i++) {
        for (let tipo of tiposDeCartas) {
            deck.push(i + tipo);
        }
    }

    for (let especial of tiposEspeciales) {
        for (let tipo of tiposDeCartas) {
            deck.push(especial + tipo);
        }
    }

    return _.shuffle(deck);
};

// export default crearDeck;