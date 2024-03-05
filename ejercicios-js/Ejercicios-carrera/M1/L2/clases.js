// se genera una clase con la palabra resevad class y la primrea letra del nombre es en mayuscula
class Persona {
    //es nesesario crear el metodo contructor para darle por variables 
    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
        this.amigos = []
    }
    //despues se genera los metodos que va a tener el objeto ejemplo saludar
    saludar(){
        return `Hola mi nombre es ${this.nombre}`
    }
    //agregar un metodo dinamico para agrgar amigos 
    agregarAmigo(nombre){
        this.amigos.push(nombre);
    }
}

const persona1 = new Persona('jeison', 32);
console.log(persona1)
console.log(persona1.saludar())
persona1.agregarAmigo('dairon')
console.log(persona1)