var string = ['te amo ','jeison','ligia','caren','hermes','duvan','barrancabermeja']
function cadenaMasLarga(array) {
    var respuesta = array[0]
    for(i = 0; i < array.length; i++){
        if(array.length > respuesta.length){
            respuesta = array[i]
        }
    }
    return respuesta
 }
 console.log(cadenaMasLarga(string))