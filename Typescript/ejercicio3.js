//Ejercicio 3:
var Cancion = /** @class */ (function () {
    function Cancion(titulo_, genero_) {
        this.titulo = titulo_;
        this.genero = genero_;
    }
    Cancion.prototype.getAutor = function () {
        return this.autor;
    };
    Cancion.prototype.setAutor = function (autorParam) {
        this.autor = autorParam;
    };
    Cancion.prototype.mostrarDatosCancion = function () {
        console.log('Datos de la cancion:');
        console.log("T\u00EDtulo: ".concat(this.titulo));
        console.log("Genero: ".concat(this.genero));
        console.log("Autor: ".concat(this.getAutor()));
    };
    return Cancion;
}());
var cancion = new Cancion('Sonne', 'Metal');
cancion.setAutor('Rammstein');
cancion.mostrarDatosCancion();
