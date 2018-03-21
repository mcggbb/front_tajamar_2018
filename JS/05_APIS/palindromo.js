"use strict"; //Sistema obliga que la semántica a respetar el lenguaje

let frase = {
    titulo: 'No subas abuson',
    isPalindromo: true,
    isRespuesta: ['No es un palíndromo', 'Es un palíndromo'],

    comprobarPalindromo: function () {
        let cadena = this.titulo.toLowerCase(); //pasar minúsculas
        let letrasEspacios = cadena.split(" ");
        let cadenaSinEspacios = "";

        for (let i in letrasEspacios) {
            if (letrasEspacios[i] != " ") {
                cadenaSinEspacios += letrasEspacios[i];
            }
        }

        let letrasReves = cadenaSinEspacios.split("");
        let alReves = letrasReves.reverse();
        let nuevaFrase = alReves.join('');

        return (nuevaFrase === cadenaSinEspacios) ? 1 : 0;
    },

    mostrarPalindromo: function(){
        console.log(this.isRespuesta[this.comprobarPalindromo()])
    }
}

frase.mostrarPalindromo();
