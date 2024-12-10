let amigos = [];
function adicionar() {
    let amigo = document.getElementById('nome-amigo');
    if (amigo.value == ''){
        alert('Preencha o campo de nome do amigo');
        return;
    }

    let nomeMaiusculo = amigo.value.toUpperCase();

    if(amigos.includes(nomeMaiusculo)){
        alert('Nome já adicionado!')
        return;
    }

    let lista = document.getElementById('lista-amigos'); 
    
    amigos.push(nomeMaiusculo);
    
    if (lista.textContent == '') {
        lista.textContent = nomeMaiusculo; 
    } else {
        lista.textContent = lista.textContent + ', ' + nomeMaiusculo; 
    }

    amigo.value = '';
}

function sortear() {
    if (amigos.length < 4 ) {
        alert('Adicione ao menos 4 amigos para sortear');
        return;
    }

    embaralha(amigos);
    let sorteio = document.getElementById('lista-sorteio')

    for (let i = 0; i < amigos.length; i++) {
        if(i == amigos.length - 1){
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] + '-->' + amigos[0] + '<br>';

    } else{
        sorteio.innerHTML = sorteio.innerHTML + amigos[i] + '-->' + amigos[i + 1] + '<br>';
        }
        
    }

    

}

function embaralha(lista) {

    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        // atribuição via destructuring
        [lista[indice - 1], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}

//código omitido

function reiniciar() {
    amigos = [];
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';
}