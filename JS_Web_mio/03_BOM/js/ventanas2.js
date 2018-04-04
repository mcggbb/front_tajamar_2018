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

        eBtonAbrir.addEventListener('click', btnClick);
        eBtonCerrar.addEventListener('click', btnClick);

        function btnClick(ev) {
            console.log(ev.target.id)

            switch (ev.target.id) {
                case "btnAbrir": {
                    ventana = window.open();
                    aVentanas.push(ventana);
                    togleButtons();
                    
                }; break;

                case "btnCerrar": {
                    aVentanas.forEach(item => {
                        item.close();
                    });
                    togleButtons();
                    aVentanas = [];
                    
                }; break;

            }
        }

        function togleButtons() {
            eBtonAbrir.disabled = !eBtonAbrir.disabled
            eBtonCerrar.disabled = !eBtonCerrar.disabled
        }

    }

    window.addEventListener('load', app);
    //document.addEventListener("DOMContentLoaded", inicioScript, false); //otra forma de hacerlo
})()


