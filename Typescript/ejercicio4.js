var Cuenta = /** @class */ (function () {
    function Cuenta(nombreParam, cantidadParam, tipo_cuentaParam, número_cuentaParam) {
        this.nombre = nombreParam;
        this.cantidad = cantidadParam;
        this.tipo_cuenta = tipo_cuentaParam;
        this.número_cuenta = número_cuentaParam;
    }
    Cuenta.prototype.getNombre = function () {
        return this.nombre;
    };
    Cuenta.prototype.getCantidad = function () {
        return this.cantidad;
    };
    Cuenta.prototype.getTipo_cuenta = function () {
        return this.tipo_cuenta;
    };
    Cuenta.prototype.getNumero_cuenta = function () {
        return this.número_cuenta;
    };
    Cuenta.prototype.depositar = function () {
        if (this.cantidad < 0) {
            console.log('Ingresa una cantidad valida');
        }
        if (this.cantidad < 5) {
            console.log('El valor a depositar debe ser mayor a $5.00');
        }
        else {
            console.log("Se ha depositado correctamente, la cantidad de: $".concat(this.cantidad, "\n"));
        }
    };
    Cuenta.prototype.retirar = function (valor) {
        if (valor < 0) {
            console.log('Ingresa una cantidad valida');
        }
        if (valor > this.cantidad) {
            console.log('El monto a retirar es invalido, intenta de nuevo');
        }
        else {
            this.cantidad -= valor;
            console.log("Se ha retirado correctamente, la cantidad en la cuenta es de: $".concat(this.cantidad, "\n"));
        }
    };
    Cuenta.prototype.mostrarCuenta = function () {
        console.log('Datos de la cuenta:\n');
        console.log("Nombre: ".concat(this.nombre));
        console.log("Saldo: ".concat(this.cantidad));
        console.log("Tipo de Cuenta: ".concat(this.tipo_cuenta));
        console.log("Numero de Cuenta: ".concat(this.número_cuenta));
    };
    return Cuenta;
}());
var cuenta = new Cuenta('Bryan Mejia', 5, 'Cuenta de ahorros', '19807654');
cuenta.depositar();
cuenta.retirar(2);
cuenta.mostrarCuenta();
