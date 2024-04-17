//description,inputname
const buttonInfoUser = document.getElementById('buttonEnviarInfo');
const createElemet = () => {
    // obtener los elementos del html
    const contencarts = document.getElementById('date_user');
    const inputUser = document.getElementById('inputname');
    const inputDescription = document.getElementById('description');
    //lo escrito en el input
    const nameUser = inputUser.value;
    const descriptionUser = inputDescription.value;
    //crear todos los elemntos que se agregaran
    const cart = document.createElement('div');
    const h3 = document.createElement('h3');
    const p = document.createElement('p')
    // agregar los elementos al dom
    contencarts.appendChild(cart)
    cart.appendChild(h3)
    cart.appendChild(p)
    //aqui agrega clases css
    cart.classList.add('car')


    // los valores que se recibieron por el input
    h3.innerHTML = nameUser
    p.innerHTML = descriptionUser
    // valores a rest del input
    inputUser.value = ''
    inputDescription.value = ''



}
buttonInfoUser.addEventListener('click',createElemet)