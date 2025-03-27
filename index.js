function mensaje(){
    console.log("Hola Mundo aaa");
    console.log("Trabajando con JS")
}

function mensaje1(){
    return [4,5,6]
}

//Programacion funcional
function f1(){
    return function(){
        return 234
    }
}

//parametros 
function f2(nombre){
    return 'Hola ' + nombre
}

function sumar(x,y){
    return x+y
}
//parametros por defecto
function restar(x,y){
    if(y=== undefined){
        y=0
    }
    return x-y
}

function restar1(x,y=0){
    return x-y
}

//Objetos
const user={
    //propiedades
    nombre:'Juan',
    apellido:'Perez',
    edad: 30,
    direccion: {
        pais: 'Bolivia',
        ciudad:'La Paz',
        calle:'Av. Busch'
    },
    amigos:['Maria','Raul'],
    activo:true,
    //metodos
    //enviamail: function(){
    enviamail() {
        return 'enviando correo...'
    }
}
const nombre='laptop'
const precio=3000
const nuevoProducto={
    nombre:nombre,
    precio
}

//Manipulacion de DOM
//manipujlar el document object
//**** */
mensaje()
//const result=mensaje1()
//console.log(mensaje1())
//console.log(f1())
//console.log(f1()())
//console.log(f2('Juan'))
// console.log(f2('Maria'))
//console.log(sumar(45,34))
//console.log(sumar(45))
// console.log(sumar(45, undefined))
//console.log(restar(10))
// console.log(restar1(10))
//console.log(user)
//console.log(user.nombre)
//console.log(user.direccion)
//console.log(user.direccion.ciudad)
//console.log(user.amigos)
//console.log(user.enviamail())
 console.log(nuevoProducto)