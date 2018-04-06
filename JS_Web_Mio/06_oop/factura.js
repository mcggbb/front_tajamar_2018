"use strict"; //Sistema obliga que la semántica a respetar el lenguaje

/**
 * Ejercicio (19b)
 * Objeto Facturas: 
 * Definir la estructura de un objeto que almacena una factura. 
 * Las facturas están formadas por 
 * - la información de la propia empresa (nombre de la empresa, dirección, teléfono, NIF), 
 * - la información del cliente (similar a la de la empresa), 
 * - una lista de elementos (cada uno de los cuales dispone de descripción, precio, cantidad) y 
 * - otra información básica de la factura (importe total, tipo de IVA, forma de pago). 
 * 
 * - añadir un método que calcule el importe total de la factura y actualice el valor de la propiedad correspondiente. 
 * - Por último, añadir otro método que muestre por pantalla el importe total de la factura.
 * 
 */

function Factura(clienteNombre, clienteDireccion, clienteTelefono, clienteNif) {
    //la información de la propia empresa (nombre de la empresa, dirección, teléfono, NIF), 
    this.empresaNombre = "San Miguel";
    this.empresaDireccion = "c/ Planeta Marte";
    this.empresaTelefono = "900333666";
    this.empresaNif = "C0898332J";

    //la información del cliente (similar a la de la empresa), 
    this.clienteNombre = clienteNombre;
    this.clienteDireccion = clienteDireccion;
    this.clienteTelefono = clienteTelefono;
    this.clienteNif = clienteNif;

    //una lista de elementos (cada uno de los cuales dispone de descripción, precio, cantidad)
    this.elementos = {
        descripcion = descripcion,
        cantidad = cantidad,
        precio = precio
    };

    //this.elementos = [this.elementos.descripcion, this.elementos.precio, this.elementos.cantidad];

    //otra información básica de la factura (importe total, tipo de IVA, forma de pago). 
    this.informacion = {
        baseImponible = 0,
        total = "",
        iva = 1.21,
        formaPago = "contado"
    }


    this.calculaTotal = function () {
        for (let i = 0; i < this.elementos.length; i++) {
            this.informacion.baseImponible += this.elementos[i].precio * this.elementos[i].cantidad;
        }
        this.informacion.total = this.informacion.baseImponible * this.informacion.iva;
    };

    this.muestraDatos = function () {
        this.calculaTotal();
        console.log(` 
            Datos Empresa
            =============
            Nombre: ${this.empresaNombre} 
            Direccion: ${this.empresaDireccion} 
            Telefono: ${this.empresaTelefono} 
            Nif: ${this.empresaNif} 
        `)

        console.log(`
            Datos Cliente
            =============
            Nombre: ${this.clienteNombre} 
            Direccion: ${this.clienteDireccion} 
            Telefono: ${this.clienteTelefono} 
            Nif: ${this.clienteNif} 
        `)

        console.log(`
            Lista de elementos
            ==================
        `)
        for (var i = 0; i < this.elementos.length; i++) {
            console.log(`
                Descripcion: ${this.elementos[i].descripcion} 
                Precio: ${this.elementos[i].precio} 
                Cantidad: ${this.elementos[i].cantidad} 
            `)
        }

        console.log(`
            Total a pagar
            =============
            Nombre: ${this.informacion.total} 
            Direccion: ${this.informacion.iva} 
            Telefono: ${this.informacion.formaPago} 
        `)
    };

    this.factura.muestraTotal = function () {
        this.calculaTotal();
        console.log(`TOTAL: ${this.informacion.total} €`)
    };
}


var factura_01 = new Factura("Jaimito", "calle Tajamar", "600600600", "C111111111H");
/*factura_01.elementos[0] = { descripcion: "Naranjas", cantidad: 120, precio: 4 };
factura_01.elementos[0] = { descripcion: "Peras", cantidad: 100, precio: 1.20 };
factura_01.elementos[0] = { descripcion: "Limones", cantidad: 100, precio: 2 };

factura_01.muestraDatos(); */