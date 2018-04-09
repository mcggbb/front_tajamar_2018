"use strict"; //Sistema obliga que la semántica a respetar el lenguaje

/**
 * Elementos que vamos a usar
 */

(function () {

    function app() {
        let oDom = {
            eBotonSaludar: document.querySelector("#btnSaludar"),
            eBotonBorrar: document.querySelector("#btnBorrar"),
            eInputName: document.querySelector('#inpName'),
            eOutSaludo: document.querySelector('#outSaludar'),
            
        }

        /**
         * Manejador del evento click del botón btnSaludar
         */
        let saludar = () => {
            let user = oDom.eInputName.value;
            console.log(user);
            oDom.eOutSaludo.innerHTML = `Hola ${user}`
        }

        /**
         * Manejador del evento click del botón btnBorrar
         */
        let borrar = () => {
            oDom.eInputName.value = "";
            oDom.eOutSaludo.innerHTML = "";
        }

        oDom.eBotonSaludar.addEventListener('click', saludar)
        oDom.eBotonBorrar.addEventListener('click', borrar)

    }

    window.addEventListener('load', app);
})()

