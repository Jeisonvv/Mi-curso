var array = [1 ,'hola', 2,3,6,9,'herna','ligia'];
var input = [18,23,24,'annie','julias','jeison','hermes']
// typeof me da el tipo de dato (strng,numero,boleano)
function soloNumeros(array){
  var soloenteros = [];
  for (var i = 0; i < array.length; i++) {
    if (typeof(array[i])=="number") { 
       soloenteros.push(array[i]);
    }; 
  }
 return soloenteros;
}  
function soloNombres(array){
    var soloLetras = [];
    for (var i = 0; i < array.length; i++) {
      if (typeof(array[i])=="string") { 
         soloLetras.push(array[i]);
      }; 
    }
   return soloLetras;
  }  

console.log(soloNumeros(input));
console.log(soloNombres(array))