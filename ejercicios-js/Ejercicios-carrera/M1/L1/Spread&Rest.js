//cracion del objeto pra el ejercicio spread opereitor
const gato = {
    color: 'marillo',
    edad: 1,
    dueño: 'omar',
    nombre: 'sol'
}
// aqui hago una copia de gato con spread des pues le agrege una propiedad a gato pero esta no se agrga a gato2.
const gato2 = {...gato}
//tambien puedo cambiar la propiedad de un objeto aqui cambio el nombre
const gato3 = {...gato, nombre: 'luna'}
console.log(gato3)
//Esta es lapropiedad que agrege. pero si esta propiedad se agrega antes que hacer la copia de gato entonces gato2 tambien tendria la propiedad
gato.pieza = 'grande'
console.log(gato2)
/////////////////////////////////////////////////////////////////////////////////////////////////////
// spread opereitor para los array es lo mis genera una copia del array y le agragas otra iten
const mama = ['hijos',65,'femenino']
// creamos una copia y colocacamos que tambien tiene una hija 
const otraMama = [...mama,'tambien tiene una hija']
console.log(otraMama)
/////////////////////////////////////////////////////////
//Ejemplo dos para unir varios array 
const numeros1 = [1,2,3,4]
const numero2 = [5,6,7,8]
const arrayJuntos = [...numeros1,...numero2]
console.log(arrayJuntos)
/////////////////////////////////////////////////////////////
//reset operators este nos sirve para realizar una funcion que resive cualquier cantidad de variables y los ingeras en array. 
function reset(...number){
return number
}
console.log(reset(1,5,8,9,10,11))
//Ejemplo de sumar todas las variables que nos pasan en el reset
function suma (...number){
    let suma = 0;
    for(let i = 0; i < number.length; i++){
        suma += number[i];
    }
    return suma;
}
console.log(suma(5,5,8,9))




