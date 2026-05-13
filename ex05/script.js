let opcao;
let totalPedido = 0;

do {
    opcao = prompt(
        "--- MENU CAFETERIA ---\n" +
        "1 - Café Expresso (R$ 5,00)\n" +
        "2 - Cappuccino (R$ 7,00)\n" +
        "3 - Pão de Queijo (R$ 4,00)\n" +
        "0 - Finalizar Pedido\n\n" +
        "Escolha uma opção:"
    );

    if (opcao === "1") {
        totalPedido = totalPedido + 5;
        alert("Café Expresso adicionado!");
    } 
    else if (opcao === "2") {
        totalPedido = totalPedido + 7;
        alert("Cappuccino adicionado!");
    } 
    else if (opcao === "3") {
        totalPedido = totalPedido + 4;
        alert("Pão de Queijo adicionado!");
    } 
    else if (opcao === "0") {
        alert("Finalizando seu pedido...");
    } 
    else {
        alert("Opção inválida!");
    }

} while (opcao !== "0"); // O laço continua enquanto a opção não for "0"

// Exibição do valor total formatado
alert("Pedido finalizado. O total da sua conta é R$ " + totalPedido);