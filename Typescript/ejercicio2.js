var Calculadora = /** @class */ (function () {
    function Calculadora() {
    }
    Calculadora.prototype.Sumar = function (a, b) {
        return a + b;
    };
    Calculadora.prototype.Restar = function (a, b) {
        return a - b;
    };
    Calculadora.prototype.Multiplicar = function (a, b) {
        return a * b;
    };
    Calculadora.prototype.Dividir = function (a, b) {
        if (b === 0) {
            throw new Error("No se puede dividir entre cero.");
        }
        return a / b;
    };
    Calculadora.prototype.Potencia = function (base, exponente) {
        return Math.pow(base, exponente);
    };
    Calculadora.prototype.Factorial = function (n) {
        if (n < 0) {
            throw new Error("El factorial no está definido para números negativos.");
        }
        if (n === 0 || n === 1) {
            return 1;
        }
        var resultado = 1;
        for (var i = 2; i <= n; i++) {
            resultado *= i;
        }
        return resultado;
    };
    return Calculadora;
}());
var calculadora = new Calculadora();
console.log("Suma: ", calculadora.Sumar(5, 3));
console.log("Resta: ", calculadora.Restar(5, 3));
console.log("Multiplicación: ", calculadora.Multiplicar(5, 3));
console.log("División: ", calculadora.Dividir(10, 2));
console.log("Potencia: ", calculadora.Potencia(2, 3));
console.log("Factorial: ", calculadora.Factorial(5));
