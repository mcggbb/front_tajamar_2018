"use strict"; //Sistema obliga que la semántica a respetar el lenguaje

function nif(dni) {
    var numero
    var letr
    var letra
    var expresion_regular_dni

    expresion_regular_dni = /^\d{8}[a-zA-Z]$/;

    if (expresion_regular_dni.test(dni) == true) {
        numero = dni.substr(0, dni.length - 1);
        letr = dni.substr(dni.length - 1, 1);
        numero = numero % 23;
        letra = 'TRWAGMYFPDXBNJZSQVHLCKET';
        letra = letra.substring(numero, numero + 1);
        if (letra != letr.toUpperCase()) {
            alert('Dni erroneo, la letra del NIF no se corresponde');
        } else {
            alert('Dni correcto');
        }
    } else {
        alert('Dni erroneo, formato no válido');
    }
}

const letra = 'TRWAGMYFPDXBNJZSQVHLCKET';
let newArray = letra.split("");
let element = [];
for (let index = 0; index < newArray.length; index++) {
    element = newArray[index];
    console.log(element + " " + index);
}
//console.log(element.sort());
//console.log(letra.slice(0,letra.length));

