'use strict';

export class Formulario {
    constructor() {
        this.datos = {
            //Identificación
            email: '', //Cuenta de correo
            passwd: '', //Clave de acceso
            passwd2: '', //Repetición de clave de acceso

            //Curso
            curso: '',

            //Datos Personales
            nombre: '', //Nombre
            apellido: '', //Primer apellido
            apellido2: '', //Segundo apellido

            //Fecha de nacimiento
            fechaNacimientoDay: '', //dia, mes y año Fecha de nacimiento
            fechaNacimientoMonth: '', //dia, mes y año Fecha de nacimiento
            fechaNacimientoYear: '', //dia, mes y año Fecha de nacimiento

            //Aficiones
            isMusica: false,
            isViajar: false,
            isPintura: false,
            isFotografia: false,
            isCine: false,
            isLectura: false,
            isDeporte: false,
            isBaile: false,

            //Fecha actual + texto
            fechaActual: '' //Fecha de hoy y otros
        }

        this.asignaturas = [
            ["html5", "css3", "Javascript", "JQuery"],
            ["Dreamweaver", "Visual Studio Code", "Bloc Note"],
            ["php", "hibernate", "spring", "Java"]
        ]

        this.isLeido = false
        this.accederDom()
        this.definirManejadores()
        this.mostrarFechaActual()
    }

    accederDom() {
        //Formulario
        this.domFormulario = document.querySelector('#form1')

        //Identificación
        this.domInpEmail = document.querySelector('#email')
        this.domInpPasswd = document.querySelector('#passwd')
        this.domInpPasswd2 = document.querySelector('#passwd2')

        //Selección Curso y asignatura
        this.oDomCurso = document.querySelectorAll('[name="curso"]')
        this.oDomAsignaturas = document.querySelector('#asignatura')

        //Datos personales
        this.domInpNombre = document.querySelector('#nombre')
        this.domInpApellido = document.querySelector('#apellido')
        this.domInpApellido2 = document.querySelector('#apellido2')

        //Fecha de nacimiento
        this.domInpFechaNacimientoDay = document.querySelector('#day')
        this.domInpFechaNacimientoMonth = document.querySelector('#month')
        this.domInpFechaNacimientoYear = document.querySelector('#year')

        //Aficiones
        this.domCbxIsMusica = document.querySelector('#isMusica')
        this.domCbxIsViajar = document.querySelector('#isViajar')
        this.domCbxIsPintura = document.querySelector('#isPintura')
        this.domCbxIsFotografia = document.querySelector('#isFotografia')
        this.domCbxIsCine = document.querySelector('#isCine')
        this.domCbxIsLectura = document.querySelector('#isLectura')
        this.domCbxIsDeporte = document.querySelector('#isDeporte')
        this.domCbxIsBaile = document.querySelector('#isBaile')

        //Otros datos
        this.domFechaActual = document.querySelector('#fechaActual')

        //Datos a mostrar en el envío
        this.domDivResultados = document.querySelector('#resultados')
    }

    //Definimos los manejadores de evento para los 
    definirManejadores() {
        this.domFormulario.addEventListener('submit', this.enviar.bind(this))
        this.oDomCurso.forEach(item => {
            item.addEventListener('change', this.mostrarAsignaturas.bind(this))
        })
    }

    validarPassword() {
        if (document.getElementById("passwd").value != document.getElementById("passwd2").value) {
            document.getElementById("camposPassword").innerHTML = "Las passwords deben de coincidir";
            return false;
        } else {
            document.getElementById("camposPassword").innerHTML = "";
            return true;
        }
    }

    enviar(ev) {
        this.validarPassword();
        this.recogerDatos();
        this.presentarDatos();
        if (!this.isLeido) {
            ev.preventDefault(); //Se salta las validaciones y evita el evento del formulario subtmit
        }
    }

