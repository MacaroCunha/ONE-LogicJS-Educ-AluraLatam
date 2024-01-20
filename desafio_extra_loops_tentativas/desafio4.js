let numero = prompt("Digite um número para a contagem progressiva:");
let contador = 0;
numero = parseInt(numero);

if (isNaN(numero)) {
    console.log("Por favor, digite um número válido.");
} else {
    console.log("Contagem progressiva começando de 0 até " + numero + ":");

    while (contador <= numero) {
        console.log(contador);
        contador++;
    }
    console.log("Contagem progressiva concluída!");
}
