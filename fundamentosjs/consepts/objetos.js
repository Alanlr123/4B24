const tsuru = {
    modelo: 2000,
    color: 'verde',
    kilometros: 20000,
    motor:'2.0 litros'
}

console.log(tsuru);
console.log(tsuru.modelo);// esto se ase cuanto deseas solo qte te muestre una variable en especifico
console.log(tsuru.color);
tsuru.motor = '4.0 litros' // aqui podemos cambiar el valor de una variable
console.log(tsuru);

tsuru.nombre = 'tsuru'
console.log(tsuru);

tsuru['numero placas'] = 'XD 666 X'
console.log(tsuru);

tsuru.services = [2005,2010,2015,2020];
console.log(tsuru['services']);



tsuru.strat = function() {
    console.log('revision de sistema');
    console.log('revisando niveles');
    console.log('GRRRRRRRRRRRRRRRRR!!!11');
    this.status = 'encendido';

    this.strat();
    console.log(tsuru.status);

 
}

tsuru['turn off']();

delete tsuru['numero placas'];
console.log(tsuru);
//una coleccion de objetos 
/**
 * 
 */