//las diferencias de las funciones normales y las arrow function son la simplesa en codigo.
//funcion normal tine la palapbra reservada function 
function suma(a,b){
    return a + b;
}
console.log('respuesta suma')
console.log(suma(5,6))
//la arrow function es para cimplificar el codigo aqui no se nesecita la palabra function y si la funcion es simple como la siguiente despues de la flecha no nesecita las llaves ni la palabra return 
const resta = (a,b) => a - b;
console.log('respuesta resta')
console.log(resta(10,8))
//para las funciones call balck es mucho mas sencillo 
//generamos el array para el ejemplo
const arrayNum = [1,2,3,4,5,6,7,8,9]
//con el metodo filter y la arrow como una callback vamos a filtrar los numeros pares de array recordemos que filter genera un nuevo array
const numPar = arrayNum.filter((num)=> num % 2 == 0)
console.log('resultsdo numPar')
console.log(numPar)