const listaPalavras = [
    "JAVASCRIPT", "TECNOLOGIA", "PROGRAMACAO", "LOGICA", "HTML", 
    "CSS", "BROWSER", "VARIAVEL", "FUNCAO", "ALGORITMO"
];

let secretWord = "";
let attemptsLeft = 6;
let guessedLetters = [];
let correctLetters = [];
let displayWord = [];
let pontuacao = 0
let jogoFinalizado = false;


const displayPalavra = document.getElementById("palavra,Secreta");
const displayTentativas = document.getElementById("tentativas");
const displayPontuacao = document.getElementById("pontuacao");
const btnReiniciar = document.getElementById("restartButtonJS");
const btnChutar = document.getElementById("botaoJS");
const inputLetra = document.getElementById("userInput");


function iniciarJogo(){
    const posicaoSorteadaDaListaDePalavras = Math.floor(Math.random() * listaPalavras.length);
    secretWord = listaPalavras[posicaoSorteadaDaListaDePalavras].toUpperCase();
    displayWord = Array(secretWord.length).fill("_");
    displayWord = secretWord.split('').map(letra => letra === " " ? " " : "_");
    attemptsLeft = 6;
    guessedLetters = [];
    correctLetters = [];
    document.getElementById("letras-usadas").innerText = ""; 
    renderWord();
}

function renderWord(){
    displayPalavra.innerHTML = "";
    displayWord.forEach(letra => {
        const span = document.createElement("span");
        span.innerText = letra; 
        displayPalavra.appendChild(span);
    });    

    displayTentativas.innerText = attemptsLeft;
    displayPontuacao.innerText = pontuacao;

}

function chutar(){ // esta funcionando{
    const apenasLetras = /^[A-Z]$/; //
    
    const chute = inputLetra.value.toUpperCase();
    
    inputLetra.value = "";
    inputLetra.focus();
    
    if(!chute || !apenasLetras.test(chute)){
        alert("Caractere invalido, não to querendo esse aí.");
        return;
    }
    if(guessedLetters.includes(chute)){
        alert("ce gosta dessa letra ein?")
        return; //
    } // }esta funcionando


    guessedLetters.push(chute);

    if(secretWord.includes(chute)){

        for (let i = 0; i < secretWord.length; i++) {
            if (secretWord[i] === chute){
                displayWord[i] = chute;
            }
        }
    }else {
        attemptsLeft--;
       
        const letrasErradas = guessedLetters.filter(letra => !secretWord.includes(letra));
        
        document.getElementById("letras-usadas").innerText =  letrasErradas.join(", ");
    }
    renderWord();
    checarGameOver();
}

function checarGameOver(){
  const tempoEspera = 1000;
  
    if(attemptsLeft <= 0){
        setTimeout(() => {
        alert("Acabou o jogo, a palavra era: " + secretWord);
        iniciarJogo();
        }, tempoEspera);
    } else if (!displayWord.includes("_")){
        setTimeout(() => {
        alert("Pabens");
        pontuacao += 10;
        iniciarJogo();
        }, tempoEspera); 
    }
}

inputLetra.addEventListener("keypress", (e) => {
    if (e.key === "Enter"){ 
        chutar();
    }
});
btnChutar.addEventListener("click",chutar);
btnReiniciar.addEventListener("click", iniciarJogo);



iniciarJogo();