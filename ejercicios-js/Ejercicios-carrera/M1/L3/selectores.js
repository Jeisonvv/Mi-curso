//seleccion por id: se crea una variable y esta es igual al elemento que selecionamos por el id
const seleccionId = document.getElementById('seleccionid')
//con el metodo innerHTML se cambia lo que hay entre las etiquetas 
seleccionId.innerHTML = 'jeison este texto original mente dice ejemplo y se modifico con una selecion por id con el metodo document.getElemtById'
//seleccion por etiqueta html nos devuelve un array con todas las etiquetas que hay en el html vamos aselecionar los div del arrchivo para hacer esto toca utilizar la terminal del navegador para ir comprovando las cosas 
const divs = document.getElementsByTagName('div')
//aqui escogi el segundo div y le agrege un hola 
const div2 = divs[1]
div2.innerHTML = 'selecion por etiqueta'
//seleccion por clases aqui tambien nos devuelve un array 
const cuadros = document.getElementsByClassName('cuadro')
const cuadro1 = cuadros[0]
cuadro1.innerHTML = 'selecion por clase'
// vamos agregar una clase a un elemento
const cuadro3 = cuadros[2]
cuadro3.classList.add('verde')
cuadro3.innerHTML = 'agregar clase con js'






