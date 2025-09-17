let arrayAmigos = [];

function agregarAmigo(){
    // Capturando el valor del input
    let inputAmigo = (document.getElementById('amigo'));
    let nombreAmigo = inputAmigo.value;

    // Validando entrada
    if(nombreAmigo == ''){
        alert('Error: Por favor, inserte un nombre.');
    } else {
        // Agragando a la lista
        arrayAmigos.push(nombreAmigo);

        //Funcion mostrar amigos
        mostrarAmigos();

        // Limpiando el input
        inputAmigo.value = "";
        return;
    }
}

function mostrarAmigos() {
    // Obtener la lista
    let lista = document.getElementById("listaAmigos");

    // Limpiar contenido anterior
    lista.innerHTML = "";

    // Recorrer el array y agregar cada amigo como <li>
    for (let i = 0; i < arrayAmigos.length; i++) {
        let fila = document.createElement("li");
        fila.textContent = arrayAmigos[i];
        lista.appendChild(fila);
    }
}

function sortearAmigo() {
    // Validar que haya amigos en el array
    if (arrayAmigos.length === 0) {
        alert("No hay amigos disponibles para sortear.");
        return;
    }

    // Generar un índice aleatorio
    let indiceAleatorio = Math.floor(Math.random() * arrayAmigos.length);

    // Obtener el nombre sorteado
    let amigoSorteado = arrayAmigos[indiceAleatorio];

    // Mostrar el resultado en el HTML
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>El amigo secreto es: <strong>${amigoSorteado}</strong></li>`;
}

