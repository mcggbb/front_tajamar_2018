'use strict';
import { listaAsignaturas } from './asignaturas.js'

export class Formulario {
    constructor() {
        this.datos = {
            nombre: '',
            apellido: '',
            nacimiento: '',
            email: '',
            passwd: '',
            passwd2: '',
            datos: '',
            isOk: false,
            isOk2: false,
            turno: '',
            curso: {},
            asignatura: {}
        }
        this.isLeido = false
        this.accederDom()
        this.definirManejadores()
    }

    accederDom() {
        this.domFormulario = document.querySelector('#form1')
        //Botones
        this.domBtnLeerFichero = document.querySelector('#btnLeerFichero')
        this.domBtnGuardarFichero = document.querySelector('#btnGuardarFichero')

        //Datos personales
        this.domInpNombre = document.querySelector('#nombre')
        this.domInpApellido = document.querySelector('#apellido')
        this.domInpFechaNacimiento = document.querySelector('#fecha')
        this.domInpEmail = document.querySelector('#email')
        this.domInpPasswd = document.querySelector('#passwd')
        this.domInpPasswd2 = document.querySelector('#passwd2')
        //Otros datos
        this.domAreaDatos = document.querySelector('#datos')
        //Turnos
        this.domRadioTurno = document.querySelectorAll('[name="turno"]')
        //Conformidad
        this.domCbxIsOk = document.querySelector('#isOk')
        this.domCbxIsOk2 = document.querySelector('#isOk2')
        //Selección Curso y asignatura
        this.domSelectCurso = document.querySelector('#curso')
        this.domSelectAsignatura = document.querySelector('#asignatura')

        this.domDivResultados = document.querySelector('#resultados')
        this.domFieldAcedemic = document.querySelector('#acedemic')//Para ocultar las listas
    }

    definirManejadores() {
        this.domBtnLeerFichero.addEventListener('click', this.leerFichero.bind(this))
        this.domBtnGuardarFichero.addEventListener('click', this.guardarFichero.bind(this))
        this.domFormulario.addEventListener('submit', this.enviar.bind(this))
        this.domCbxIsOk.addEventListener('change', this.completar.bind(this)) //OJO
        this.domSelectCurso.addEventListener('change', this.cargarAsignaturas.bind(this))
    }

    //leer fichero en local
    leerFichero() {
        console.log("Leer Fichero...")
        //console.log("Nombre:" + this.datos.nombre)
        if (typeof (Storage) !== "undefined") {
            //document.querySelector("#nombre").value = localStorage.getItem("nombre");
            this.domInpNombre.value = localStorage.getItem("nombre");
            this.domInpApellido.value = localStorage.getItem("apellido");
            this.domInpEmail.value = localStorage.getItem("email");
        } else {
            // Lo siento. Su web no soporta Web storage...
        }

    }

    //Guardar fichero en local
    guardarFichero() {
        this.recogerDatos()
        console.log("Guardar Fichero...")
        //Antes de usar el almacenamiento web, verifique el soporte del navegador para localStorage y sessionStorage:
        if (typeof (Storage) !== "undefined") {
            localStorage.setItem("nombre", this.datos.nombre);
            localStorage.setItem("apellido", this.datos.apellido);
            localStorage.setItem("email", this.datos.email);
        } else {
            // Lo siento. Su web no soporta Web storage...
            console.log("Lo siento. Su web no soporta guardarFichero")
        }
    }

    validarPassword() {
        /** 
         * https://developer.mozilla.org/es/docs/HTML/HTML5/Validacion_de_restricciones
        */
        let msg = "";

        if (this.domInpPasswd.value !== this.domInpPasswd2.value) {
            msg = "Las contraseñas no son iguales"
        }
        return this.domInpPasswd2.setCustomValidity(msg)

    }

