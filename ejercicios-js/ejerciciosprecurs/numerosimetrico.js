//toString conviete el numero en una cadena de texto, despus el split separa porcada carater y las comillas se utlisan para que no quede espasio entre los caracteres despues el reverse invierte los caracteres y por ultimo vlvemos a unir los caracteres con el join.

function numeroSimetrico(num){
    var numeroInverso = num.toString().split('').reverse().join('')
    if(numeroInverso == num){
        return true;
    }else{
        return false
    }
}
console.log(numeroSimetrico(211))