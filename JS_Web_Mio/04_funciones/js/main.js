"use strict"; //Sistema obliga que la semántica a respetar el lenguaje
function calcularCubo(a) {
    a = a * a * a
    return a
}

function main() {
    let n = 6;

    let mostrarResultado2 = function () {
        console.log(calcularCubo(n));
    }
    console.log (typeof n);
    console.log (mostrarResultado2);
    
    mostrarResultado2();
    return calcularCubo;
}

// main() ~ calcularCubo
console.log(main()(3));