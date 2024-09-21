var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Persona = /** @class */ (function () {
    function Persona(nombreParam, apellidoParam, direccionParam, telefonoParam, edadParam) {
        this.nombre = nombreParam;
        this.apellido = apellidoParam;
        this.direccion = direccionParam;
        this.telefono = telefonoParam;
        this.edad = edadParam;
    }
    Persona.prototype.esMayorDeEdad = function () {
        if (this.edad >= 18) {
            console.log("".concat(this.nombre, " es mayor de edad."));
        }
        else {
            console.log("".concat(this.nombre, " es menor de edad."));
        }
    };
    return Persona;
}());
// Clase Empleado que hereda de Persona
var Empleado = /** @class */ (function (_super) {
    __extends(Empleado, _super);
    function Empleado(nombreParam, apellidoParam, direccionParam, telefonoParam, edadParam, sueldoParam) {
        var _this = _super.call(this, nombreParam, apellidoParam, direccionParam, telefonoParam, edadParam) || this;
        _this.sueldo = sueldoParam;
        return _this;
    }
    Empleado.prototype.setSueldo = function (sueldo) {
        this.sueldo = sueldo;
    };
    Empleado.prototype.imprimirSueldo = function () {
        console.log("El sueldo de ".concat(this.nombre, " es: $").concat(this.sueldo));
    };
    Empleado.prototype.mostrarDatos = function () {
        console.log("Nombre: ".concat(this.nombre));
        console.log("Apellido: ".concat(this.apellido));
        console.log("Direcci\u00F3n: ".concat(this.direccion));
        console.log("Tel\u00E9fono: ".concat(this.telefono));
        console.log("Edad: ".concat(this.edad));
        this.imprimirSueldo();
    };
    return Empleado;
}(Persona));
var empleado = new Empleado('Bryan', 'Mejía', 'San Salvador', '1234-5678', 22, 1500);
empleado.mostrarDatos();
empleado.esMayorDeEdad();
