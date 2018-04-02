"use strict"; //Sistema obliga que la semántica a respetar el lenguaje

/**
 * JSON ( Java Script Object N flotación)
 * JSON es un formato para almacenar y transportar datos.
 * JSON es texto, y el texto se puede transportar a cualquier lugar, y leerse con cualquier lenguaje de programación.
 * Los objetos de JavaScript se pueden convertir en JSON y JSON se puede volver a convertir en objetos de JavaScript.
 * De esta forma, podemos trabajar con los datos como objetos JavaScript, sin análisis ni traducciones complicados.
 * 
 */

/** 
 * Ejemplo. Enviando JSON:
 */

// a JavaScript object...:
let myObj = { name: "John", age: 31, city: "New York" };
// ...converted into JSON:
let myJSON = JSON.stringify(myObj);
// send JSON:
console.log("Convierte de objeto Javascript a String JSON: " + myJSON);


/** 
 * Ejemplo. Recibiendo JSON:
 */

//myJSON is text received in JSON format.
//Convert JSON into a JavaScript object:
let myJSON2 = '{ "name":"John", "age":31, "city":"New York" }';
let myObj2 = JSON.parse(myJSON2);
console.log("Convierte un String escrito en formato JSON, a un objeto javascript: " + myObj2);


/**
 * Ejemplo. Almacenamiento de datos como JSON, utilizando localStorage
 * A diferencia de las cookies, el límite de almacenamiento es mucho mayor (al menos 5 MB) y la información nunca se transfiere al servidor.
 * El almacenamiento web es por origen (por dominio y protocolo). Todas las páginas, desde un origen, pueden almacenar y acceder a los mismos datos.
 */

//Storing data:
let myObjLocal, myJSONLocal, text, obj;
myObjLocal = { "name": "John", "age": 31, "city": "New York" };
myJSONLocal = JSON.stringify(myObjLocal);
localStorage.setItem("testJSON", myJSONLocal);

//Retrieving data:
text = localStorage.getItem("testJSON");
obj = JSON.parse(text);
console.log(`${obj.name}  ${obj.age}  ${obj.city}`);