const suma = (a ,b ) =>  a + b;
const resta = (a, b) => a - b;

const operacion = (a, b, callback) =>{
    const result = callback(a, b);
    console.log('el resultado es: ' + result)

}

operacion(12,5,suma);
operacion(12,5,resta);
operacion(12,5,(a,b) => a * b);

const cars = ['bocho','atos','pointer','tsuru','bmw']

cars.forEach(car => {console.log(car)});
let fintrados = cars.filter(car => car === 'tsuru');
console.log(fintrados);

fintrados = cars.filter(car => car.includes('o'));
console.log(fintrados)
//--------------------------------------------------------------

const a = ['vocho','atos','pointer','tsuro','bmw'];

a.forEach(a => {console.log(a)});
let filtrados = cars.filter(a => 'a');
console.log(filtrados)

filtrados = a .filter(a => a.includes('a') );
console.log(filtrados)


// regresar los que comiense con a starstWith
// regresar los que terminen con u
// regresar los que tengan menos de 5 letras



