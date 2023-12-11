// map genera otro array con el valor deseado del primer por ejemplo en este array generamos un nuevo array coon solo los productos sin el precio 
var objetos = [{prod:'taco',precio:'200'},{prod:'bolas',precio:'3500'},{prod:'paños',precio:'250'},{prod:'mesas',precio:'350'}]
var soloProductos = objetos.map(objetos =>{
    return(objetos.prod)
})  

// en esta funcion en map se asigna un funcion. esto para que reciba el parametro que deseamos para el nuevo array
function pluck(array,propieda){
    var newArray = array.map(function (value){
        return value[propieda]
    } )
   return newArray
}
    
console.log(pluck(objetos,'prod'))