"use strict"; //Sistema obliga que la semántica a respetar el lenguaje

// Invocación de la función
mostrar('Pepe')

// Declaración de la funcion
// Hiting de funciones
function mostrar(n) {
    console.log(`Me han pasado ${n}`)
}

// Funcion === Objeto
// Función anónima
// Asignación de la función a una variable
let mostrarVariable = function (n) {
    console.log(`Me han pasado ${n}`)
}

// Invocación de la función
mostrarVariable('Juan');

function myFunction() {
    let y = "4";
    try {
        let x = y;
        if (x == "") throw "empty";
        if (isNaN(x)) throw "not a number";
        if (x > 10) throw "too high";
        if (x < 5) throw "too low";
    }
    catch (err) {
        console.log("Error: " + err + ".");
    }
}

myFunction();

