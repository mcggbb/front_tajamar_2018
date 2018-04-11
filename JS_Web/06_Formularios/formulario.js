'use strict';
export class Formulario {
    constructor() {
        this.datos = {
            nombre: '',
            apellido: '',
            email: '',
            passwd: '',
            datos: '',
            isOk: false,
            isOk2: false,
            turno: '',
            curso: {}
        }
        this.accederDom()
        this.definirManejadores()
    }

    accederDom() {
        this.domBtnSaludar = document.querySelector('#btnSaludar')
        this.domBtnEnviar = document.querySelector('#btnEnviar')
        this.domBtnBorrar = document.querySelector('#btnBorrar')
        this.domInpNombre = document.querySelector('#nombre')
        this.domInpApellido = document.querySelector('#apellido')
        this.domInpEmail = document.querySelector('#email')
        this.domInpPasswd = document.querySelector('#passwd')
        this.domAreaDatos = document.querySelector('#datos')
        this.domRadioTurno = document.querySelectorAll('[name="turno"]')
        // this.domRadioTurno = document.getElementsByName(turno)
        this.domCbxIsOk = document.querySelector('#isOk')
        this.domCbxIsOk2 = document.querySelector('#isOk2')
        this.domSelectCurso = document.querySelector('#curso')
        this.domDivResultados = document.querySelector('#resultados')
        this.domFieldAcedemic = document.querySelector('#acedemic')
    }

    definirManejadores() {
        this.domBtnSaludar.addEventListener('click', this.saludar.bind(this))
        this.domBtnEnviar.addEventListener('click', this.enviar.bind(this))
        this.domBtnBorrar.addEventListener('click', this.borrar.bind(this))
        //this.domCbxIsOk.addEventListener('change', this.completar.bind(this)) //OJO
        this.domSelectCurso.addEventListener('change', this.cargarAsignaturas.bind(this))
    }

    saludar() {
        console.log('Hola amigos')
    }

    enviar(ev) {
        ev.preventDefault()
        this.recogerDatos()
        this.presentarDatos()
    }

    borrar() {
    }

    completar() {
        // this.domFieldAcedemic.disabled = !this.domFieldAcedemic.disabled
        this.domFieldAcedemic.classList.toggle('ocultar')
        if (this.domFieldAcedemic.classList.contains('ocultar')) {
            this.domRadioTurno[0].checked = true
            this.domSelectCurso.selectedIndex = 0
        }
    }

    recogerDatos() {
        this.datos.nombre = this.domInpNombre.value
        this.datos.apellido = this.domInpApellido.value
        this.datos.email = this.domInpEmail.value
        this.datos.passwd = this.domInpPasswd.value
        this.datos.datos = this.domAreaDatos.value
        this.datos.turno = this.procesarRadio(this.domRadioTurno)
        this.datos.isOk = this.domCbxIsOk.checked
        this.datos.isOk2 = this.domCbxIsOk2.checked
        this.datos.curso = this.procesarSelect(this.domSelectCurso)
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

    procesarSelect(nodo) {
        let index = nodo.selectedIndex
        return {
            code: nodo.options[index].value,
            text: nodo.options[index].textContent
        }
    }

    presentarDatos() {
        let resultadoHTML =
            `<h2>Resultados</h2>
        <ul>
            <li>Nombre: ${this.datos.nombre}</li>
            <li>Apellido: ${this.datos.apellido}</li>
            <li>e-Mail: ${this.datos.email}</li>
            <li>Contraseña: ${this.datos.passwd}</li>
            <li>Datos extra: ${this.datos.datos}</li>
            <li>Aceptadas condiciones: ${this.datos.isOk ? 'Si' : 'No'}</li>
            <li>Aceptadas condiciones 2 ${this.datos.isOk2 ? 'Si' : 'No'}</li>
            <li>Turno: ${this.datos.turno}</li>
            <li>Curso: ${this.datos.curso.text}</li>
        </ul>
        `
        this.domDivResultados.innerHTML = resultadoHTML

    }

    /**
     * Cargar un SELECT de cursos y su vez, según elección de asignaturas de cada curso
     */

    /*  cargarCursos() {
         var listaCursos = ["Desarrollo Front", "Diseño Web", "Servidores Node", "SQL"];
         listaCursos.sort();
         addOptions("curso", listaCursos);
     }
 
     //Función para agregar opciones a un <select>.
     addOptions(domElement, listaCursos) {
         var selector = document.getElementsByName(domElement)[0];
         for (curso in listaCursos) {
             var opcion = document.createElement("option");
             opcion.text = listaCursos[curso];
             // Añadimos un value a los option para hacer mas facil escoger los pueblos
             opcion.value = listaCursos[curso].toLowerCase()
             selector.add(opcion);
         }
     } */

    cargarAsignaturas() {
        // Objeto de Cursos con asignaturas
        var listaAsignaturas = {
            front: ["html5", "css3", "Javascript", "JQuery"],
            web: ["Dreamweaver", "Visual Studio Code", "Bloc Note"],
            node: ["php", "hibernate", "spring", "Java"],
            sql: ["sql"]
        }

        var cursos = document.getElementById('curso')
        var asignaturas = document.getElementById('asignatura')
        var cursoSeleccionado = cursos.value

        // Se limpian las asignaturas
        asignaturas.innerHTML = '<option value="">Seleccione un Asignatura...</option>'

        if (cursoSeleccionado !== '') {
            // Se seleccionan las asignaturas y se ordenan
            cursoSeleccionado = listaAsignaturas[cursoSeleccionado]
            cursoSeleccionado.sort()

            // Insertamos las asignaturas
            cursoSeleccionado.forEach(function (asignatura) {
                let opcion = document.createElement('option')
                opcion.value = asignatura
                opcion.text = asignatura
                asignaturas.add(opcion)
            });
        }

    }

    // Iniciar la carga de provincias solo para comprobar que funciona
    //cargarCursos();

}

