// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
let resultados = [];

function agregarAmigo() {
    let inputAmigo = document.getElementById('amigo');
    let nombreAmigo = inputAmigo.value.trim();

    if (nombreAmigo === '') {
        alert('Por favor, ingresa un nombre válido.');
        return;
    }

    if (amigos.includes(nombreAmigo)) {
        alert('Ese nombre ya fue agregado.');
        inputAmigo.value = '';
        return;
    }

    amigos.push(nombreAmigo);
    actualizarListaAmigos();
    inputAmigo.value = '';
}

function actualizarListaAmigos() {
    let listaAmigosElement = document.getElementById('listaAmigos');
    listaAmigosElement.innerHTML = '';

    amigos.forEach((amigo, index) => {
        let item = document.createElement('li');
        item.textContent = `${index + 1}. ${amigo}`;
        listaAmigosElement.appendChild(item);
    });
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert('Debes añadir al menos dos amigos para realizar el sorteo.');
        return;
    }

    let amigosRestantes = [...amigos];
    resultados = amigos.map((amigo) => {
        let opciones = amigosRestantes.filter((opcion) => opcion !== amigo);
        let indiceSorteado = Math.floor(Math.random() * opciones.length);
        let amigoSorteado = opciones[indiceSorteado];
        amigosRestantes.splice(amigosRestantes.indexOf(amigoSorteado), 1);
        return { amigo, amigoSorteado };
    });

    mostrarResultados();
}

function mostrarResultados() {
    let resultadoElement = document.getElementById('resultado');
    resultadoElement.innerHTML = '';

    resultados.forEach((par) => {
        let item = document.createElement('li');
        item.textContent = `${par.amigo} le regala a ${par.amigoSorteado}`;
        resultadoElement.appendChild(item);
    });
}

function reiniciarTodo() {
    amigos = [];
    resultados = [];
    document.getElementById('amigo').value = '';
    document.getElementById('listaAmigos').innerHTML = '';
    document.getElementById('resultado').innerHTML = '';
    alert('¡Todo ha sido reiniciado!');
}
