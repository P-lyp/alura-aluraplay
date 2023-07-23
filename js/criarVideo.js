import { conectaApi } from "./conectaApi.js";

//seleciona o data atributte do formulário de cadastro de video
const formulario = document.querySelector("[data-formulario");

//adiciona um listener no form que é acionado com o input de submit
formulario.addEventListener("submit", (evento) => criarVideo(evento));

//função que irá receber os valores colocados no formulário e irá passar para a função criaVideo da conectaApi.js
async function criarVideo(evento) {
    //previne o recarergamento da pagina após o botão de submit
    evento.preventDefault();

    // atribuiçao dos valores preenchidos nos campos em constantes
    const titulo = document.querySelector("[data-titulo]").value;
    const descricao = Math.floor(Math.random() * 10).toString();
    const url = document.querySelector("[data-url]").value;
    const imagem = document.querySelector("[data-imagem]").value;

    //essas constantes são passadas para a função criaVideo onde usará metodo POST da api
    await conectaApi.criaVideo(titulo, descricao, url, imagem);

    //no final, encaminha para uma outra página para mostrar ao usuário que foi concluído
    window.location.href = "../pages/envio-concluido.html";
}

console.log(formulario);
