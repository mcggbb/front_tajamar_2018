"use strict"; //Sistema obliga que la semántica a respetar el lenguaje

let calcularCuboES6_1 = function (a) {
    return a * a * a;
}

//En E6 funcion "arrow" (lambda) asignado a variable
// =>

let calcularCuboES6_2 = (a) => {
    return a * a * a
}

let calcularCuboES6_3 = a => a * a * a

console.log(calcularCuboES6_1(3));
console.log(calcularCuboES6_2(3));
console.log(calcularCuboES6_3(3));


setTimeout(() => {
    let a = 3;    
    console.log(a * a * a);
}, 3000);

// Funciones de flecha sin parámetros son más fáciles de visualizar
/* setTimeout(() => {
    console.log('Yo voy primero');
    setTimeout(() => {
        // deeper code
        console.log('Yo voy despues');
    }, 1);
}, 1); */