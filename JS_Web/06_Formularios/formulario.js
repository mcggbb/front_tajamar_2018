//"use strict"; //Sistema obliga que la semántica a respetar el lenguaje

export class Formulario {
    constructor() {
        this.datos = {
            nombre: "",
            apellido: "",
            email: "",
            passwd: "",
            datos: "",
            isOk: false,
            isOk2: false,
            turno: "",
            curso: {}
        }

        this.accederDom();
        this.definirManejadores();
    }

    accederDom() {
        this.domBtnSaludar = document.querySelector("#btnSaludar");
        this.domBtnEnviar = document.querySelector("#btnEnviar");
        this.domBtnBorrar = document.querySelector("#btnBorrar");
        //Datos Personales
        this.domInputNombre = document.querySelector("#nombre");
        this.domInputApellido = document.querySelector("#apellido");
        this.domInputEmail = document.querySelector("#email");
        this.domInputPasswd = document.querySelector("#passwd");
        //Otros datos
        this.domAreaDatos = document.querySelector("#datos");
        //Turno - radio
        this.domRadioTurno = document.querySelectorAll("'[name='Turno']");
        //checkbox
        this.domCbxIsOk  = document.querySelector("#isOk");
        this.domCbxIsOk2  = document.querySelector("#isOk2");
        //Selección de opciones
        this.domSelectCurso = document.querySelector("#curso");
        //Presentar en la capa
        this.domDivResultado = document.querySelector("#resultado")
    }
 

    //Manejadores de botones
    definirManejadores() {
        this.domBtnSaludar.addEventListener('click', this.saludar.bind(this))
        this.domBtnEnviar.addEventListener('click', this.enviar.bind(this))
        this.domBtnBorrar.addEventListener('click', this.borrar.bind(this))
    }

    saludar() {
        console.log("Hola amigos");
    }

    enviar(ev) {
        ev.preventDefault();
        this.recogerDatos()
        console.dir(this.datos)
        this.presentarDatos();
    }

    recogerDatos() {
        this.datos.nombre = this.domInputNombre.value
        this.datos.apellido = this.domInputApellido.value
        this.datos.email = this.domInputEmail.value
        this.datos.passwd = this.domInputPasswd.value
        this.datos.datos = this.domAreaDatos.value
        this.datos.turno = this.procesarRadio(this.domRadioTurno);
        this.datos.isOk = this.domCbxIsOk.checked;
        this.datos.isOk2 = this.domCbxIsOk2.checked;
        this.datos.curso = this.procesarSelect(this.domSelectCurso);
    }

    procesarRadio(nodo) {
        let valor; //Valores que tienen son mañana, tarde, noche

        nodo.forEach((item) => {
            if (item.checked) {
                valor = item.value;
            }
            //console.log(item.checked, item.value)
        })
        return valor;
    }

    procesarSelect(nodo){
        let index = nodo.selectedIndex;
        return {
            code: nodo.options[index].value,
            text: nodo.options[index].textContent
        }
    }

    presentarDatos(){
        let resultadoHTML = 
        `<h2>Resultados</h2>
        <ul>
        <li>Nombres: ${this.datos.nombre}</li>
        <li>Apellidos: ${this.datos.apellido}</li>
        <li>Email: ${this.datos.email}</li>
        <li>Contraseña: ${this.datos.passwd}</li>
        <li>Datos extras: ${this.datos.datos}</li>
        <li>Aceptadas condiciones: ${this.datos.isOk ? "SI" : "NO"}</li>
        <li>Aceptadas condiciones 2: ${this.datos.isOk2 ? "SI" : "NO"}</li>
        <li>Turno: ${this.datos.turno}</li>
        <li>Curso: ${this.datos.curso.text}</li>
        </ul>
        `
        this.domDivResultado.innerHTML = resultadoHTML
    }

    borrar() {

    }

     /**
     * Cargar un SELECT dependiendo de otro SELECT - Javascript - DOM
     */
    

    //Función para cargar las provincias al campo "select".
    cargarCursos() {
        //Inicializamos el array.
        let curso = ["Desarrollador Front", "Diseño Web", "Servidores", "BBDD"];
        //Ordena el array alfabeticamente.
        curso.sort();
        //Pasamos a la funcion addOptions(el ID del select, las provincias cargadas en el array).
        addOptions("curso", curso);
    }


//Función para agregar opciones a un <select>.
 addOptions(domElement, array) {
    let selector = document.getElementsByName(domElement)[0];
    //Recorremos el array.
    for (curso in array) {
        var opcion = document.createElement("option");
        opcion.text = array[curso];
        selector.add(opcion);
    }
}


//Función para cargar los pueblos al campo "select" dependiendo de la provincia elegida.
cargarPueblos() {
    //Objeto de provincias con los pueblos correspondientes.
    let listaAsignaturas = {
        desarrollador: ["HTML5", "CSS3", "Javascript"],
        diseñador: ["Moviles", "Tablet", "Portátiles"],
        servidores: ["Node", "Cics", "Db2"],
        bbdd: ["SQL", "SQL Server"]
    }

    //Declaramos un array donde guardamos todos los elementos de tipo id=provincias e id=pueblos.
    let cursos = document.getElementById('curso');
    let asignaturas = document.getElementById('asignatura');
    
    //Tomamos como provinciaSeleccionada, el valor del id provincia (var provincias).
    let cursosSeleccionada = cursos.value;

    //Se limpian los asignaturas.
    asignaturas.innerHTML = '<option value="">Seleccione un Pueblo...</option>'

    //Si existe provinciaSeleccionada...
    if(cursosSeleccionada !== ""){
        //Se seleccionan los asignaturas y se ordenan.
        cursosSeleccionada = listaAsignaturas[cursosSeleccionada];
        cursosSeleccionada.sort();

        //Insertamos los asignaturas mediante un FOR.
        provinciaSeleccionada.forEach(function(asignatura){
            var opcion = document.createElement('option');
            opcion.value = asignatura;
            opcion.text = asignatura;
            asignaturas.add(opcion);
        });
    }
 }

   

}



