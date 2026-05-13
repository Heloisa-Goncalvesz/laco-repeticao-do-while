let senhaCorreta ="1234";
let tentativa;
do {
    tentativa= prompt("Digite a senha para ter acesso");
    if (tentativa !== senhaCorreta) {
        alert("Senha Incorreta! Tente novamente.");
    }
} while (tentativa !== senhaCorreta);

alert("Acesso Permitido");