"use strict"; //Sistema obliga que la semántica a respetar el lenguaje

let libro1 = {
    autor: 'J. R. R. Tolkien',
    titulo: 'El Señor de los Anillos',
    editorial: 'Minotauro',
    fecha: new Date(1954,3,17),
    generos: ['Fantasia'],
    mostrarReferencia: function () {
        let ref = this.autor + '. '
        ref += '"' + this.titulo + '". '
        ref += this.editorial + ', ' + this.fecha.getFullYear() + '. '
        console.log(ref)
    }
}
libro1.mostrarReferencia();

let miFuncion = function(){
    console.log("Soy una función")
}
//miFuncion();

let o = {
    head: "Soy un objeto",
    metodo: miFuncion
}
//o.metodo()

let oNuevoObjeto = new miFuncion();
//console.log(typeof oNuevoObjeto)

//Patrón de invocación Apply
let obj = {
    head: "Soy un objeto",
}
miFuncion.call(obj)
