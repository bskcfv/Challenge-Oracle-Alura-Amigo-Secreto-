// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//Declarar Array "amigos"
const amigos = [];


function agregarAmigo() {
    //Obtener Nombre del Amigo
    let nombreAmigo = document.getElementById('amigo').value;
    //Condicional --> Evaluar Sí el elemento está vacío
    if (nombreAmigo === '') return alert('Por favor, inserte un nombre.');
    //Agregar al Array
    amigos.push(nombreAmigo);
    //Limpiar Input
    document.getElementById('amigo').value = '';
    //Mostrar la Lista "amigos"
    actualizarLista(amigos);
}

// v_lista --> Representa el Array que Contiene el Nombre de los Amigos
function actualizarLista(v_lista) {
    //Obtener el elemento de la lista
    let listahtml = document.getElementById('listaAmigos');
    //Limpiar la lista existente
    listahtml.innerHTML = '';
    //EXTRA: Limpiar la Lista de Resultados (Sí se llegó a Jugar AnteriorMente)
    document.getElementById('resultado').innerHTML = '';
    //Iterar Array
    // i --> Representa Cada Nombre Contenido en el Array
    for(let i of v_lista){
        //Agrega un Elemento de Caracter <u></u> Con Cada Nombre
        listahtml.innerHTML += `<ul>${i}</ul>`
    }; 
}

function sortearAmigo(){
    //Condicional --> Evaluar Sí la lista está Vacía
    if(amigos.length == 0) return alert('Porfavor Agrega Amigos');
    //Obtener Un Indice Aleatorio del Array
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    //Obtener el Nombre a través del Indice Aleatorio
    let nombreSorteado = amigos[indiceAleatorio];
    //Limpiar La Lista Mostrada En index.html
    document.getElementById('listaAmigos').innerHTML = '';
    //Mostrar El Resultado En index.html
    document.getElementById('resultado').innerHTML = `Tu Amigo Secreto es: ${nombreSorteado}`;
}