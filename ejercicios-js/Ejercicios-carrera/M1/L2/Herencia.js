//ejecicion de hercia en las clases es crear una clase apartir de otra con los mismos propiedades y metodos de la clase padre para esto utilizamos la palbra reservada (exteds)

class Persona {
    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
        this.amigos = []
    }
    saludar(){
        return `Hola mi nombre es ${this.nombre}`
    }
    agregarAmigo(nombre){
        this.amigos.push(nombre);
    }
}

// vamos crear una clase vasada en la clase persona esta se llamara doctor
class Doctor extends Persona{
    constructor (nombre,edad,univercidad){
        //colocamos la palabra reservada super para recibir las variables del la clase padre 
        super(nombre,edad)
        this.univercidad = univercidad
    }
}
const dortor1 = new Doctor('mirella',40,'tadeo')
console.log(dortor1)