//objeto
const usuario ={
    nombre: 'Joe',
    edad: 30
}

function imprimirInfo(usuario){
    //return '<h1>HOLA ' + usuario.nombre + '</h1>'
    //acceder a valores
    return '<h1>HOLA ' + usuario['nombre'] + '</h1>'+ '<br>'
}

//Destructuring es destructura un objeto
//por ejemplo tomar solo algunos valores del objeto
function imprimirInfo2({nombre}){
    //return '<h1>HOLA ' + usuario.nombre + '</h1>'
    return '<h1>HOLA ' + nombre + '</h1>' + '<br>'
}

function imprimirInfo3(usuario){
    const {nombre,edad}=usuario
    console.log(nombre,edad)
    return '<h1>HOLA ' + edad + '</h1>'+ '<br>'
}
//llamada
console.log(imprimirInfo(usuario))
//mostrar en el DOM
//no append por que es para elementos creados de JS
document.body.innerHTML=imprimirInfo(usuario)
document.body.innerHTML='<br>'
document.body.innerHTML=imprimirInfo2(usuario)
document.body.innerHTML=imprimirInfo3(usuario)
//'<h2> texto añadido </h2>'