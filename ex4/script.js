let nomeProduto;

do {
    nomeProduto = prompt("Digite o nome do produto para cadastro:");
    if (nomeProduto.length < 3)
    alert ("Nome Inválido! O produto deve no mínimo 3 caracteres")
} while (nomeProduto.length < 3);
alert ("Produto '" + nomeProduto + "' cadastrado com sucesso!");