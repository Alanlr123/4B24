// metodo map

// forEach, map, filter
// reduce
const numeros = [1,2,3,4,5,6,7,8,9,10];

const sumatoria = numeros.reduce((a,b) => a + b);
console.log(numeros);
console.log(sumatoria);
const factorial = numeros.reduce((a,b) => a * b);
console.log(factorial);

//-----------------------------------------------------------
//every redresa verdadero si todos cumplen con la condiciom
const edad = [23,14,37,19,22,27];
const olders = edad.every(edad  => edad => 18);
const youngers = edad.every( edad => edad < 18);
console.log(olders);
console.log(youngers);
//----------------------------------------------------

// some regresa verdadero con uno q cumpla

const olders2 = edad.some(edad  => edad => 18);
const youngers2 = edad.some( edad => edad < 18);
console.log(olders2);
console.log(youngers2);

// ejercicios 
/**
 * crear un array con los elementos del 1 al 10
 * crear uno nuevo con los cuadros
 * crear unno nuevo con los cubos
 * crear uno nuevo con las mitades
 * 
 * crear uno nunevo con los pares 
 * crear uno nuevo con los impares
 * crear uno nuevo con los valores enntre 3 y 8
 * filter nos regresa uno vuevo
 * map
 */


let array = [1,2,3,4,5,6,7,8,9,10];

console.log(" 1 al 10:", array);


let cuadrados = array.map(num => num ** 2);
console.log("Cuadrados:", cuadrados);


let cubos = array.map(num => num ** 3);
console.log("Cubos:", cubos);


let mitades = array.map(num => num / 2);
console.log("Mitades:", mitades);

/**
 * 
 */
