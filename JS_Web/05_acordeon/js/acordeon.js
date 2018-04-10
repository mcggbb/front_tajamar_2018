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
    constructor() {
        console.log("entra")
        this.accordion = document.querySelector("accordion");
        this.panel = document.querySelector("panel");

        //this.accordion.addEventListener("click", this.mostrar.bind(this));
        this.mostrar();
    }

    mostrar() {
        for (let i = 0; i < this.accordion.length; i++) {
            // remove open class for all elements
            this.removeOpen();
            // add active class to clicked element and open class to next slibling
            this.activarOpen();
        };
    }

    // Poner
    activarOpen() {
        const toggleResult = this.classList.toggle('active');
        this.nextElementSibling.classList.toggle('panel-open', toggleResult);
    }

    // remove open class for all elements
    removeOpen() {
        for (let i = 0; i < this.panel.length; i++) {
            this.panel[i].classList.remove('panel-open');
        }
    }
}

function init() {
    console.log("init")
    new Acordeon();
    /* let n = document.querySelector("accordion").length;
    console.log("cuantos accordion hay ", n)
    let aTextos = []
    for (let i = 1; i <= n; i++) {
        console.log("bucle init")
        aTextos.push(new Acordeon("accordion"+i))
    }*/
}

window.addEventListener("load", init);