    enviar(ev) {
        console.log(ev)
        this.validarPassword();
        this.recogerDatos()
        this.presentarDatos()
        if (!this.isLeido) {
            ev.preventDefault(); //Se salta las validaciones y evita el evento del formulario subtmit
            //localStorage.clear();
        }
    }

    completar() {
        this.domFieldAcedemic.classList.toggle('ocultar')
        if (this.domFieldAcedemic.classList.contains('ocultar')) {
            this.domRadioTurno[0].checked = true
            this.domSelectCurso.selectedIndex = 0
            this.domSelectAsignatura.selectedIndex = 0
        }
    }

    recogerDatos() {
        this.datos.nombre = this.domInpNombre.value
        this.datos.apellido = this.domInpApellido.value
        this.datos.nacimiento = this.domInpFechaNacimiento.value
        this.datos.email = this.domInpEmail.value
        this.datos.passwd = this.domInpPasswd.value
        this.datos.passwd2 = this.domInpPasswd2.value
        this.datos.datos = this.domAreaDatos.value
        this.datos.turno = this.procesarRadio(this.domRadioTurno)
        this.datos.isOk = this.domCbxIsOk.checked
        this.datos.isOk2 = this.domCbxIsOk2.checked
        this.datos.curso = this.procesarSelect(this.domSelectCurso)
        this.datos.asignatura = this.procesarSelect(this.domSelectAsignatura)
    }

    procesarRadio(nodo) {
        let value
        nodo.forEach((item) => {
            if (item.checked) {
                value = item.value
            }
        })
        return value //"mañana" "tarde"  "noche"
    }

    //
    procesarSelect(nodo) {
        let index = nodo.selectedIndex
        return {
            code: nodo.options[index].value,
            text: nodo.options[index].textContent
        }
    }

    /**
     * Presentación de datos en el div de resultados, al final de la página del formulario
     */
    presentarDatos() {
        let resultadoHTML =
            `<h2>Resultados</h2>
            <ul>
            <li>Nombre: ${this.datos.nombre}</li>
            <li>Apellido: ${this.datos.apellido}</li>
            <li>Fecha de Nacimiento: ${this.datos.nacimiento}</li>
            <li>e-Mail: ${this.datos.email}</li>
            <li>Contraseña: ${this.datos.passwd}</li>
            <li>Contraseña 2: ${this.datos.passwd2}</li>
            <li>Datos extra: ${this.datos.datos}</li>
            <li>Aceptadas condiciones: ${this.datos.isOk ? 'Si' : 'No'}</li>
            <li>Aceptadas condiciones 2: ${this.datos.isOk2 ? 'Si' : 'No'}</li>
            <li>Turno: ${this.datos.turno}</li>
            <li>Curso: ${this.datos.curso.text}</li>
            <li>Asignatura: ${this.datos.asignatura.text}</li>
            </ul>`
        this.domDivResultados.innerHTML = resultadoHTML
    }

    /**
     * Cargar un SELECT de cursos y su vez, según elección de asignaturas de cada curso
     */
    cargarAsignaturas(ev) {
        // Objeto de Cursos con asignaturas está en un fichero aparte llamado asignaturas.js
        console.log(ev.target.selectedIndex)
        let cursos = document.getElementById('curso')
        let asignaturas = document.getElementById('asignatura')
        let cursoSeleccionado = cursos.value

        // Se limpian las asignaturas
        asignaturas.innerHTML = '<option value="">Seleccione una ...</option>'

        if (cursoSeleccionado !== '') {
            // Se seleccionan las asignaturas y se ordenan
            cursoSeleccionado = listaAsignaturas[cursoSeleccionado]
            cursoSeleccionado.sort()

            // Insertamos las asignaturas
            //cursoSeleccionado.forEach(function (asignatura) {
            cursoSeleccionado.forEach(asignatura => {
                let opcion = document.createElement('option')
                opcion.value = asignatura
                opcion.text = asignatura
                asignaturas.add(opcion)
            });
        }

    }
}

