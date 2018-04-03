"use strict"; //Sistema obliga que la semántica a respetar el lenguaje

/**
 * @author San Miguel
 * @constructor Factura
 * @description Definir la estructura de un objeto que almacena una factura.
 * 
 * Objeto Facturas: 
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

// Definición de la Función Constructora de la Pseudoclase Factura
function Factura() {
    this.cliente = {};
    this.elementos = [];
    this.informacion = {
        baseImponible: 0,
        iva: 21,
        total: 0,
        formaPago: "contado"
    };

    // La información de la empresa que emite la factura se añade al prototype porque se supone que no cambia
    Factura.prototype.empresa = {
        nombre: "Ediciones Rueda",
        direccion: "c/ Planeta Marte",
        telefono: "900900900",
        nif: "99999999R"
    };
    // Definición de la Función Constructora del objeto Cliente
    Factura.prototype.Cliente = function (nombre, direccion, telefono, nif) {
        this.nombre = nombre;
        this.direccion = direccion;
        this.telefono = telefono;
        this.nif = nif;
    };

    // Definición de la Función Constructora del objeto Elemento
    Factura.prototype.Elemento = function (descripcion, cantidad, precio) {
        this.descripcion = descripcion;
        this.cantidad = cantidad;
        this.precio = precio;
    };

    // Métodos añadidos al prototype de la Factura
    // Métodos de cálculo del total y de visualización del total
    Factura.prototype.calculaTotal = function () {
        for (let i = 0; i < this.elementos.length; i++) {
            this.informacion.baseImponible += this.elementos[i].cantidad * this.elementos[i].precio;
        }
        this.informacion.total = Math.round(this.informacion.baseImponible * (1 + this.informacion.iva / 100));
    };

    Factura.prototype.muestraDatos = function () {
        this.calculaTotal();

        console.log(` 
            Datos Empresa
            =============
            Nombre: ${this.empresa.nombre} 
            Direccion: ${this.empresa.direccion} 
            Telefono: ${this.empresa.telefono} 
            Nif: ${this.empresa.nif} 
        `)

        console.log(`
            Datos Cliente
            =============
            Nombre: ${this.cliente.nombre} 
            Direccion: ${this.cliente.direccion} 
            Telefono: ${this.cliente.telefono} 
            Nif: ${this.cliente.nif} 
        `)

        console.log(`
            Lista de elementos
            ==================
        `)
        for (let i = 0; i < this.elementos.length; i++) {
            console.log(`
                Descripcion: ${this.elementos[i].descripcion} 
                Precio:      ${this.elementos[i].cantidad} 
                Cantidad:    ${this.elementos[i].precio} 
            `)
        }

        console.log(`
            Total a pagar
            =============
            Importe Total: ${this.informacion.total} 
            IVA:           ${this.informacion.iva} 
            Pago:          ${this.informacion.formaPago} 
        `)
    };
}

function crearFactura() {

    // Creación del objeto Factura encapsulada en una función
    let factura = new Factura();
    factura.cliente = new factura.Cliente(
        "Librería los tengo TODOS",  // nombre:
        "Avenida de los planetas, 48", // direccion
        "600600600", //telefono
        "89890001K"	// nif
    );
    factura.elementos = [// cada constructor Elementos recibe  descripcion, cantidad, precio:
        new factura.Elemento("Pulgarcito", 12, 44),
        new factura.Elemento("Tarzán de la jungla", 10, 25),
        new factura.Elemento("Mazinguer Z", 7, 50)
    ];
    //console.dir(factura);
    return factura;
};

crearFactura().muestraDatos();