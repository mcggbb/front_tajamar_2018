"use strict"; //Sistema obliga que la semántica a respetar el lenguaje

/**
 * Elementos que vamos a usar
 */

(function () {

    function app() {
        let eBtonAbrir = document.querySelector("#btnAbrir");
        let eBtonGoogle = document.querySelector("#btnGoogle");
        let eBtonImagen = document.querySelector("#btnImagen");
        let eBtonCerrar = document.querySelector("#btnCerrar");
        //eBtonCerrar.disabled = true;
        let ventana = null;
        let aVentanas = [];

        eBtonAbrir.addEventListener('click', btnAbrir);
        eBtonGoogle.addEventListener('click', btnGoogle);
        eBtonImagen.addEventListener('click', btnImagen);
        eBtonCerrar.addEventListener('click', btnCerrar);

        function btnAbrir() {
            ventana = window.open();
            aVentanas.push(ventana);
            console.log(ventana)
        }

        function btnGoogle() {
            ventana = window.open("http://www.google.es");
            aVentanas.push(ventana);
            console.log(ventana)
        }
        
        function btnImagen() {
            ventana = window.open("../images/html5_logo.png");
            aVentanas.push(ventana);
            console.log(ventana)
        }

        function btnCerrar() {
            aVentanas.forEach(item => {
                item.close();
            });
            aVentanas = []
            console.log(ventana)
        }

     
    }

    window.addEventListener('load', app);
    //document.addEventListener("DOMContentLoaded", inicioScript, false); //otra forma de hacerlo
})()


