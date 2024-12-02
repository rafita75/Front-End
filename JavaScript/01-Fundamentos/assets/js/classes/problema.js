const ajua = {
    nombre: 'Angel',
    edad: 17,
    imprimir() {
        console.log(`Nombre: ${this.nombre} - edad: ${this.edad}`);
    }
}

const pedro = {
    nombre: 'Pedro',
    edad: 15,
}

ajua.imprimir();

function Persona(nombre, edad){
    console.log('Se ejecuto esta linea');
    this.nombre = nombre;
    this.edad   = edad;

    this.imprimir = function() {
        console.log(`Nombre: ${this.nombre} - edad: ${this.edad}`);
    }
}

// crear una nueva instancia de Persona

const maria = new Persona('Maria', 18);
// console.log(maria);
maria.imprimir();
