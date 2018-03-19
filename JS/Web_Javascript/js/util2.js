"use strict"; //Sistema obliga que la semántica a respetar el lenguaje

function validateDecimal(valor) {
    var RE = /^\d*\.\d*$/;
    if (RE.test(valor)) {
        return true;
    } else {
        return false;
    }
}

/* function validateDecimal(valor) {
    return (valor % 1) ? false : true;
} */


/* Comprueba si el número que le pasamos es par o impar o no es un número */
function calcPar(numero) {
    return isNaN(numero / 2) ? -1 : numero % 2;
}

/* Devuelve mensaje de la comprobación de la función calcPar */
function mostrarEsPar(n) {
    const mensajes = [
        `El número "${n}" es PAR`,
        `El número "${n}" es IMPAR`,
        `El número "${n}" es DECIMAL`,
        `El dato "${n}" no es un número`
    ];

    let r = calcPar(n);
    r = (r === 0) ? 0 : (r === 1) ? 1 : (validateDecimal(n)) ? 2 : 3;
    console.log(mensajes[r]);
}

mostrarEsPar("a");
mostrarEsPar(2);
mostrarEsPar(111);
mostrarEsPar(111.);

