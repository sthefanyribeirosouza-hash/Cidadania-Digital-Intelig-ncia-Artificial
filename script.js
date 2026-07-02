let pontos = 0;
let respostas = 0;

function resposta(correta){
    respostas++;

    if(correta){
        pontos++;
    }

    if(respostas === 3){
        document.getElementById("resultado").innerHTML =
        "Você acertou " + pontos + " de 3 perguntas!";
    }
}
