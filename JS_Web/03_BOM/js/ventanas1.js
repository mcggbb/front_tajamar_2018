"use strict"; //Sistema obliga que la semántica a respetar el lenguaje

/**
 * Elementos que vamos a usar
 */

(function () {

    function app() {
        let eBtonAbrir = document.querySelector("#btnAbrir");
        let eBtonCerrar = document.querySelector("#btnCerrar");
        eBtonCerrar.disabled = true;
        let ventana = null;
        let aVentanas = [];

        eBtonAbrir.addEventListener('click', btnAbrir);
        eBtonCerrar.addEventListener('click', btnCerrar);

        function btnAbrir() {
            ventana = window.open();
            togleButtons();
            aVentanas.push(ventana);
        }

        function btnCerrar() {
            aVentanas.forEach(item => {
                item.close();
            });
            togleButtons();
            aVentanas = []
        }

        function togleButtons() {
            eBtonAbrir.disabled = !eBtonAbrir.disabled
            eBtonCerrar.disabled = !eBtonCerrar.disabled
        }

    }

    window.addEventListener('load', app);
    //document.addEventListener("DOMContentLoaded", inicioScript, false); //otra forma de hacerlo
})()

