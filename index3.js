//manipulacion de DOM
//document.title en consola
//igual puedo acceder desde js
//crea elementos de html
//ctrl + espacio para ver etiquetas de htmlo
const titulo=document.createElement('h1')
//crear un texto para mostrar 
titulo.innerText='Introducción a JS'
//en consola document.body
console.log(titulo)
//mostrar en el documento

//F12 en elementos se ve el h1
//Crear un boton
const boton= document.createElement('button')
boton.innerText='click'

//agregando Event Handler o manejadores de eventos
//seleccionar,c lick, arrastra
//se debe agregar un listener
//cuando suceda un evento se lleve a cabo otra logica
//ctrl + espacio muestra todos los eventos
boton.addEventListener('click', function(){
    console.log('Boton presionado')
    //alterar valor de titulo
    titulo.innerText='Bienvenido'
    //alerta 
    alert('se realizó un click')
    //sepueden crear bibliotecas o funcionalidades para reutilizar
    //como react, angular, vue
    //sirven para utilizar de forma standar las funciones de JS
})
//Agregando elementos al body
//interfaz html se pude crear con codigo js

document.body.append(titulo)
document.body.append(boton)

//DESTRUCTURING
//funciones que reciben objetos usados en dom

