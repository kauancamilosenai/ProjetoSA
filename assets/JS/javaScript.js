const palavrasAleatorias = ["Chaves" , "Barril" , "Carros" , "Itens" ,
 "Spoiler" , "Seis" , "Transporte" , "Publicidade" , "Onze" , "SantaCatarina"];


let palavraSecreta = "";   //guarda a palavra que foi sorteada
let tentativasRestantes = 6;   
let letrasUsadas = [];
let letrasCorretas = [];
let displayPalavra = [];
let pontuacao = 0;

const displayPalavra = document.getElementById(palavraSecreta);
const displayTentativas = document.getElementById(tentativasRestantes);
const displayPontuacao = Document.getElementById(pontuacao);
const botaoReinicio = document.getElementById(restartButton);

function iniciarJogo(){
    const posicaoSorteadaDaListaDePalavras = Math.floor(math.random() * palavrasAleatorias.length);
    
    palavraSecreta = palavrasAleatorias[posicaoSorteadaDaListaDePalavras].fill(_);

    //reset limpando todos os dados
    tentativasRestantes = 6;
    letrasUsadas = [];
    letrasCorretas = [];
   
    renderizarPalavra();
}

function renderizarPalavra(){
    palavraSecreta.innerHTML = ""
    displayPalavra.forEach(letra => {
        const span = document.createElement("span");
        span.innerText = letra;
        palavraSecreta.appendChild(span);
    }
    )
}

botaoReinicio.addEventListener("click", iniciarJogo);
iniciarJogo();