// voy a crea un funtion que se llama crear persona dentro de esta voy a crear una clase llamada persona
function crearClasePersona(){
    class Persona{
        //esto es para generar la persona con los parametros recibidos, nombre es un strig, edad un mumero, hobbies es un array y amios es un array de objetos
        constructor(nombre,edad,hobbies,amigos){
            this.nombre = nombre;
            this.edad = edad;
            this.hobbies = hobbies;
            this.amigos = amigos
        }
        // En esta parte del codigo se utiliza para agregar un amigo a la persona. se utiliza this para el contesto de la persona y push para agregarlo al array teniendo encuenta que este es un arry de objetos 
        addfriend(nombre,edad){
            this.amigos.push({nombre,edad})
        }
        // Aqui se agraga un jobby a la persana 
        addhobby(hobby){
            this.hobbies.push(hobby)
        }
        // Al llamar a esta funcion nos debuelve un array con solo los amigos (for of) nos permite interar en el array por cada objeto 
        getfriend(){
            var soloAmigos = []
            for(let ami of this.amigos){
                soloAmigos.push(ami.nombre)
            }
            return soloAmigos
        }
        // al llamr a la funcion me da todos los jobis de la persona
        getHobbies(){
            return this.hobbies
        }
        getPromedioEdad(){
            var respuesta = 0
            for(var ami of this.amigos){
                respuesta += ami.edad
            }
            return respuesta / this.amigos.length

        }
    };
    return Persona;
}
// aqui estoy creando una persona 
var persona = crearClasePersona()
var jeison = new persona (
    'jeison',
    32,
    ['billar','futboll','tejo'],
    [{nombre:'omar',edad:32},{nombre:'jhon',edad:33},{nombre:'juan',edad: 43}]

)
// aqui estoy agragando amigos y jobbies a la persona que ya he creado 
jeison.addfriend('dairon',30)
jeison.addfriend('jeimy',20)
jeison.addhobby('tenis')
// aqui estoy llamando las funciones como solo amigos y hobbis tambien sacamos el promedio 
console.log(jeison)
console.log('solo amigos')
console.log(jeison.getfriend())
console.log('solo hobbies')
console.log(jeison.getHobbies())
console.log('promedio de edad ' + jeison.getPromedioEdad())

