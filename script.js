const cards = document.querySelectorAll('.card');
let quanttotal = cards.length;
let hasFlipCard = false;
let PrimeiraCarta, SegundaCarta;
let TrancarTabuleiro = false;
let contador = 0;
let quantpares = quanttotal/2;
let telaReset = document.getElementById("confirmacao");

function flipCard(){
    if(TrancarTabuleiro){
        return;
    }
    if (this === PrimeiraCarta){
        return;
    }
    this.classList.add('flip');
    if(hasFlipCard == false){
        hasFlipCard = true;
        PrimeiraCarta = this;
        return;
    }

    SegundaCarta = this;
    hasFlipCard = false;
    checarcartas();
}

function checarcartas(){
    if(PrimeiraCarta.dataset.carta === SegundaCarta.dataset.carta){
        desabilitarCartas();
        return;   
    }

    virarCartas();
}

function desabilitarCartas(){
    PrimeiraCarta.removeEventListener('click', flipCard);
    SegundaCarta.removeEventListener('click', flipCard);
    contador++;
    if(contador === quantpares){
        resetarJogo();
        return
    }
}

function virarCartas(){
    TrancarTabuleiro = true;

    setTimeout(() =>{
        PrimeiraCarta.classList.remove('flip');
        SegundaCarta.classList.remove('flip');
        TrancarTabuleiro = false;
    },1500);

}

function resetarJogo(){
    console.log ("Jogo Finalizado");
    telaReset.style.display = "flex";
}

function reiniciarJogo(){
    window.location.reload(true)
}

function fecharJogo(){
    window.close();
}

(function embaralhar(){
    cards.forEach((card) =>{
        let randowPosition = Math.floor(Math.random() * 12); //sorteia números de 0 a 11;
        card.style.order = randowPosition;
    })
}()) // funçao sendo iniciada imediamente;


cards.forEach((card) => {
    card.addEventListener('click', flipCard);
})




