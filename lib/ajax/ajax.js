"use strict"; //Sistema obliga que la semántica a respetar el lenguaje

/***************************************************************************************
 * AJAX = Asíncrono Javascript And XML.
 * AJAX no es un lenguaje de programación.
 * AJAX solo usa una combinación de:
 * - Un navegador incorporado en el objeto XMLHttpRequest (para solicitar datos desde un servidor web)
 * - JavaScript y HTML DOM (para mostrar o usar los datos)
 * - AJAX es un nombre engañoso. Las aplicaciones AJAX pueden usar XML para transportar datos, pero es 
 *      igualmente común transportar datos como texto sin formato o texto JSON.
 * - AJAX permite que las páginas web se actualicen de forma asíncrona mediante el intercambio de datos con 
 * un servidor web detrás de las escenas. Esto significa que es posible actualizar partes de una página web, 
 * sin volver a cargar toda la página.
 * Por razones de seguridad, los navegadores modernos no permiten el acceso a través de dominios.
 * Esto significa que tanto la página web como el archivo XML que intenta cargar deben estar ubicados en el mismo servidor.
 * 
 * Property	Description
 * - onreadystatechange	Defines a function to be called when the readyState property changes
 * - readyState	Holds the status of the XMLHttpRequest.
 *          0: request not initialized 
 *          1: server connection established
 *          2: request received 
 *          3: processing request 
 *          4: request finished and response is ready
 * - responseText	Returns the response data as a string
 * - responseXML	Returns the response data as XML data
 * - status	Returns the status-number of a request
 *          200: "OK"
 *          403: "Forbidden"
 *          404: "Not Found"
 * - statusText	Returns the status-text (e.g. "OK" or "Not Found")
 * 
 * SOLICITUDES GET
 * - xhttp.open("GET", "demo_get.asp", true);
 * - xhttp.open("GET", "demo_get.asp?t=" + Math.random(), true); puede obtener un resultado en caché. Para evitar esto, agregue una ID única a la URL:
 * - xhttp.open("GET", "demo_get2.asp?fname=Henry&lname=Ford", true); enviar información con el método GET, agregue la información a la URL:
 * 
 * SOLICITUDES POST
 * - xhttp.open("POST", "demo_post.asp", true);
 * - xhttp.send();
 * 
 * - xhttp.open("POST", "ajax_test.asp", true);
 * - xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
 * - xhttp.send("fname=Henry&lname=Ford");
 * 
 * 
 */

//verifique si el navegador admite el objeto XMLHttpRequest, o bien cree un objeto ActiveX:
if (window.XMLHttpRequest) {
    // code for modern browsers
    xmlhttp = new XMLHttpRequest();
 } else {
    // code for old IE browsers
    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
}

//La función solicita datos de un servidor web y los muestra:
function loadDoc() {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("demo").innerHTML = this.responseText;
        }
    };
    /**
     * Para enviar una solicitud a un servidor, usamos los métodos open () y send () del objeto XMLHttpRequest:
     * GET es más simple y más rápido que POST, y se puede usar en la mayoría de los casos.
     * Sin embargo, siempre use solicitudes POST cuando:
     * - Un archivo en caché no es una opción (actualice un archivo o base de datos en el servidor).
     * - Enviar una gran cantidad de datos al servidor (POST no tiene limitaciones de tamaño).
     * - Al enviar la entrada del usuario (que puede contener caracteres desconocidos), POST es más robusto y seguro que GET.
     */
    
    xhttp.open("GET", "ajax_info.txt", true);
    xhttp.send();
}