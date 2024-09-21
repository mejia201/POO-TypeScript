class Calculadora {
    public Sumar(a: number, b: number): number {
        return a + b;
    }

    public Restar(a: number, b: number): number {
        return a - b;
    }

   
    public Multiplicar(a: number, b: number): number {
        return a * b;
    }

    public Dividir(a: number, b: number): number {
        if (b === 0) {
            throw new Error("No se puede dividir entre cero.");
        }
        return a / b;
    }

    public Potencia(base: number, exponente: number): number {
        return Math.pow(base, exponente);
    }

    public Factorial(n: number): number {
        if (n < 0) {
            throw new Error("El factorial no está definido para números negativos.");
        }
        if (n === 0 || n === 1) {
            return 1;
        }
        let resultado = 1;
        for (let i = 2; i <= n; i++) {
            resultado *= i;
        }
        return resultado;
    }
}


const calculadora = new Calculadora();

console.log("Suma: ", calculadora.Sumar(5, 3));            
console.log("Resta: ", calculadora.Restar(5, 3));           
console.log("Multiplicación: ", calculadora.Multiplicar(5, 3)); 
console.log("División: ", calculadora.Dividir(10, 2));     
console.log("Potencia: ", calculadora.Potencia(2, 3));       
console.log("Factorial: ", calculadora.Factorial(5));        
