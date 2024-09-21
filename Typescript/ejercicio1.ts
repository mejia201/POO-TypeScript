// Ejercicio 1: 

class CabeceraPagina {
    
    private titulo: string;
    private color: string;
    private fuente: string;
    private alineacion: string;

   
    constructor(titulo_: string, color_: string, fuente_: string, alineacion_: string) {
        this.titulo = titulo_;
        this.color = color_;
        this.fuente = fuente_;
        this.alineacion = alineacion_; 
    }

    
    public obtenerPropiedades(): void {
        console.log(`Título: ${this.titulo}`);
        console.log(`Color: ${this.color}`);
        console.log(`Fuente: ${this.fuente}`);
    }

   
    public configurarAlineacion(alineacion: 'centrado' | 'derecha' | 'izquierda'): void {
        this.alineacion = alineacion;
        console.log(`La alineación se ha configurado a: ${this.alineacion}`);
    }

   
    public imprimirPropiedades(): void {
        console.log('Propiedades de la Cabecera de la Página:');
        console.log(`Título: ${this.titulo}`);
        console.log(`Color: ${this.color}`);
        console.log(`Fuente: ${this.fuente}`);
        console.log(`Alineación: ${this.alineacion}`);
    }
}

const cabecera = new CabeceraPagina('Bienvenido a Mi Sitio', 'azul', 'Arial', 'Centrado');

cabecera.obtenerPropiedades();

cabecera.configurarAlineacion('centrado');

cabecera.imprimirPropiedades();

