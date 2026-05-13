let somaTotal = 0;
let resposta;

do {
    //Solicita um número e o converte para tipo numérico
    let numero=Number(prompt("Digite um número inteiro qualquer:"));
    //Soma a variável ao numero digitado
    somaTotal= somaTotal + numero; 
    //Pergunta ao usuário se deseja continuar
    resposta = prompt("Deseja inserir outro número? (s/n)");
}
while (resposta === "s")
alert("A soma total é:" + somaTotal);