let jogador1 = " ";
let jogador2 = " ";
let valorDoBloco = " ";
let vezDeJogar;
let contadorJogador1 = 0;
let contadorJogador2 = 0;
function coletarValor(elemento){
    if(jogador1 === " "){
        jogador1 = elemento.innerText;
        vezDeJogar = jogador1;
        alert("Jogador 1: " + jogador1);
    } else if(jogador1 === "X" || jogador1 === "O"){
        if(jogador1 === elemento.innerText){
            jogador1 = elemento.innerText;
            alert("Jogador 1: " + jogador1);
        }else{
            jogador2 = elemento.innerText;
            alert("Jogador 2: " + jogador2);
        }
    }
}

function mudarValor(id, elemento){
    valorDoBloco = elemento.innerHTML;
    
    if(valorDoBloco === "X" || valorDoBloco ==="O"){
        alert("Este bloco já foi ocupado por " + valorDoBloco);
    }else{
        if(vezDeJogar === jogador1){
            document.getElementById(id).innerText = vezDeJogar;
            vezDeJogar = jogador2;
        }else{
            document.getElementById(id).innerText = vezDeJogar;
            vezDeJogar = jogador1;
        }
    }
    // Verificação com um pequeno atraso para garantir que a jogada seja processada
    setTimeout(function() {
        verificacao();
    }, 100);  // 100 milissegundos de atraso
}

