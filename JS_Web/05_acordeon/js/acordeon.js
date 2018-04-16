"use strict"; //Sistema obliga que la semántica a respetar el lenguaje

/**
 * @author San Miguel
 * @class Acordeon
 * 
 * Ejemplo: https://codepen.io/sureshrkm/pen/ZbzBpr
 * Ejemplo: https://jsfiddle.net/drj3m5tg/1/
 * 
 */

class Acordeon {
    constructor(accordion) {
        //console.log("entra")
        this.oAccordion = document.getElementById(accordion);
        this.oPanel = this.oAccordion.querySelectorAll(".panel");//Texto adicional
        this.oEnlace.addEventListener("click", this.mostrar.bind(this))

    }

    mostrar() {
        //console.log("mostrar" + " " + this.accordion.length)
        for (let i = 0; i < this.accordion.length; i++) {
            this.accordion[i].addEventListener('click', function () {
                this.removeOpen();
                // add active class to clicked element and open class to next slibling
                const toggleResult = this.classList.toggle('active');
                this.nextElementSibling.classList.toggle('panel-open', toggleResult);
            });
        };
    }

    // remove open class for all elements
    removeOpen() {
        //console.log("removeOpen")
        for (let i = 0; i < this.panel.length; i++) {
            this.panel[i].classList.remove('panel-open');
        }
    }
}

function init() {
    let n = document.querySelectorAll('.accordion').length
    let aTextos = []
    for (let i = 0; i < n; i++) {
        aTextos.push(new Acordeon("accordion"+(i+1)))
    }
 }

window.addEventListener("load", init);


