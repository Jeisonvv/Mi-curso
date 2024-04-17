// //meto en una variable el boton que creara las car 
const button = document.getElementById('add');
const body = document.getElementsByTagName('body')[0];
// // esta es la funcion que crea la tarjeta y los elemntos que hay dentro de ella 
const create = () =>{
    // se crea el elemento div 
    const newdiv = document.createElement('div')
    //crea un h3
    const title = document.createElement('h3')
    // se crea la etiqueta img
    const img = document.createElement('img')
    // se coloca un evento al div
    newdiv.addEventListener('click',(event)=>{
        event.target.remove()
    })
    // se agrga clase
    title.classList.add('title2')
    newdiv.classList.add('cuadro')
    newdiv.classList.add('verde')
    img.classList.add('ejemplo-img-car')
    // se coloca el titulo en el h3
    title.innerHTML = 'poker'
//     // se coloca la url de la imagen el la etiqueta
    img.src = 'https://i.pinimg.com/236x/19/1b/06/191b06317055cc15b8426af0e87d5aa6.jpg'
//     // aqui se agrega todo al html 
    body.appendChild(newdiv)
    newdiv.appendChild(title)
    newdiv.appendChild(img)
        
}

button.addEventListener('click',create)
