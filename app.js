let arrayAmigos = [];

function agregarAmigo(){
    //Capturando el valor del input
    let inputAmigo = (document.getElementById('amigo'));
    let nombreAmigo = inputAmigo.value;

    //Validando entrada
    if(nombreAmigo == ''){
        alert('Error: Por favor, inserte un nombre.');
    } else {
        //Agragando a la lista
        arrayAmigos.push(nombreAmigo);

        //Mostrando lista
        let lista = document.getElementById("listaAmigos");
        let fila = document.createElement("li");
        fila.textContent = nombreAmigo;
        lista.appendChild(fila);

        //Limpiando el input
        inputAmigo.value = "";
        return;
    }
}

function sortearAmigo(){
    //.........................
}

