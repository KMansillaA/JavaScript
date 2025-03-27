//ASYNC / AWAIT
//SINCRONIZACION
//los datos vienen de una peticion
//usaremos biblioteca fetch
//permite colocar una direccion de internet
//biblioteca que viene con el navegador
//https://jsonplaceholder.typicode.com/
//https://jsonplaceholder.typicode.com/posts
//2.
const ul=document.createElement('ul')
//1.
/*fetch('https://jsonplaceholder.typicode.com/posts')
    .then(function(response){
        //console.log('finalizó la carga')
        //conversion para leer datos es asincrona
        return response.json()
        //console.log(response)
    })
    .then(function (data){
        console.log(data);
        //2.
        data.forEach(function(post){
            const li=document.createElement('li');
            li.innerText=post.title;
            ul.append(li);
        });
        document.body.append(ul);
    }); */

//ASYNC AWAIT FORMA MAS FACIL DE ESCRIBIR LAS PROMESAS
//AWAIT LO MARCA COMO ASINCRONO
//await solo funciona si esta dentro de una fuincion
//con palabra clave async

async function loadData(){
    const response= await fetch('https://jsonplaceholder.typicode.com/posts')
    const data=await response.json()
    data.forEach(function(post){
        const li=document.createElement("li");
        li.innerText=post.title;
        ul.append(li);
    });
    document.body.append(ul)
}

loadData()
console.log('linea2')

//devuelve una promesa ppara que se puedan hacer otras coass
//la api desde fetch se usa then cuando acabe esto termino la alogica
//se ejecuta hasta que termine la lectura
// permite aprovechar procesos de cpu

