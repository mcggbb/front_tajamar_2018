"use strict"; //Sistema obliga que la semántica a respetar el lenguaje

//Calcular circunferencia, pasandole el radio
function calcularCircunferencia(radio) {
    return 2 * Math.PI * radio;
}

// Mostrar el cálculo de la circunferencia cuando le pasamos el radio, en la consola de navegador.
function mostrarCalcularCircunferencia(radio) {
    let circunferencia = calcularCircunferencia(radio);
    console.log(`
    la circunferencia de radio ${radio}
    tiene de longitud ${circunferencia}`);
}

//Esta función de JavaScript siempre devuelve un número aleatorio entre min y max (ambos incluidos)
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

/*********** Comprobar si un número es par, impar, decimal o no es un número ***************/
function validateDecimal(valor) {
    let RE = /^\d*\.\d*$/;
    (RE.test(valor)) ? true : false;
}

// Comprueba si el número que le pasamos es par o impar o no es un número
function calcPar(numero) {
    return isNaN(numero / 2) ? -1 : numero % 2;
}

// Devuelve mensaje de la comprobación de la función calcPar y validateDecimal
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

