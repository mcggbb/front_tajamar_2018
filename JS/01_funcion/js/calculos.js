"use strict"; //Sistema obliga que la semántica a respetar el lenguaje

function calcularCircunferencia(radio) {
    return 2 * Math.PI * radio;
}

function mostrarCalcularCircunferencia(radio) {
    let circunferencia = calcularCircunferencia(radio);
    console.log(`
    la circunferencia de radio ${radio}
    tiene de longitud ${circunferencia}`);
}

//mostrarCalcularCircunferencia(5);

let nombre = "Pepe";
let edad = 23;
let isCasado = false;
let algo = undefined;

const user = {
    nombre: "Pepe",
    apellido: "Perez",
    direccion: {
        calle: "planeta marte",
        ciudad: "Parla",
        c_postal: 28983
    },
    edad: 23,
    isCasado: false,
    algo: undefined
};

if (user.direccion.calle==="planeta marte") {
    console.log("hola planeta marte");
}
else {
    if (user.isCasado === false) {
        console.log("no es casado");
    }
    /* else {
        console.log ("es 3");
    } */

}


