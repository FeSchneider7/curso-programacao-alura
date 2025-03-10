
//let titulo = document.querySelector('h1');
//titulo.innerHTML = 'Bem vindo ao Jogo do numero secreto';

//let paragrafo = document.querySelector('p');
//paragrafo.innerHTML = 'Tente adivinhar o numero secreto';


function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;    
}

exibirTextoNaTela ('h1', 'Bem vindo ao jogo do numero secreto');
exibirTextoNaTela ('p', 'Tente adivinhar o numero secreto');

function verificarChute() {
    console.log('Botao clicado corretamente');
}