class Cuenta{

    private nombre: string;
    private cantidad: number;
    private tipo_cuenta: string;
    private número_cuenta: string;

    constructor(nombreParam: string, cantidadParam: number, tipo_cuentaParam: string, número_cuentaParam: string){
        this.nombre = nombreParam;
        this.cantidad = cantidadParam;
        this.tipo_cuenta = tipo_cuentaParam;
        this.número_cuenta = número_cuentaParam;
    }

    getNombre(){
        return this.nombre;
    }

    getCantidad(){
        return this.cantidad;
    }

    getTipo_cuenta(){
        return this.tipo_cuenta;
    }

    getNumero_cuenta(){
        return this.número_cuenta;
    }

    




    depositar(): void {
        if(this.cantidad < 0){
            console.log('Ingresa una cantidad valida');
        }

        if(this.cantidad < 5){
            console.log('El valor a depositar debe ser mayor a $5.00')
        }else{
            console.log(`Se ha depositado correctamente, la cantidad de: $${this.cantidad}\n`)
        }
    }


    retirar(valor: number): void {

        if(valor < 0){
            console.log('Ingresa una cantidad valida');
        }

        if(valor > this.cantidad){
            console.log('El monto a retirar es invalido, intenta de nuevo');
        }else{

            this.cantidad -= valor;
            console.log(`Se ha retirado correctamente, la cantidad en la cuenta es de: $${this.cantidad}\n`)

        }
    }


    mostrarCuenta(): void{

        console.log('Datos de la cuenta:\n');
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Saldo: ${this.cantidad}`);
        console.log(`Tipo de Cuenta: ${this.tipo_cuenta}`);
        console.log(`Numero de Cuenta: ${this.número_cuenta}`);


    }

}


const cuenta = new Cuenta('Bryan Mejia', 5, 'Cuenta de ahorros', '19807654');

cuenta.depositar();
cuenta.retirar(2);
cuenta.mostrarCuenta();