    recogerDatos() {
        //Identificación
        this.datos.email = this.domInpEmail.value
        this.datos.passwd = this.domInpPasswd.value
        this.datos.passwd2 = this.domInpPasswd2.value

        //Curso
        this.oDomCurso.forEach(item => {
            if (item.checked === true) {
                this.datos.curso = item.id;
            }
        })
        this.datos.asignaturas = this.procesarSelect(this.oDomAsignaturas)

        //Datos Pesonales
        this.datos.nombre = this.domInpNombre.value
        this.datos.apellido = this.domInpApellido.value
        this.datos.apellido2 = this.domInpApellido2.value

        //Fecha de Nacimiento
        this.datos.fechaNacimientoDay = this.domInpFechaNacimientoDay.value
        this.datos.fechaNacimientoMonth = this.domInpFechaNacimientoMonth.value
        this.datos.fechaNacimientoYear = this.domInpFechaNacimientoYear.value

        //Aficiones
        this.datos.isMusica = this.domCbxIsMusica.checked
        this.datos.isViajar = this.domCbxIsViajar.checked
        this.datos.isPintura = this.domCbxIsPintura.checked
        this.datos.isFotografia = this.domCbxIsFotografia.checked
        this.datos.isCine = this.domCbxIsCine.checked
        this.datos.isLectura = this.domCbxIsLectura.checked
        this.datos.isDeporte = this.domCbxIsDeporte.checked
        this.datos.isBaile = this.domCbxIsBaile.checked

        //Fecha actual y datos
        this.datos.fechaActual = this.domFechaActual.value//OJO
    }

    procesarRadio(nodo) {
        let value
        nodo.forEach((item) => {
            if (item.checked) {
                value = item.value
            }
        })
        return value
    }

    procesarSelect(nodo) {
        let index = nodo.selectedIndex
        return {
            code: nodo.options[index].value,
            text: nodo.options[index].textContent
        }
    }

    /**
     * Cargar un SELECT de cursos y su vez, según elección de asignaturas de cada curso
     */
    mostrarAsignaturas(ev) {
        let pulsado = ev.target.checked

        let array
        for (let i = 0; i < this.oDomCurso.length; i++) {
            if (this.oDomCurso[i].checked === pulsado) {
                array = this.asignaturas[i]
            }
        }

        let asig = ''

        array.forEach(item => {
            asig += `<option value="${item}">${item}</option>`

        })

        this.oDomAsignaturas.innerHTML = asig
    }

    /**
     * Presentación de datos en el div de resultados, al final de la página del formulario
     */
    presentarDatos() {
        let resultadoHTML = `<h2>Datos del formulario a mostrar</h2>
            <ul>
            <li>e-Mail: ${this.datos.email}</li>
            <li>Contraseña: ${this.datos.passwd}</li>
            <li>Contraseña 2: ${this.datos.passwd2}</li>
            
            <li>Curso: ${this.datos.curso}</li>       
            <li>Asignatura: ${this.datos.asignaturas.text}</li>
            
            <li>Nombre: ${this.datos.nombre}</li>
            <li>Primer apellido: ${this.datos.apellido}</li>
            <li>Segundo apellido: ${this.datos.apellido2}</li>
            
            <li>Fecha de Nacimiento: ${this.datos.fechaNacimientoDay} / ${this.datos.fechaNacimientoMonth} / ${this.datos.fechaNacimientoYear}</li>
            
            <li>Aficiones:<ul>
            <li>Música ${this.datos.isMusica ? 'Si' : 'No'} </li>
            <li>Viajar ${this.datos.isViajar ? 'Si' : 'No'} </li>
            <li>Pintura ${this.datos.isPintura ? 'Si' : 'No'} </li>
            <li>Fotografía ${this.datos.isFotografia ? 'Si' : 'No'} </li>
            <li>Cine ${this.datos.isCine ? 'Si' : 'No'} </li>
            <li>Lectura ${this.datos.isLectura ? 'Si' : 'No'} </li>
            <li>Deporte ${this.datos.isDeporte ? 'Si' : 'No'} </li>
            <li>Baile ${this.datos.isBaile ? 'Si' : 'No'} </li></ul>
            </li>

            </ul>`

        this.domDivResultados.innerHTML = resultadoHTML
    }

    mostrarFechaActual() {
        let fechaActual = new Date();
        const DAYS = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
        const MESES = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
        let mostrarFecha = ''

        document.getElementById("fechaActual").innerHTML = `
        ${DAYS[fechaActual.getDay()]} día 
        ${fechaActual.getDate()} de 
        ${MESES[fechaActual.getMonth()]} del año 
        ${fechaActual.getFullYear()}`;
    }
}

