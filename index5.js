const isAuthorized=true
const background='yellow'
const color='white'
//STRING LITERALS
//concatenar y entender valores
//son los tildes ``
//const result = `estos son los estilos: ${background}  ${color}`
//console.log(result)

const boton=document.createElement('button')
boton.innerText='Validar'
//1. boton.style='background: red; color:white;'
//2. Interpolacion concatenar estilos
//boton.style =`background: ${background};
  //  color:${color}`
boton.style=`background: ${isAuthorized?background: 'red'}; color:${color}`


// boton.addEventListener('click',()=>{
// if (isAuthorized){
//     alert('autorizado')
// }
// else {
//     alert('No autorizado')
// }
// })
boton.addEventListener('click',()=>{
    if (isAuthorized){
        return alert('autorizado')
    }
       alert('No autorizado')
    })

document.body.append(boton)