'use strict'
//import { Formulario } from './formulario.js'


//Métodos GET, POST, DELETE, PUT, ADD

//La función solicita datos de un servidor web y los muestra:
function app() {
    document.querySelector("#btnAjax").addEventListener("click", getDatos)
    document.querySelector("#btnAjaxItem").addEventListener("click", getDatos)

    function stateChange(){
        let xhttp = new XMLHttpRequest();
        
        xhttp.onreadystatechange = () => {
            if (xhttp.readyState === 4 && xhttp.status === 200) {
                //console.log(xhttp.responseText)
                document.getElementById("demo").innerHTML = JSON.parse(xhttp.responseText);
                console.dir(JSON.parse(xhttp.responseText))
                let response = JSON.parse(xhttp.responseText)
            }
            else {

            }
        };
    }
    
    function deleteDatos(ev) {
        let metodo = "DELETE"
        let url = "http://localhost:3000/posts/1"

        

        xhttp.open(metodo, url, true);
        xhttp.send(null);
    }

    function getDatos(ev) {
        let metodo = "GET"
        let url = "http://localhost:3000/posts/1"

        

        xhttp.open(metodo, url, true);
        xhttp.send(null);
    }


}

window.addEventListener('load', app, false)
