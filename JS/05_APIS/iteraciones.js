"use strict"; //Sistema obliga que la semántica a respetar el lenguaje

let array = [2, 5, 7, 4, 9]
let oDatos = {
    alto: 2,
    ancho: 5,
    largo: 7,
    peso: 4,
    color: 9
}

/* console.log("Array")
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    console.log(element)
}

console.log("Objeto")
for (const key in oDatos) {
    const element = oDatos[key];
    console.log(element)
}

console.log("Array con forin")
for (const key in oDatos) {
    const element = oDatos[key];
    console.log(element)
}

console.log("Objeto for of")
for (const iterator of array) {
    console.log(iterator)
} */


/** 
 * forEach 
 * El método forEach () llama a una función proporcionada una vez para cada elemento en una matriz, en orden.
 * Nota: forEach () no ejecuta la función para elementos de matriz sin valores.
 * */
array.forEach(item => console.log(item))


/** 
 * filter y map
*/
let aCuadrado = array.map(item => item * item)
console.log(aCuadrado) //Devuelve una matriz con la raíz cuadrada de todos los valores en la matriz original

//////////////
let aPares = array.filter(item => item % 2 === 0)
console.log(aPares)

/** 
 * filter y map
*/

let aImparesCuadrados = array
    .filter(item => item % 2 !== 0)
    .map(item => item * item)
console.log(aImparesCuadrados)

/** 
 * filter
*/
var ages = [32, 33, 16, 40];

function checkAdult(age) {
    return age >= 18;
}

function myFunction() {
    console.log(ages.filter(checkAdult));
}

myFunction();

/**
 * reduce
 */
console.log([0, 1, 2, 3, 4].reduce(function (valorAnterior, valorActual, indice, vector) {
    return valorAnterior + valorActual;
}));

let total = [0, 1, 2, 3].reduce(function(a, b){ return a + b; });
console.log(total)




