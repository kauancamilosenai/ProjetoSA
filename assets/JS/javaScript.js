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
const displayTentativas = document.getElementById("tentativas");
const displayPontuacao = document.getElementById("pontuacao");
const btnTentar = document.getElementById("botaoJS")
const btnReiniciar = document.getElementById("restartButtonJS");
const input = document.getElementById("userInput")

function iniciarJogo() {

    const posicaoSorteadaDaListaDePalavras = Math.floor(Math.random() * listaPalavras.length);
    
    palavraSecreta = listaPalavras[posicaoSorteadaDaListaDePalavras].toUpperCase();

    palavraExibida = Array(palavraSecreta.length).fill("_");

    tentativas = 6;
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


    displayTentativas.innerText = tentativas;
    displayPontuacao.innerText = pontuacao;
}

btnReiniciar.addEventListener("click", iniciarJogo);

function getUserInput(){
    let tentativa = document.getElementById("userInput").value;
};

btnTentar.addEventListener('click' , check); 

function checkAttempt(){
    getUserInput();
    let tentativa = document.getElementById("userInput").value;
    if(palavraSecreta.includes()){
        for(i of palavraSecreta){
            if(palavraSecreta[i] === tentativa){
                displayPalavra[i] = tentativa
            }
        }
        renderizarPalavra();
    }
}

input.addEventListener("keypress" , (e) => {
    if (e.key === "Enter"){
        checkAttempt();
    }
})

iniciarJogo();