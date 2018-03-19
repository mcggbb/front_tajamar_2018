"use strict"; //Sistema obliga que la semántica a respetar el lenguaje

// Validar si es número decimal
function validateDecimal(valor) {
    var RE = /^\d*\.\d*$/;
    (RE.test(valor)) ? true : false;
}

/* Comprueba si el número que le pasamos es par o impar o no es un número */
function isPar(numero) {
    return isNaN(numero / 2) ? -1 : numero % 2;
}

/* Devuelve mensaje de la comprobación de la función calcPar y validateDecimal (par, impar, decimal y no es un número) */
function mostrarEsPar(n) {
    const mensajes = [
        `El número "${n}" es PAR`,
        `El número "${n}" es IMPAR`,
        `El número "${n}" es DECIMAL`,
        `El dato "${n}" no es un número`
    ];

    let r = isPar(n);
    r = (r === 0) ? 0 : (r === 1) ? 1 : (validateDecimal(n)) ? 2 : 3;
    console.log(mensajes[r]);
}

/**
 * Calcular la circunferencia pasándole el tamaño del radio 
 **/
function calcularCircunferencia(radio) {
    return 2 * Math.PI * radio;
}

function mostrarCalcularCircunferencia(radio) {
    let circunferencia = calcularCircunferencia(radio);
    console.log(`
    la circunferencia de radio ${radio}
    tiene de longitud ${circunferencia}`);
}
/********************************************************************************************/

/******************** Sumar los números pares e impares **********************************/
function sumadorPares_Impares(suma, isPar_Impar) {
    let arreglo = [suma + 1];
    let pares = 0;
    let impares = 0;
    let esPar_Impar;
    for (let i = 0; i <= suma; i++) {
        arreglo[i] = i;
    }
    for (let i = 0; i <= suma; i++) {
        if (arreglo[i] % 2 == 0) {
            pares += arreglo[i];
        }
        else {
            impares += arreglo[i];
        }
    }
    if (isPar_Impar == "P") { mostrarSumaPares(pares); }
    if (isPar_Impar == "I") { mostrarSumaImpares(impares); }
}

function mostrarSumaPares(param) { console.log(`Suma de pares: ${param}`) }
function mostrarSumaImpares(param) { console.log(`Suma de impares: ${param}`) }
/**********************************************************/

/**
 * Mostrar propiedad y valores de un objeto ****************************
**/
var person = { fname: "John", lname: "Doe", age: 30 };
for (let valor in person) {
    //console.log(`La clave ${valor} vale `, person[valor]);
}

/**
 * Calcular el factorial como una función recursiva, es decir, que hace referencia 
 * a sí misma multiplicando el argumento por el factorial javascript del número precedente 
*/
function calcularFactorialRecursivo(n) {
    if (n == 0) {
        return 1;
    }
    return n * factorialRecursivo(n - 1);
}

/**
 * Hoy queremos calcular el factorial Javascript de un número. El factorial de un número es el producto 
 * de dicho número por todos los anteriores menores que él hasta llegar al cero. 
 * Por definición el factorial del número 0 es 1.
 * El resultado se representa por una notación abreviada que es el símbolo de cierre de exclamación (!).
 * Dicho esto, el factorial del número 5 sería: 5! = 5 * 4 * 3 * 2 * 1 
*/
function calcularFactorial(n) {
    if (typeof n === undefined){ throw 0}
    else if (isNaN())
    let total = 1;
    //for (let i = 1; i <= n; i++) {
    for (let i = n; i >= 1; i--) {
        total *= i;
        console.log(total + ": " + i + " " + n);
    }
    return total;
}

function mostrarFactorial(param) {
    let mensaje = `El factorial de ${param} es`
    mensaje += calcularFactorial(param)
    console.log(mensaje);
}

try {
    let x = noExiste()
} catch (error) {
    alert(error);
    console.log(error);
}

