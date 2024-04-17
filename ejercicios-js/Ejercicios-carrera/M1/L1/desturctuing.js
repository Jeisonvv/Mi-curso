// Es tamos creando un objeto cualquiera 
const jeison = {
    nombre: 'jeison',
    segundoNombre: 'hernan',
    apellido: 'vargas',
    segundoApellido: 'villalobos',
    madre: 'ligia',
    padre: 'hermes',
    hemano: 'omar',
    vivienda:'calle 23 # 48 - 33',
    departamento: 'cundinamarca',
    deporte: 'billar',
    trabajo: 'pragramador'
}
//Destructurign nesecitamos propiedades del objeto las cuales vamos a utilizar mediante destructracion de un objeto
//Generamos la funcion para el ejemplo
function dataUser (objeto){
    // destructuramos el objeto ya que solo nesecito el nombre completo  del usuario,como  estamos trabajando con un objeto abrimos llaves y hay colocamos los datos que nesecito no importa el orden 
    const {apellido,segundoApellido,nombre,segundoNombre} = jeison;
    //Utilizamos las variables que ya destructuramos para dar el nombre completa
    nameUser = `${nombre} ${segundoNombre} ${apellido} ${segundoApellido}`;
    return nameUser

}
console.log(dataUser(jeison))
// Ejemplo con array: aqui si importa el orden por que toma el primer iten y asi consecutibamente
const omar = ['hola','omar','billar','adios'];
function returnArray (array){
    //aqui destructuramos por el orden en el que esta los datos en el array si hay cuatro datos y nesecitamos el ultimo tenemos que poner los todos en la destructuracion para poder utilizarlo.
    const [saludo,nombre,] = omar;
    return `${saludo} mi nombre es ${nombre} y me gusta el`
}
console.log(returnArray(omar))
