"use strict"; //Sistema obliga que la semántica a respetar el lenguaje

/**
 * Elementos que vamos a usar
 */

(function () {

    function app() {
        let centesimas = 0;
        let segundos = 0;
        let minutos = 0;
        let horas = 0;
        let control;

        let eBtonInicio = document.querySelector("#inicio");
        let eBtonParar = document.querySelector("#parar");
        let eBtonContinuar = document.querySelector("#continuar");
        let eBtonReinicio = document.querySelector("#reinicio");

        eBtonInicio.addEventListener('click', inicio);
        eBtonParar.addEventListener('click', parar);
        eBtonContinuar.addEventListener('click', inicio);
        eBtonReinicio.addEventListener('click', reinicio);

        eBtonParar.disabled = true;
        eBtonContinuar.disabled = true;
        eBtonReinicio.disabled = true;

        function inicio() {
            control = setInterval(cronometro, 10);
            eBtonInicio.disabled = true;
            eBtonParar.disabled = false;
            eBtonContinuar.disabled = true;
            eBtonReinicio.disabled = false;
        }

        function parar() {
            clearInterval(control);
            eBtonParar.disabled = true;
            eBtonContinuar.disabled = false;
        }

        function reinicio() {
            clearInterval(control);
            centesimas = 0;
            segundos = 0;
            minutos = 0;
            horas = 0;
            Centesimas.innerHTML = ":00";
            Segundos.innerHTML = ":00";
            Minutos.innerHTML = ":00";
            Horas.innerHTML = "00";
            eBtonInicio.disabled = false;
            eBtonParar.disabled = true;
            eBtonContinuar.disabled = true;
            eBtonReinicio.disabled = true;
        }

        function cronometro() {
            if (centesimas < 99) {
                centesimas++;
                if (centesimas < 10) { centesimas = "0" + centesimas }
                Centesimas.innerHTML = ":" + centesimas;
            }
            if (centesimas == 99) {
                centesimas = -1;
            }
            if (centesimas == 0) {
                segundos++;
                if (segundos < 10) { segundos = "0" + segundos }
                Segundos.innerHTML = ":" + segundos;
            }
            if (segundos == 59) {
                segundos = -1;
            }
            if ((centesimas == 0) && (segundos == 0)) {
                minutos++;
                if (minutos < 10) { minutos = "0" + minutos }
                Minutos.innerHTML = ":" + minutos;
            }
            if (minutos == 59) {
                minutos = -1;
            }
            if ((centesimas == 0) && (segundos == 0) && (minutos == 0)) {
                horas++;
                if (horas < 10) { horas = "0" + horas }
                Horas.innerHTML = horas;
            }
        }

    }

    window.addEventListener('load', app);
})()

