let numeroSecreto = 8;
let tentativas;
let contador = 0;

do {
    tentativas = Number(prompt("Tente advinhar o número secreto (1 à 10)"));
    contador = contador + 1;
    if (tentativas !== numeroSecreto) {
        alert("Errou! por favor tente novamente.");
    }

} while (tentativas !== numeroSecreto);
alert("Parabéns! Você acertou em " + contador + " tentativa(s).");