//Arreglos
const nombres =['Lucia','Juan', 'Ana', 'Lucia']

for(let i=0;i<nombres.length; i++){
    const element=nombres[i]
    console.log(element)
}

//métodos de arreglos
//foreach recorre elementos y al recorrer
//los recibe como parametros
nombres.forEach(function(nombre){
    console.log(nombre)
})

//funcion map recorre y retorna un nuevo arreglo
//se utiliza para cambiar valores y generar un nuevo arreglo
//se usa para programacion funcional
const nuevosNombres=nombres.map(function(nombre){
    return `Hola ${nombre}`
})
//metodo find recorre elementos
//se agrega una condicion
const nombreEncontrado=nombres.find(function(nombre){
    if (nombre === 'Ana'){
        return nombre
    }
    
})

//metodo filter crear nuevo arreglo elementos filtrados
//que cumplen cierta condicion
const nombresFiltrados=nombres.filter(function(nombre){
    if (nombre === 'Lucia'){
        return nombre
    }
    
})

//metodo concat concatena 2 arreglos
const nombresAdicionales=['Raul','Riana','Ruzena']
// Operador spread 
//... todos los elementos de lso arreglos se ponene en un nuevo arreglo
console.log([...nombres,...nombresAdicionales])
//tambien para ojbjetos
const usuario={
    nombre: 'Juan',
    apellido: 'Perez'
}

const direccion={
    calle:'Av. Busch',
    ciudad:'La Paz'
}

const informacion={
    ...usuario,
    ...direccion
}
console.log(nombres)
console.log(nuevosNombres)
console.log(nombreEncontrado)
console.log(nombresFiltrados)
console.log(nombres.concat(nombresAdicionales))
console.log(usuario)
console.log(direccion)
console.log(informacion)


