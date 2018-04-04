"use strict"; //Sistema obliga que la semántica a respetar el lenguaje

/**
 * Elementos que vamos a usar
 */

(function () {

    function app() {
        let oDom = {
            eBotonSaludar: document.querySelector("#btonSaludo")
        }

        let saludar = (oE, user = "amigo") => {
            console.log(`Hola ${user}`);
        }

        //función anónima
        //oDom.eBotonSaludar.onclick = () => saludar(event, "San Miguel")
        oDom.eBotonSaludar.addEventListener(
            'click',
            () => saludar(event, "San Miguel 2")
        )
        //oDom.eBotonSaludar.removeEventListener('click') //Para anular el click

    }

    window.addEventListener('load', app);
    //document.addEventListener("DOMContentLoaded", inicioScript, false); //otra forma de hacerlo
})()

