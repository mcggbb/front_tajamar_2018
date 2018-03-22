"use strict"; //Sistema obliga que la semántica a respetar el lenguaje

let frase = {
    titulo: 'No subas abusón',
    isRespuesta: ['No es un palíndromo', 'Es un palíndromo'],

    comprobarPalindromo: function () {
        let cadena = sinDiacriticos(this.titulo).toLowerCase(); //pasar minúsculas
        let letrasEspacios = cadena.split(" ");
        let cadenaSinEspacios = "";

        for (let i in letrasEspacios) {
            if (letrasEspacios[i] != " ") {
                cadenaSinEspacios += letrasEspacios[i];
            }
        }

        /* let letrasReves = cadenaSinEspacios.split("");
        let alReves = letrasReves.reverse();
        let nuevaFrase = alReves.join(''); */

        let letrasReves = cadenaSinEspacios.split("").reverse().join('');
        return (letrasReves === cadenaSinEspacios) ? 1 : 0;
    },

    mostrarPalindromo: function(){
        console.log(this.isRespuesta[this.comprobarPalindromo()])
    }
}

//Incorporar dicha función al objeto frase
let sinDiacriticos = (function(){
    let de = 'ÁÃÀÄÂÉËÈÊÍÏÌÎÓÖÒÔÚÜÙÛÑÇáãàäâéëèêíïìîóöòôúüùûñç',
         a = 'AAAAAEEEEIIIIOOOOUUUUNCaaaaaeeeeiiiioooouuuunc',
        re = new RegExp('['+de+']' , 'ug');

    return texto =>
        texto.replace(
            re, 
            match => a.charAt(de.indexOf(match))
        );
})();

frase.mostrarPalindromo();