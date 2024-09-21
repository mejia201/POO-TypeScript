abstract class Persona {
    protected nombre: string;
    protected apellido: string;
    protected direccion: string;
    protected telefono: string;
    protected edad: number;

    constructor(nombreParam: string, apellidoParam: string, direccionParam: string, telefonoParam: string, edadParam: number) {
        this.nombre = nombreParam;
        this.apellido = apellidoParam;
        this.direccion = direccionParam;
        this.telefono = telefonoParam;
        this.edad = edadParam;
    }

    esMayorDeEdad(): void {
        if (this.edad >= 18) {
            console.log(`${this.nombre} es mayor de edad.`);
        } else {
            console.log(`${this.nombre} es menor de edad.`);
        }
    }

    abstract mostrarDatos(): void;
}




// Clase Empleado que hereda de Persona
class Empleado extends Persona {

    private sueldo: number;

    constructor(nombreParam: string, apellidoParam: string, direccionParam: string, telefonoParam: string, edadParam: number, sueldoParam: number) {
        super(nombreParam, apellidoParam, direccionParam, telefonoParam, edadParam); 
        this.sueldo = sueldoParam;
    }

    setSueldo(sueldo: number): void {
        this.sueldo = sueldo;
    }

    imprimirSueldo(): void {
        console.log(`El sueldo de ${this.nombre} es: $${this.sueldo}`);
    }

    mostrarDatos(): void {
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Apellido: ${this.apellido}`);
        console.log(`Dirección: ${this.direccion}`);
        console.log(`Teléfono: ${this.telefono}`);
        console.log(`Edad: ${this.edad}`);
        this.imprimirSueldo();
    }
}

const empleado = new Empleado('Bryan', 'Mejía', 'San Salvador', '1234-5678', 22, 1500);

empleado.mostrarDatos();

empleado.esMayorDeEdad();
