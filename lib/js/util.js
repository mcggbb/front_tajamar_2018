"use strict"; //Sistema obliga que la semántica a respetar el lenguaje

/********************************************************************************************
 * Agregar un controlador de eventos a un elemento
 */
<button id="myBtn">Try it</button>
document.getElementById("myBtn").addEventListener(
    "click", function () {
        alert("Hello World!");
    }
);

/********************************************************************************************
 * Cierres de Javascript.
 * A la variable add se le asigna el valor de retorno de una función autoinvocación.
 * La función de invocación automática solo se ejecuta una vez. Establece el contador en cero (0) y
 *  devuelve una expresión de función.
 * De esta forma, agregar se convierte en una función. 
 * La parte "maravillosa" es que puede acceder al contador en el ámbito principal.
 * Esto se llama cierre de JavaScript. Hace posible que una función tenga variables "privadas ".
 * El contador está protegido por el alcance de la función anónima y solo puede modificarse 
 * mediante la función de agregar.
 */
var add = (
    function () {
        var counter = 0;
        return function () { return counter += 1; }
    }
)();

/********************************************************************************************
 * función para sumar todos los valores de entrada
 */
function sumAll() {
    let i;
    let sum = 0;
    for (i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}
let x = sumAll(1, 123, 500, 115, 44, 88);
//console.log(x);

/********************************************************************************************
 * No hay funciones integradas para encontrar el valor máximo o mínimo en una matriz.
 * Sin embargo, después de haber ordenado una matriz, puede usar el índice para obtener 
 * los valores más altos y más bajos.
 *
 **/

var points = [40, 100, 1, 5, 25, 10];
//Clasificación ascendente
points.sort(function (a, b) { return a - b });
//console.log(points[0]);

//Clasificación descendente:
points.sort(function (a, b) { return b - a });
//console.log(points[0]);


/********************************************************************************************
 * Validar si es número decimal
 * Comprobar si el número que le pasamos es par o impar o no es un número 
 * Devuelve mensaje de la comprobación de la función calcPar y validateDecimal (par, impar, decimal y no es un número)
 */
function validateDecimal(valor) {
    var RE = /^\d*\.\d*$/;
    (RE.test(valor)) ? true : false;
}

function isPar(numero) {
    return isNaN(numero / 2) ? -1 : numero % 2;
}

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

/********************************************************************************************
 * Calcular la circunferencia pasándole el tamaño del radio 
 * Mostrar el cálculo de la circunferencia cuando le pasamos el radio, en la consola de navegador.
 */
function calcularCircunferencia(radio) {
    return 2 * Math.PI * radio;
}

function mostrarCalcularCircunferencia(radio) {
    let circunferencia = calcularCircunferencia(radio);
    console.log(`
        la circunferencia de radio ${radio}
        tiene de longitud ${circunferencia}
    `);
}

/********************************************************************************************
 * Esta función de JavaScript siempre devuelve un número aleatorio entre min y max (ambos incluidos)
 */
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/********************************************************************************************
 * Sumar los números pares e impares
 */
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

/********************************************************************************************
 * Calcular el factorial como una función recursiva, es decir, que hace referencia 
 * a sí misma multiplicando el argumento por el factorial javascript del número precedente 
*/
function calcularFactorialRecursivo(n) {
    if (n == 0) {
        return 1;
    }
    return n * factorialRecursivo(n - 1);
}

/********************************************************************************************
 * Hoy queremos calcular el factorial Javascript de un número. El factorial de un número es el producto 
 * de dicho número por todos los anteriores menores que él hasta llegar al cero. 
 * Por definición el factorial del número 0 es 1.
 * El resultado se representa por una notación abreviada que es el símbolo de cierre de exclamación (!).
 * Dicho esto, el factorial del número 5 sería: 5! = 5 * 4 * 3 * 2 * 1 
*/
function calcularFactorial(n) {
    if (typeof n === 'undefined') { throw 0 }
    else if (isNaN(n / 2)) { throw 1 }
    else if (parseInt(n) !== parseFloat(n)) { throw 2 }
    else if (n <= 0) { throw 3 }
    else {
        let r = 1
        //for (let i = 1; i <= n; i++) {
        for (let i = n; i >= 1; i--) {
            r *= i;
        }
        // TODO Comprobar rendimiento
        if (r === Infinity) { throw 4 }
        else { return r }
    }
}

function mostrarFactorial(n) {
    const ERROR_BASE = 'No puedo calcular el factorial de '
    aErrores = [
        'nada',
        'algo no numérico',
        'un número con decimales',
        'un número menor que 0',
        'un número tan grande']
    try {
        let mensaje = `El factorial de ${n} es `
            + calcularFactorial(n)
        console.log(mensaje)
    } catch (error) {
        console.log(ERROR_BASE + aErrores[error])
    }
}

/**
 * Rellenar ceros por la izquierda en un campo de formulario o en una cadena
 * @param number es la cantidad que pasamos
 * @param width es la anchura del campo o cadena.
 */

//cadena
function zeroPad(number, width) {
    let string = String(number);
    while (string.length < width) {
        string = "0" + string;
    }
    return string;
}

//campo de formulariop
function zeroPad(obj, width) {
    while (obj.value.length < width) {
        obj = "0" + obj;
    }
    return obj;
}

/**
 * Counting with a local variable.
  */
{/* <p>Counting with a local variable.</p>

<button type="button" onclick="myFunction()">Count!</button>

<p id="demo">0</p> */}


//let add = (function () {
let add = (() => {
    var counter = 0;
    return function () { return counter += 1; }
})();

function myFunction() {
    document.getElementById("demo").innerHTML = add();
}