let pontuacao = prompt("Digite sua pontuação:");

pontuacao = parseInt(pontuacao);

if (pontuacao >= 100) {
    console.log("Parabéns, você venceu!");
} else {
    console.log("Tente novamente para ganhar.");
}
