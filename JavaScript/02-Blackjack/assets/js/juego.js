let deck = [];
const tipos = ["C", "D", "H", "S"];
const especiales = ["A", "J", "Q", "K"];

let puntosJugador = 0,
    puntosComputadora = 0;

// Referencias del HTML
const btnPedir = document.querySelector("#btnPedir");
const btnDetener = document.querySelector("#btnDetener");
const btnNuevo = document.querySelector("#btnNuevo");
const smalls = document.querySelectorAll("small");
const divCartasJugador = document.querySelector("#jugador-cartas");
const divCartasComputadora = document.querySelector("#computadora-cartas");

// Esta funcion crea un nuevo deck
const crearDeck = () => {
    for (let i = 2; i <= 10; i++) {
        for (let tipo of tipos) {
            deck.push(i + tipo);
        }
    }

    for (let especial of especiales) {
        for (let tipo of tipos) {
            deck.push(especial + tipo);
        }
    }

    deck = _.shuffle(deck);
    console.log(deck);
    return deck;
};

crearDeck();

// Esta funcion me permite tomar una carta

const pedirCarta = () => {
    if (deck.length === 0) {
        throw "No hay cartas en el deck";
    }
    const carta = deck.pop();

    console.log(deck);
    console.log(carta);
    return carta;
};

const valorCarta = (carta) => {
    const valor = carta.substring(0, carta.length - 1);
    return isNaN(valor) ? (valor === "A" ? 11 : 10) : valor * 1;
};

// turno de la computadora
const turnoComputadora = (puntosMinimos) => {
    do {
        const carta = pedirCarta();
        const img = document.createElement("img");
        img.classList.add("carta");
        img.src = `assets/cartas/${carta}.png`;

        puntosComputadora = puntosComputadora + valorCarta(carta);
        smalls[1].innerText = puntosComputadora;

        divCartasComputadora.append(img);

        if (puntosMinimos > 21) {
            break;
        }
    } while (puntosComputadora < puntosMinimos && puntosMinimos <= 21);

    setTimeout(() => {
        if (puntosMinimos > 21 || puntosComputadora === 21) {
            alert("Computadora Gana");
        } else if (puntosComputadora === puntosMinimos) {
            alert("Empate");
        } else if (puntosComputadora > 21 || puntosJugador === 21) {
            alert("Jugador Gana");
        }
    }, 100);
};

const valor = valorCarta(pedirCarta());
console.log(valor);

// Eventos
btnPedir.addEventListener("click", () => {
    const carta = pedirCarta();
    const img = document.createElement("img");
    img.classList.add("carta");
    img.src = `assets/cartas/${carta}.png`;

    puntosJugador = puntosJugador + valorCarta(carta);
    smalls[0].innerText = puntosJugador;

    divCartasJugador.append(img);

    if (puntosJugador > 21) {
        console.warn("Lo siento mucho, perdiste");
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora(puntosJugador);
    } else if (puntosJugador === 21) {
        console.warn("21, genial");
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora(puntosJugador);
    }
});

btnDetener.addEventListener("click", () => {
    btnPedir.disabled = true;
    btnDetener.disabled = true;
    turnoComputadora(puntosJugador);
});

btnNuevo.addEventListener("click", () => {
    console.clear();

    deck = [];
    crearDeck();

    btnPedir.disabled = false;
    btnDetener.disabled = false;

    smalls[0].innerText = 0;
    smalls[1].innerText = 0;

    puntosComputadora = 0;
    puntosJugador = 0;

    divCartasComputadora.innerHTML = '';
    divCartasJugador.innerHTML = '';
});
