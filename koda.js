const resposta1 = document.querySelector(".opc1")
const resposta2 = document.querySelector(".opc2")
const respostaerrada = document.querySelector(".escolhaerrada")
const respostacerta = document.querySelector(".escolhacerta")
const dnv = document.querySelector(".dnv")
const voltar = document.querySelector(".voltar")

resposta1.addEventListener("click", function () {
    respostaerrada.style.display = "flex";

})

resposta2.addEventListener("click", function(){
    respostacerta.style.display  = "flex";
})

dnv.addEventListener("click", function () {
    respostaerrada.style.display = "none";
})
voltar.addEventListener("click", function () {
    respostacerta.style.display = "none";
})
