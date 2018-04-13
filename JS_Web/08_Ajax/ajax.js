'use strict'
function app() {

    /**
     * - La respuesta del servidor sólo puede corresponder a alguno de los cinco estados definidos por las variables
     * - El ejemplo hay que manejarlo con las siguiente referencia: https://www.npmjs.com/package/json-server#install
     */
    const READY_STATE_UNINITIALIZED = 0;
    const READY_STATE_LOADING = 1;
    const READY_STATE_LOADED = 2;
    const READY_STATE_INTERACTIVE = 3;
    const READY_STATE_COMPLETE = 4;

    let peticion_http;

    //Función genérica que carga el contenido
    function cargaContenido(url, metodo, send, funcion) {
        peticion_http = inicializa_xhr();

        if (peticion_http) {
            peticion_http.onreadystatechange = funcion;
            //OJO ---> Una solicitud POST, PUT o PATCH debe incluir un Content-Type: application/json
            //peticion_http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            peticion_http.open(metodo, url, true);
            peticion_http.setRequestHeader("Content-Type", "application/json");
            peticion_http.send(send);
        }
    }

    //La función inicializa_xhr() se emplea para encapsular la creación del objeto XMLHttpRequest
    function inicializa_xhr() {
        if (window.XMLHttpRequest) {
            return new XMLHttpRequest();
        }
        else if (window.ActiveXObject) {
            return new ActiveXObject("Microsoft.XMLHTTP");
        }
    }

    //La función muestraContenido() también se refactoriza para emplear las variables globales definidas
    function muestraContenido() {
        if (peticion_http.readyState == READY_STATE_COMPLETE) {
            if (peticion_http.status == 200) {
                document.querySelector("#demo").innerHTML = peticion_http.responseText;
            }
            else {
                console.log("status: " + peticion_http.status)
            }
        }
        else {
            console.log("readyState: " + peticion_http.readyState)
        }
    }

    //Por último, la función descargaArchivo() simplemente realiza una llamada a la función cargaContenido() con los parámetros adecuados
   /*  function descargaArchivo() {
        cargaContenido("http://localhost/holamundo.txt", "GET", muestraContenido);
    } */

    /**************************************************************************************************************/
    //OJO ---> Una solicitud POST, PUT o PATCH debe incluir un Content-Type: application/json
    
    
    document.querySelector("#btnAjax").addEventListener('click', getDatos)
    document.querySelector("#btnAjaxItem").addEventListener('click', getDatos)
    document.querySelector("#btnAjaxBorrar").addEventListener('click', deleteDatos)
    document.querySelector("#btnAjaxAdd").addEventListener('click', postDatos) // Añadir
    document.querySelector("#btnAjaxModif").addEventListener('click', putDatos) //Modif


    function getDatos(ev) {
        let metodo = 'GET'
        let url = ''
        
        if (ev.target.id === 'btnAjax') {
            url = 'http://localhost:3000/posts'
        } else { // ev.target.id == 'btnAjaxItem'
            let item = document.querySelector('#item').value
            if (item) {
                url = 'http://localhost:3000/posts/' + item
            } else {
                return
            }
        }

        cargaContenido(url, metodo, null, muestraContenido);
    }

    function postDatos() {
        let data = {
            title: "El Señor de los Anillos",
            author: "JRR Tolkien"
        }
        let metodo = 'POST'
        let url = 'http://localhost:3000/posts'
        
        cargaContenido(url, metodo, JSON.stringify(data), muestraContenido);
    }

    function deleteDatos(ev) {
        let metodo = 'DELETE'
        let url = ''
        let item = document.querySelector('#itemB').value
        if (item) {
            url = 'http://localhost:3000/posts/' + item
        } else {
            return
        }

        cargaContenido(url, metodo, null, muestraContenido);
    }

    

    function putDatos(ev) {
        let data = {
            title: "Neuromante",
            author: "William Gibson"
        }
        let metodo = 'PUT'
        let url = ''
        let item = document.querySelector('#itemM').value
        if (item) {
            url = 'http://localhost:3000/posts/' + item
        } else {
            return
        }
        cargaContenido(url, metodo, JSON.stringify(data), muestraContenido);
    }










}

window.addEventListener('load', app, false)
