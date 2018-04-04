"use strict"; //Sistema obliga que la semántica a respetar el lenguaje
/* 
$(document).ready(
    function(){
}); */

$(function () {
    let oDom = {
        eBotonSaludar: $("#btnSaludar"),
        eBotonBorrar: $("#btnBorrar"),
        eInputName: $('#inpName'),
        eOutSaludo: $('#outSaludar')
    }

    /**
         * Manejador del evento click del botón btnSaludar
         */
    function saludar() {
        let user = oDom.eInputName.val();
        console.log(user);
        oDom.eOutSaludo.html(`<p>Hola a ${user}</p>`);
    }

    /**
     * Manejador del evento click del botón btnBorrar
     */
    function borrar() {
        oDom.eInputName.val("");
        oDom.eOutSaludo.html("");
    }

    oDom.eBotonSaludar.on('click', saludar)
    oDom.eBotonBorrar.on('click', borrar)




});


