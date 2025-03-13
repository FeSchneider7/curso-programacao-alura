
//let titulo = document.querySelector('h1');
//titulo.innerHTML = 'Bem vindo ao Jogo do numero secreto';

//let paragrafo = document.querySelector('p');
//paragrafo.innerHTML = 'Tente adivinhar o numero secreto';

let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;    
}

exibirTextoNaTela ('h1', 'Bem vindo ao jogo do numero secreto');
exibirTextoNaTela ('p', 'Tente adivinhar o numero secreto');

function verificarChute() {
    let chute = document.querySelector('input').value;
    console.log(chute == numeroSecreto);

    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Incrível, você acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Voce acertou o numero secreto com ${tentativas} ${palavraTentativa}`;
        exibirTextoNaTela('p', mensagemTentativas);
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', 'Tente um numero MENOR');
        } else {
            exibirTextoNaTela('p', 'Tente um numero MAIOR');
        }
        tentativas++;
    }
}


function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 10 + 1);
}

