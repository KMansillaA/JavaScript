//2. FUNCIONES FLECHA
function sumar(x,y){
    return x+y
}
// se usan para acceder variables contexto 
//scope o alcances de variables

const sumar2=(x,y)=>{
    return x+y
}

const boton3= document.createElement('button')
boton3.innerText='suma'
boton3.addEventListener('click', ()=>{
    alert('clicked')
})
//mas ejemplos
const mensaje = ()=> 'Mensaje'
console.log(mensaje())

const numero = ()=> 123;
console.log(numero())

const logico = ()=> true;
console.log(logico)

//devolviendo un objeto
//hay problema con la sintaxis
const objeto=()=>({
    nombre:'Juan',
    edad: 34
})
console.log(objeto())

const lista = ()=> [1,2,3];
console.log(lista())
// 1.FUNCIONES ANONIMAS
function start(){
    return 'Empezando'
}

console.log(start())
//
console.log(function start1(){
    return 'Empezando'
})

//
console.log(function (){
    return 'Empezando'
}())
//esto es una funcion sin nombre
//JS lo utiliza cuando trabaja con eventos
//function (){
    //return 'Empezando'
//}()

//creando un boton
const boton= document.createElement('button')
boton.innerText='click'
const boton2= document.createElement('button')
boton2.innerText='click'

//Forma 1
boton.addEventListener('click', function (){
    alert('Clicked')
})

//forma2
function handlerClick( ){
    alert('Clicked')
}

boton.addEventListener('click',boton)
boton2.addEventListener('click',handlerClick)

document.body.append(boton)
document.body.append(boton2)
document.body.append(boton3)






