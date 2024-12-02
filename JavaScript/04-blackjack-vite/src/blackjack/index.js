import {crearDeck, valorCarta, pedirCarta, turnoComputadora, acumularPuntos, crearCarta} from './usecases/index.js'
// improt cualquierNombreParaCrearNuevoDeck from './usecases/crear-deck.js';
// import { crearDeck as crearNuevoDeck } from './usecases/crear-deck.js';

const modulo = (() => {
  'use strict'

  let deck = [];
  
  let puntosJugadores;
  
  // Referencias del HTML
  const btnPedir = document.querySelector("#btnPedir"),
        btnDetener = document.querySelector("#btnDetener"),
        btnNuevo = document.querySelector("#btnNuevo");

  const divCartasJugadores = document.querySelectorAll('.divCartas'),
        smalls = document.querySelectorAll("small");
  
  const inicializarJuego = (numJugadores = 2) => {
      deck = crearDeck(["C", "D", "H", "S"], ["A", "J", "Q", "K"]);
      console.log(deck);
      puntosJugadores = [];
      for ( let i = 0; i < numJugadores; i++ ) {
          puntosJugadores.push(0);
      }

      smalls.forEach(elem => elem.innerText = 0);
      divCartasJugadores.forEach(elem => elem.innerHTML = '');

      btnPedir.disabled = false;
      btnDetener.disabled = false;
  }

  // Eventos
  btnPedir.addEventListener("click", () => {
      const carta = pedirCarta(deck);
      const puntosJugador = acumularPuntos(0 ,carta, puntosJugadores);
      
      crearCarta(carta, 0);
  
      if (puntosJugador > 21) {
          btnPedir.disabled = true;
          btnDetener.disabled = true;
          turnoComputadora(puntosJugador,deck, puntosJugadores.length - 1, puntosJugadores);
      } else if (puntosJugador === 21) {
          btnPedir.disabled = true;
          btnDetener.disabled = true;
          turnoComputadora(puntosJugador,deck, puntosJugadores.length - 1, puntosJugadores);
      }
  });
  
  btnDetener.addEventListener("click", () => {
      const[puntosJugador] = puntosJugadores;
      btnPedir.disabled = true;
      btnDetener.disabled = true;
      turnoComputadora(puntosJugador,deck, puntosJugadores.length - 1, puntosJugadores);
  });
  
  btnNuevo.addEventListener("click", () => {
      inicializarJuego();
  });    

  return {
      nuevoJuego: inicializarJuego
  };
})();