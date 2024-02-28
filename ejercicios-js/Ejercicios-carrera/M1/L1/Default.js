// Esta es cunda una funcion tiene una condicion por default 
function deafault(nombre = 'invitado'){
    return `hola ${nombre}`
}
// En esta ocacion va adar por resaltado el string (hola invitado) por que no se paso nada por la variable
console.log(deafault())
// Mientras que a qui pasamos el nombre y nos responde con el nombre
console.log(deafault('jeison'))
// creamos dos variables
let variable1 = null;
let variable2 = 'Valor por defecto'
// creamos una tercera variable para queto me una por defecto 

let variable3 = variable1 ?? variable2
// en consol.log nos da la variable2 
console.log(variable3)