function verificacao(){
    let bloco1 = document.getElementById("bloco1").innerText;
    let bloco2 = document.getElementById("bloco2").innerText;
    let bloco3 = document.getElementById("bloco3").innerText;
    let bloco4 = document.getElementById("bloco4").innerText;
    let bloco5 = document.getElementById("bloco5").innerText;
    let bloco6 = document.getElementById("bloco6").innerText;
    let bloco7 = document.getElementById("bloco7").innerText;
    let bloco8 = document.getElementById("bloco8").innerText;
    let bloco9 = document.getElementById("bloco9").innerText;
    if(bloco1 === bloco2 && bloco1 === bloco3 && bloco1 !== "" && bloco2 !== ""  && bloco3 !== ""){
        if(jogador1 === bloco1){
            alert("O jogador 1 ganhou!");
            alert("O 2° jogador começa!");
            contadorJogador1 += 1;
            document.getElementById("contadorJogador1").innerText = "1° Jogador: " + contadorJogador1;
        }else{
            alert("O jogador 2 ganhou!");
            alert("O 1° jogador começa!");
            contadorJogador2 += 1;
            document.getElementById("contadorJogador2").innerText = "2° Jogador: " + contadorJogador2;
        }
        document.getElementById("bloco1").innerText = "";
        document.getElementById("bloco2").innerText = "";
        document.getElementById("bloco3").innerText = "";
        document.getElementById("bloco4").innerText = "";
        document.getElementById("bloco5").innerText = "";
        document.getElementById("bloco6").innerText = "";
        document.getElementById("bloco7").innerText = "";
        document.getElementById("bloco8").innerText = "";
        document.getElementById("bloco9").innerText = "";
    }else if(bloco1 === bloco4 && bloco1 === bloco7 && bloco1 !== "" && bloco4 !== ""  && bloco7 !== ""){
        if(jogador1 === bloco1){
            alert("O jogador 1 ganhou!");
             alert("O 2° jogador começa!");
            contadorJogador1 += 1;
            document.getElementById("contadorJogador1").innerText = "1° Jogador: " + contadorJogador1;
        }else{
            alert("O jogador 2 ganhou!");
            alert("O 1° jogador começa!");
            contadorJogador2 += 1;
            document.getElementById("contadorJogador2").innerText = "2° Jogador: " + contadorJogador2;
        }
        document.getElementById("bloco1").innerText = "";
        document.getElementById("bloco2").innerText = "";
        document.getElementById("bloco3").innerText = "";
        document.getElementById("bloco4").innerText = "";
        document.getElementById("bloco5").innerText = "";
        document.getElementById("bloco6").innerText = "";
        document.getElementById("bloco7").innerText = "";
        document.getElementById("bloco8").innerText = "";
        document.getElementById("bloco9").innerText = "";
    }else if(bloco1 === bloco5 && bloco1 === bloco9 && bloco1 !== "" && bloco5 !== ""  && bloco9 !== ""){
        if(jogador1 === bloco1){
            alert("O jogador 1 ganhou!");
             alert("O 2° jogador começa!");
            contadorJogador1 += 1;
            document.getElementById("contadorJogador1").innerText = "1° Jogador: " + contadorJogador1;
        }else{
            alert("O jogador 2 ganhou!");
            alert("O 1° jogador começa!");
            contadorJogador2 += 1;
            document.getElementById("contadorJogador2").innerText = "2° Jogador: " + contadorJogador2;
        }
        document.getElementById("bloco1").innerText = "";
        document.getElementById("bloco2").innerText = "";
        document.getElementById("bloco3").innerText = "";
        document.getElementById("bloco4").innerText = "";
        document.getElementById("bloco5").innerText = "";
        document.getElementById("bloco6").innerText = "";
        document.getElementById("bloco7").innerText = "";
        document.getElementById("bloco8").innerText = "";
        document.getElementById("bloco9").innerText = "";
    }else if(bloco2 === bloco5 && bloco2 === bloco8 && bloco2 !== "" && bloco5 !== ""  && bloco8 !== ""){
        if(jogador1 === bloco1){
            alert("O jogador 1 ganhou!");
             alert("O 2° jogador começa!");
            contadorJogador1 += 1;
            document.getElementById("contadorJogador1").innerText = "1° Jogador: " + contadorJogador1;
        }else{
            alert("O jogador 2 ganhou!");
            alert("O 1° jogador começa!");
            contadorJogador2 += 1;
            document.getElementById("contadorJogador2").innerText = "2° Jogador: " + contadorJogador2;
        }
        document.getElementById("bloco1").innerText = "";
        document.getElementById("bloco2").innerText = "";
        document.getElementById("bloco3").innerText = "";
        document.getElementById("bloco4").innerText = "";
        document.getElementById("bloco5").innerText = "";
        document.getElementById("bloco6").innerText = "";
        document.getElementById("bloco7").innerText = "";
        document.getElementById("bloco8").innerText = "";
        document.getElementById("bloco9").innerText = "";
    }else if(bloco3 === bloco6 && bloco3 === bloco9 && bloco3 !== "" && bloco6 !== ""  && bloco9 !== ""){
        if(jogador1 === bloco1){
            alert("O jogador 1 ganhou!");
             alert("O 2° jogador começa!");
            contadorJogador1 += 1;
            document.getElementById("contadorJogador1").innerText = "1° Jogador: " + contadorJogador1;
        }else{
            alert("O jogador 2 ganhou!");
            alert("O 1° jogador começa!");
            contadorJogador2 += 1;
            document.getElementById("contadorJogador2").innerText = "2° Jogador: " + contadorJogador2;
        }
        document.getElementById("bloco1").innerText = "";
        document.getElementById("bloco2").innerText = "";
        document.getElementById("bloco3").innerText = "";
        document.getElementById("bloco4").innerText = "";
        document.getElementById("bloco5").innerText = "";
        document.getElementById("bloco6").innerText = "";
        document.getElementById("bloco7").innerText = "";
        document.getElementById("bloco8").innerText = "";
        document.getElementById("bloco9").innerText = "";
    }else if(bloco4 === bloco5 && bloco4 === bloco6 && bloco4 !== "" && bloco5 !== ""  && bloco6 !== ""){
        if(jogador1 === bloco1){
            alert("O jogador 1 ganhou!");
             alert("O 2° jogador começa!");
            contadorJogador1 += 1;
            document.getElementById("contadorJogador1").innerText = "1° Jogador: " + contadorJogador1;
        }else{
            alert("O jogador 2 ganhou!");
            alert("O 1° jogador começa!");
            contadorJogador2 += 1;
            document.getElementById("contadorJogador2").innerText = "2° Jogador: " + contadorJogador2;
        }
        document.getElementById("bloco1").innerText = "";
        document.getElementById("bloco2").innerText = "";
        document.getElementById("bloco3").innerText = "";
        document.getElementById("bloco4").innerText = "";
        document.getElementById("bloco5").innerText = "";
        document.getElementById("bloco6").innerText = "";
        document.getElementById("bloco7").innerText = "";
        document.getElementById("bloco8").innerText = "";
        document.getElementById("bloco9").innerText = "";
    }else if(bloco7 === bloco8 && bloco7 === bloco9 && bloco7 !== "" && bloco8 !== ""  && bloco9 !== ""){
        if(jogador1 === bloco1){
            alert("O jogador 1 ganhou!");
             alert("O 2° jogador começa!");
            contadorJogador1 += 1;
            document.getElementById("contadorJogador1").innerText = "1° Jogador: " + contadorJogador1;
        }else{
            alert("O jogador 2 ganhou!");
            alert("O 1° jogador começa!");
            contadorJogador2 += 1;
            document.getElementById("contadorJogador2").innerText = "2° Jogador: " + contadorJogador2;
        }
        document.getElementById("bloco1").innerText = "";
        document.getElementById("bloco2").innerText = "";
        document.getElementById("bloco3").innerText = "";
        document.getElementById("bloco4").innerText = "";
        document.getElementById("bloco5").innerText = "";
        document.getElementById("bloco6").innerText = "";
        document.getElementById("bloco7").innerText = "";
        document.getElementById("bloco8").innerText = "";
        document.getElementById("bloco9").innerText = "";
    }else if(bloco3 === bloco5 && bloco3 === bloco7 && bloco3 !== "" && bloco5 !== ""  && bloco7 !== ""){
        if(jogador1 === bloco1){
            alert("O jogador 1 ganhou!");
            alert("O 2° jogador começa!");
            contadorJogador1 += 1;
            document.getElementById("contadorJogador1").innerText = "1° Jogador: " + contadorJogador1;
        }else{
            alert("O jogador 2 ganhou!");
            alert("O 1° jogador começa!");
            contadorJogador2 += 1;
            document.getElementById("contadorJogador2").innerText = "2° Jogador: " + contadorJogador2;
        }
        document.getElementById("bloco1").innerText = "";
        document.getElementById("bloco2").innerText = "";
        document.getElementById("bloco3").innerText = "";
        document.getElementById("bloco4").innerText = "";
        document.getElementById("bloco5").innerText = "";
        document.getElementById("bloco6").innerText = "";
        document.getElementById("bloco7").innerText = "";
        document.getElementById("bloco8").innerText = "";
        document.getElementById("bloco9").innerText = "";
    }else if(bloco1 !== "" && bloco2 !== "" && bloco3 !== "" && bloco4 !== "" && bloco5 !== "" && bloco6 !== "" && bloco7 !== "" && bloco8 !== "" && bloco9 !== ""){
        alert("O jogo deu velha. Fim do jogo");
        if(vezDeJogar === jogador1){
            alert("O 1° jogador começa!");
        }else{
           alert("O 2° jogador começa!"); 
        }
        document.getElementById("bloco1").innerText = "";
        document.getElementById("bloco2").innerText = "";
        document.getElementById("bloco3").innerText = "";
        document.getElementById("bloco4").innerText = "";
        document.getElementById("bloco5").innerText = "";
        document.getElementById("bloco6").innerText = "";
        document.getElementById("bloco7").innerText = "";
        document.getElementById("bloco8").innerText = "";
        document.getElementById("bloco9").innerText = "";
    }
}