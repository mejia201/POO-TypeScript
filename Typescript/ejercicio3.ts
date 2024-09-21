//Ejercicio 3:
class Cancion {

    public titulo: string;
    public genero: string;
    private autor: string;

    constructor(titulo_: string, genero_:string){

        this.titulo = titulo_;
        this.genero = genero_;
    }


    getAutor(){
        return this.autor;
    }

    setAutor(autorParam: string){
        this.autor = autorParam
    }
    

    mostrarDatosCancion(): void{

        console.log('Datos de la cancion:');
        console.log(`Título: ${this.titulo}`);
        console.log(`Genero: ${this.genero}`);
        console.log(`Autor: ${this.getAutor()}`);

    }
}


const cancion = new Cancion('Sonne', 'Metal');

cancion.setAutor('Rammstein');

cancion.mostrarDatosCancion();

