
//let titulo = document.querySelector('h1');
//titulo.innerHTML = 'Bem vindo ao Jogo do numero secreto';

//let paragrafo = document.querySelector('p');
//paragrafo.innerHTML = 'Tente adivinhar o numero secreto';

let numeroSecreto = gerarNumeroAleatorio();

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;    
}

exibirTextoNaTela ('h1', 'Bem vindo ao jogo do numero secreto');
exibirTextoNaTela ('p', 'Tente adivinhar o numero secreto');

function verificarChute() {
    let chute = document.querySelector('input').value;
    console.log(chute == numeroSecreto);
}

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 10 + 1);
}

