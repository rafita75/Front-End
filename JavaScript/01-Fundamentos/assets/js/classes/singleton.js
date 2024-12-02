class Singleton {
    static instancia; //undefined
    nombre = '';

    constructor(nombre = '') {

        if ( !!Singleton.instancia ){ // undefined !true !!false
            return Singleton.instancia;
        }
        Singleton.instancia = this;
        this.nombre = nombre;

        return this;
    }
}

const instancia1 = new Singleton('Ironman');    
const instancia2 = new Singleton('Spiderman');    

console.log(`Nombre en la instancia1 es: ${instancia1.nombre}`);
console.log(`Nombre en la instancia1 es: ${instancia2.nombre}`);
