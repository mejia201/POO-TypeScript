// Ejercicio 1: 
var CabeceraPagina = /** @class */ (function () {
    function CabeceraPagina(titulo_, color_, fuente_, alineacion_) {
        this.titulo = titulo_;
        this.color = color_;
        this.fuente = fuente_;
        this.alineacion = alineacion_;
    }
    CabeceraPagina.prototype.obtenerPropiedades = function () {
        console.log("T\u00EDtulo: ".concat(this.titulo));
        console.log("Color: ".concat(this.color));
        console.log("Fuente: ".concat(this.fuente));
    };
    CabeceraPagina.prototype.configurarAlineacion = function (alineacion) {
        this.alineacion = alineacion;
        console.log("La alineaci\u00F3n se ha configurado a: ".concat(this.alineacion));
    };
    CabeceraPagina.prototype.imprimirPropiedades = function () {
        console.log('Propiedades de la Cabecera de la Página:');
        console.log("T\u00EDtulo: ".concat(this.titulo));
        console.log("Color: ".concat(this.color));
        console.log("Fuente: ".concat(this.fuente));
        console.log("Alineaci\u00F3n: ".concat(this.alineacion));
    };
    return CabeceraPagina;
}());
var cabecera = new CabeceraPagina('Bienvenido a Mi Sitio', 'azul', 'Arial', 'Centrado');
cabecera.obtenerPropiedades();
cabecera.configurarAlineacion('centrado');
cabecera.imprimirPropiedades();
