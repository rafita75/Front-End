const regresaTrue = () => {
    console.log('Regresa true');
    return true;
}

const regresaFalse = () => {
    console.log('Regresa false');
    return false;
}

console.warn('not o la negación');
console.log(true); // true
console.log(!true); // false
console.log(!false); // true

console.log(!regresaFalse()); // true

console.warn('And'); // true si todos los valores son verdaderos
console.log( true && true ); // true
console.log( true && false ); // true

console.log('============');
console.log( regresaFalse() && regresaTrue() ); // como el regresaFalse devuelve false, javascript ya no ejecuta lo siguente
console.log( regresaTrue() && regresaFalse() ); // se ejecutan ambos


console.log('============');
regresaFalse() && regresaTrue();
regresaTrue() && regresaFalse();

console.log('OR'); // algo tiene que ser true lo demas no importa 
console.log(true || false);
console.log(false || false);

console.log( regresaFalse() || regresaTrue() );
console.log( regresaTrue() || regresaFalse() );

console.warn('Asignacion');

const soyUndefined = undefined;
const soyNull = null;
const soyFalso = false;

const a1 = true && ' Hola mundo' && 150;
const a2 = 'Hola' && 'Mundo' && soyFalso && true;
const a3 = soyFalso || 'Ya no soy falso';
const a4 = soyFalso || soyUndefined || soyNull || 'Ya no soy falso de nuevo' || true;
const a5 = soyFalso || soyUndefined || regresaTrue() || 'Ya no soy falso de nuevo' || true;

console.log({a1, a2, a3, a4, a5});

