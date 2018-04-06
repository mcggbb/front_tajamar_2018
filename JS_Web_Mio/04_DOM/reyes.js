"use strict"; //Sistema obliga que la semántica a respetar el lenguaje

/**
 * Isabel, Fernando, Carlos, Felipe, Juana, Luis, Alfonso, Juan Carlos, Amadeo, Jose
 * 
 * Una lista dinámica de los reyes de España.
 * A partir del ejercicio anterior y el realizado previamente, en el que se 
 * comprobaba contra un array si un nombre dado correspondía a los usados 
 * por algún rey de España,  completar una página htlmque, a modo de 
 * concurso permita crear desde cero y dinámicamente una lista con los reyes 
 * de España.
 * Objetivo: Comprobar como se aplica el uso  del DOM y sus funciones 
 * en una posible situación real, como es validar las entradas de una 
 * lista construida por el usuario frente a un array de posibles valores 
 * validos.
 * 
 */

(function () {

    function main() {
        const listaReyes = ["Isabel", "Fernando", "Carlos", "Felipe", "Juana", "Luis", "Alfonso", "Juan Carlos", "Amadeo", "Jose"];
        const lista = [];

        function almacenar() {
            let campoNombre = document.querySelector('#nombre').value.toUpperCase();
            let mensaje = document.querySelector('#mensaje');

            for (let index = 0; index < listaReyes.length; index++) {
                if (listaReyes[index].toUpperCase() === campoNombre.toUpperCase() && lista.indexOf(campoNombre) === -1) {
                    lista.push(campoNombre);
                    mensaje.innerHTML = "Dicho rey se encuentra en la lista";
                    campoNombre = "";
                    return
                }
                else {
                    mensaje.innerHTML = "Dicho rey no se encuentra en la lista";
                }
            }

            if (lista.indexOf(campoNombre) !== -1) {
                mensaje.innerHTML = "Dicho rey ya ha sido introducido";
                campoNombre = "";
                return
            }
        };

        function mostrar() {
            document.getElementById('elementos').innerHTML = ''

            for (let i = 0, m; m = lista[i]; i++) {
                document.getElementById('elementos').innerHTML += '<li>' + lista[i] + '</li>';
            }

        };

        let btnAlmacenar = document.querySelector("#almacenar");
        let btnMostrar = document.querySelector("#mostrar");

        btnAlmacenar.addEventListener('click', almacenar);
        btnMostrar.addEventListener('click', mostrar);
    };

    window.addEventListener("load", main);
})();
