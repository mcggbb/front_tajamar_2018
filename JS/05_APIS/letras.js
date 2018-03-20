"use strict"; //Sistema obliga que la semántica a respetar el lenguaje

/**
 * @function: comprobarMayusculas --> 
 *      - todo mayúsculas: 1 
 *      - todo minúsculas: 2
 *      - mezcla de mayúsculas y minúsculas: 0
 * @param: pasamos un string (cadena)
 * @returns: devolver number (1, 2 y 0)
 */

function comprobarMayusculas(cadena = "") {
    let resultado = 0;
    return resultado = (/^[A-Z]$/g.test() === cadena) ? 1 : (/^[a-z]$/g.test() === cadena) ? 2 : 0;
}

function mostrarComprobarMayusculas(cadena) {
    const ERROR_BASE = `La cadena introducida ${cadena} está  `

    let aErrores = [
        'en mayúsculas y minúsculas.',
        'toda en mayúscula.',
        'toda en minúscula.'
    ]
   
    console.log(ERROR_BASE + aErrores[comprobarMayusculas(cadena)])
}
mostrarComprobarMayusculas("san miguel");
mostrarComprobarMayusculas("San Miguel");
mostrarComprobarMayusculas("SAN MIGUEL");