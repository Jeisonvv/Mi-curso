//clase activiti
class Actividad {
    constructor(id,nombre, descripcion){
        this.nombre = nombre;
        this.descripcion = descripcion
        this.id = id;
    }
}
class Usuarios {
    constructor(){
        this.userApp = [];
        this.id = 0;
    }
    allUser (){
        return this.userApp
    }
    agregarusuario (nombre,descripcion){
        const id = this.id ++;
        const user = new Actividad(id,nombre,descripcion);
        this.userApp.push(user);
    }
    delete(id){
        this.userApp = this.userApp.filter((user) => user.id  != id)
    }

}

const userNew = new Usuarios;



    
function ceartHtml (actividad){
    const {id,nombre,descripcion} = actividad;
    const h3 = document.createElement('h3');
    const p = document.createElement('p');
    const button = document.createElement('button')
    h3.innerHTML = nombre;
    p.innerHTML = descripcion;
    button.id = 'button-'+id
    button.innerHTML = 'delete cart ' + id
    button.addEventListener('click',hadlerDelete)
    const car = document.createElement('div');
    car.classList.add('car')
    car.appendChild(h3);
    car.appendChild(p);
    car.appendChild(button)

    return car;
}
function addHtmlDom() {
    const containerUser = document.getElementById('date_user');
    containerUser.innerHTML = '';
    const users = userNew.allUser();
    const userHtml = users.map((user) => ceartHtml(user));
    userHtml.forEach(usuario  => containerUser.appendChild(usuario));
}
addHtmlDom()
function hadlerButton (){
    const nombreinput = document.getElementById('inputname');
    const descriptioninput = document.getElementById('description');
    const nombre = nombreinput.value;
    const description = descriptioninput.value;
    if(!nombre || !description){
        return alert('por favor ingresa todos los datos')
    }
    userNew.agregarusuario(nombre,description)

    addHtmlDom()

    nombreinput.value= '';
    descriptioninput.value = '';
}
function hadlerDelete(event){
    const butonid  = event.target.id;
    const id = butonid.split('-').at(-1)
    userNew.delete(id);
    addHtmlDom()
 
 }

const button = document.getElementById('buttonEnviarInfo')
button.addEventListener('click', hadlerButton)
