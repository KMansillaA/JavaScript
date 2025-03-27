//modulos js
//import funcion a ser utilizada por otros archivos
//añadir en html en script typt="module"
import {suma, producto,titulo,puntos, activo} from './suma.js'
import moduloSuma from "./suma.js"

console.log(suma(10,5))
console.log(producto(87,3))
console.log(activo,puntos,titulo);

//default
//console.log(moduloSuma)
console.log(moduloSuma())

//permite dividir un proyecto grande en modulos
//reglas de js la forma estandar es usar ,js para importar archivos
//hay herramientas que trabajan con bibliotecas
//permiten importar sin .js
