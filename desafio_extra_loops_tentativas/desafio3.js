let numero = prompt("Digite um número para a contagem regressiva:");
numero = parseInt(numero);

if (isNaN(numero)) {
    console.log("Por favor, digite um número válido.");
} else {
    console.log("Contagem regressiva começando de " + numero + " até 0:");

    while (numero >= 0) {
        console.log(numero);
        numero--;
    }
}
