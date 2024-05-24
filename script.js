const naoOption = document.getElementById("nao");
const mensagemDiv = document.getElementById("mensagem");

naoOption.addEventListener("mouseover", function() {
    const newX = Math.random() * (window.innerWidth - naoOption.offsetWidth);
    const newY = Math.random() * (window.innerHeight - naoOption.offsetHeight);
    naoOption.style.position = "absolute";
    naoOption.style.left = newX + "px";
    naoOption.style.top = newY + "px";
});

const simOption = document.getElementById("sim");

simOption.addEventListener("click", function() {
    mensagemDiv.innerText = "Paga a Coca, Eddy!";
});
