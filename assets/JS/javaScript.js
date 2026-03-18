const listaPalavras = [
    "JAVASCRIPT", "TECNOLOGIA", "PROGRAMACAO", "LOGICA", "HTML", 
    "CSS", "BROWSER", "VARIAVEL", "FUNCAO", "ALGORITMO"
];

let palavraSecreta = "";    
let tentativasRestantes = 6;
let letrasTentadas = [];    
let letrasCorretas = [];    
let palavraExibida = [];    
let pontuacao = 0;          

const displayPalavra = document.getElementById("palavra,Secreta");
const displayTentativas = document.getElementById("tentativasRestantes");
const displayPontuacao = document.getElementById("pontuacao");
const btnReiniciar = document.getElementById("restartButtonJS");

function iniciarJogo() {

    const posicaoSorteadaDaListaDePalavras = Math.floor(Math.random() * listaPalavras.length);
    
    palavraSecreta = listaPalavras[posicaoSorteadaDaListaDePalavras].toUpperCase();

    palavraExibida = Array(palavraSecreta.length).fill("_");

    tentativasRestantes = 6;
    letrasTentadas = [];
    letrasCorretas = [];

    renderizarPalavra();
}

function renderizarPalavra() {
    displayPalavra.innerHTML = ""; 

    palavraExibida.forEach(letra => {
        const span = document.createElement("span");
        span.innerText = letra;                      
        displayPalavra.appendChild(span);            
    });


    displayTentativas.innerText = tentativasRestantes;
    displayPontuacao.innerText = pontuacao;
}

btnReiniciar.addEventListener("click", iniciarJogo);

iniciarJogo(); a
