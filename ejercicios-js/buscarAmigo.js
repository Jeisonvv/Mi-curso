var amigos = [{nombre: 'Annie', edad: 5},{nombre: 'duvan',edad: 32},{nombre:'jeison',edad: 33}]
function buscaramigos(amigos,nombre){
    for(i = 0; i < amigos.length; i++){
        if(amigos[i].nombre == nombre){
            return amigos[i]
        }
    }
}
console.log(buscaramigos(amigos, 'duvan'))