//TRABAJAR DATOS DE BACKEND
const persona={
    nombre:'Juan',
    direccion:{
        ciudad:'La Paz'
    }
}

console.log(persona)
console.log(persona.direccion.ciudad)
//cuando se trabaja con propiedades inexitentes
//sale undefined por que ciudad busca direccion
//a veces el backen responde con datos que debemos leer
if(persona.location){
    console.log(persona.locacion.ciudad)
}
else{
    console.log('no existe locacion')
}
//OPTIONAL CHAINING para ver si existe una determinada propiedad
console.log(persona.location?.ciudad)

