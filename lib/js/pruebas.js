"use strict"; //Sistema obliga que la semántica a respetar el lenguaje

(function () {
    /* let valor = "casa"+"4";

    if (!isNaN(valor)) {
        console.log(`El cuadrado de ${valor} es`, valor * valor);
    }
    else {
        console.log(`Porque no me diste un número cansino`)
    } */

    /** Potencia de 2x10 tiene que dar como resultado 1024 */
    /*    let resultado = 1
       let numero = 0;
       while (numero < 10) {
           resultado *= 2;
           numero++
           console.log(resultado + " " + numero)
       } */

    /* for (let index = 0, resultado = 1; index <= 10; resultado *= 2, index++) {
        console.log(resultado)
    } */

    //let cadena = "#";
    /* for (let index = 0, cadena = "#"; index < 7; cadena+="#", index++) {
        console.log(cadena)
    } */


    /**
     * FizzBuzz
     * Escriba un programa que use console.log para imprimir todos los números del 1 al 100, con dos excepciones. 
     * Para los números divisibles por 3, imprima en "Fizz" lugar del número, y para los números divisibles por 5 (y no 3), imprima en su "Buzz" lugar.
     * Cuando tenga eso funcionando, modifique su programa para imprimir "FizzBuzz", para números que sean divisibles por 3 y 5 
     * (y aún así imprima "Fizz"o "Buzz"para números divisibles por solo uno de ellos).
     * (En realidad, esta es una pregunta de la entrevista que se dice que eliminó un porcentaje significativo de candidatos a programadores. 
     * Por lo tanto, si lo resolvió, su valor en el mercado laboral simplemente subió).
      */

    /* for (let index = 0; index < 16; index++) {
        if (index === 0) continue;
        if (index % 3 === 0 && index % 5 !== 0) {
            console.log(index + " Fizz");
        }
        else if (index % 5 === 0 && index % 3 !== 0) {
            console.log(index + " Buzz");
        }
        else if (index % 3 === 0 && index % 5 === 0) {
            console.log(index + " FizzBuzz");
        }
        else {
            console.log(index);
        }
    } */

    /** Tablero de ajedrez
     * Escriba un programa que cree una cadena que represente una cuadrícula de 8 × 8, utilizando caracteres de nueva línea para separar las líneas. 
     * En cada posición de la cuadrícula, hay un espacio o un carácter "#". Los personajes deben formar un tablero de ajedrez.  
     * */

    let size = 8;
    let board = "";

    for (let y = 0; y < size; y++) {
        for (let x = 0; x < size; x++) {
            if ((x + y) % 2 == 0) {
                board += " ";
            } else {
                board += "#";
            }
        }
        board += "\n";
    }

    var a = 100;
    var b = 0;
    try {
        if (b === 0) {
            throw ("Divide by zero error.");
        } else {
            var c = a / b;
        }
    }
    catch (e) {
        console.log("Error: " + e);
    }



})()


