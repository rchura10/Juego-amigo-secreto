// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//Array para almacenar los nombres
let listaAmigos = [];

//Funcion para agregar un nombre
function agregarAmigo(){
    const inputAmigo = document.getElementById('amigo');
    const nombreAmigo = inputAmigo.value.trim();

    //Asegurar que el campo no este vacio
    if(nombreAmigo === ""){
        alert("Ingrese un nombre: ");
        return; 
    }

    //Asegurar que no se repita el nombre 
    if(listaAmigos.includes(nombreAmigo)){
        alert(`El nombre ${nombreAmigo} ya esta en la lista`);
        return;
    }

    //Añadir el nombre a la lista
    listaAmigos.push(nombreAmigo);

    //Vaciar la entrada de texto
    inputAmigo.value = "";

    //Actualizar lista
    actualizarLista();

}

//Funcion para actualizar la lista
function actualizarLista(){
    const listaAmigosTotal = document.getElementById('listaAmigos');
    
    //Elimina el contenido actual de la lista
    listaAmigosTotal.innerHTML = "";

    for(let i = 0; i <listaAmigos.length; i++){
        const li = document.createElement('li');
        li.textContent = listaAmigos[i];
        listaAmigosTotal.appendChild(li);
    }
}

//Funcion para seleccion aleatoria
function sortearAmigo(){
    if(listaAmigos.length === 0){
        alert("No hay nombres en la lista, agrega algunos.");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);

    const amigoSorteado = listaAmigos[indiceAleatorio];

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = (`Amigo sorteado: ${amigoSorteado}`);
}


