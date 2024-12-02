class Persona {
  static _conteo = 0;
  static get conteo(){
    return Persona._conteo + 'instancias';
  }

  static mensaje(){
    console.log('Hola a todos soy un metodo estatico');
  }

  nombre = "";
  codigo = "";
  frase = ""; 
  comida = '';

  constructor(nombre = "sin nombre", codigo = "sin codigo", frase = "sin frase") {
    this.nombre = nombre;
    this.codigo = codigo;
    this.frase = frase;

    Persona._conteo++;
  }

  set setComidaFavorita(comida) {
    this.comida = comida.toUpperCase();
  }

  get getComidaFavorita() {
    return `La comida favorita de ${this.nombre} es ${this.comida}`;
  }

  quienSoy(){
    console.log(`Soy ${this.nombre} y mi identidad es ${this.codigo}`);
  }

  miFrase(){
    this.quienSoy();
    console.log(`${this.codigo} dice: ${this.frase}`);
  }
}

const spiderman = new Persona('Peter Parker', 'spiderman', 'Soy tu amigable vecino SpiderMan');
const ironman = new Persona('Tony Stark', 'ironman', 'Yo soy ironman');
console.log(spiderman);
// console.log(ironman);

spiderman.miFrase();

spiderman.setComidaFavorita = 'El pan con jamon';

// cuando una propiedad no existe
//spiderman.nemesis = 'Duende verde' // solo spiderman lo va a tener
// console.log(spiderman);

// console.log(spiderman.getComidaFavorita);

//Persona._conteo = 2;
console.log('Conteo estatico', Persona._conteo);
console.log(Persona.conteo);
console.log(Persona.mensaje()); 

Persona.propiedadExterna = 'Hola mundo';

console.log(Persona.propiedadExterna);
console.log(Persona);