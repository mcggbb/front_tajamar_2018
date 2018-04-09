"use strict"; //Sistema obliga que la semántica a respetar el lenguaje

(function () {
    function main() {
        let count = 0; //contador de enlaces que visito

        function cambiaLista(nameItem) {
            const ENLACES = 6; //enlaces en la página web.
            let idItem = document.getElementById(nameItem);
            idItem.textContent = "Ops, no tengo " + nameItem;
            count++;
            
            console.log(count + " " + ENLACES)
            if (count === ENLACES) {
                document.write("Lo siento, parece que estoy ilocalizable");
            }
        }

        document.querySelector("#linkedin").onclick = function () { cambiaLista('linkedin') }
        document.querySelector("#twitter").onclick = function () { cambiaLista('twitter') }
        document.querySelector("#facebook").onclick = function () { cambiaLista('facebook') }
        document.querySelector("#flickr").onclick = function () { cambiaLista('flickr') }
        document.querySelector("#tumblr").onclick = function () { cambiaLista('tumblr') }
        document.querySelector("#instagram").onclick = function () { cambiaLista('instagram') }
    };

    //document.addEventListener("DOMContentLoaded", main)
    window.addEventListener("load", main)

})();

