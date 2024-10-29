const modulo = (() => {
    'use strict'

    let deck = [];
    const tipos = ["C", "D", "H", "S"],
          especiales = ["A", "J", "Q", "K"];
    
    let puntosJugadores  = [];
    
    // Referencias del HTML
    const btnPedir = document.querySelector("#btnPedir"),
          btnDetener = document.querySelector("#btnDetener"),
          btnNuevo = document.querySelector("#btnNuevo");

    const divCartasJugadores = document.querySelectorAll('.divCartas'),
          smalls = document.querySelectorAll("small");
    
    const inicializarJuego = (numJugadores = 2) => {
        deck = crearDeck();
        puntosJugadores = [];
        for ( let i = 0; i < numJugadores; i++ ) {
            puntosJugadores.push(0);
        }

        smalls.forEach(elem => elem.innerText = 0);
        divCartasJugadores.forEach(elem => elem.innerHTML = '');

        btnPedir.disabled = false;
        btnDetener.disabled = false;
    }

    // Esta funcion crea un nuevo deck
    const crearDeck = () => {
        deck = [];
         
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
    
        return _.shuffle(deck);
    };
    
    // Esta funcion me permite tomar una carta
    
    const pedirCarta = () => {
        if (deck.length === 0) {
            throw "No hay cartas en el deck";
        }

        return deck.pop();
    };
    
    const valorCarta = (carta) => {
        const valor = carta.substring(0, carta.length - 1);
        return isNaN(valor) ? (valor === "A" ? 11 : 10) : valor * 1;
    };
    
    //Turno: 0 = jugador y el ultimo sera la computadora
    const acumularPuntos = (turno, carta) => {
        puntosJugadores[turno] = puntosJugadores[turno] + valorCarta(carta);
        smalls[turno].innerText = puntosJugadores[turno];
        
        return puntosJugadores[turno];
    }

    const crearCarta = (carta, turno) => {
        const img = document.createElement("img");
        img.src = `assets/cartas/${carta}.png`;
        img.classList.add("carta");
        divCartasJugadores[turno].append(img);
    }

    const determinarGanador = () => {
        const[puntosMinimos, puntosComputadora] = puntosJugadores;

        setTimeout(() => {
            if (puntosMinimos > 21 || puntosComputadora === 21 || puntosComputadora > puntosMinimos) {
                alert("Computadora Gana");
            } else if (puntosComputadora === puntosMinimos) {
                alert("Empate");
            } else if (puntosComputadora > 21 || puntosJugador === 21) {
                alert("Jugador Gana");
            }
        }, 100);
    }

    // turno de la computadora
    const turnoComputadora = (puntosMinimos) => {
        let puntosComputadora = 0;
        do {
            const carta = pedirCarta();
            puntosComputadora = acumularPuntos(puntosJugadores.length - 1,carta);
    
            crearCarta(carta, puntosJugadores.length - 1);
        } while (puntosComputadora < puntosMinimos && puntosMinimos <= 21);

        determinarGanador();
    };
    
    // Eventos
    btnPedir.addEventListener("click", () => {
        const carta = pedirCarta();
        const puntosJugador = acumularPuntos(0 ,carta);
        
        crearCarta(carta, 0);
    
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
        const[puntosJugador] = puntosJugadores;
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora(puntosJugador);
    });
    
    btnNuevo.addEventListener("click", () => {
        inicializarJuego();
    });    

    return {
        nuevoJuego: inicializarJuego
    };
})();