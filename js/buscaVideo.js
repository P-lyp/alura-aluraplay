//importa o arquivo conectaAPI
import { conectaApi } from "./conectaApi.js";
import constroiCard from "./mostrarVideos.js";

// seleciona o elemento botão do campo de pesquisa
const botaoDePesquisa = document.querySelector("[data-botao-pesquisa]");

//adiciona um listener para que toda vez que esse botão for clicado,

botaoDePesquisa.addEventListener("click", (evento) => buscarVideo(evento));

// //função para buscar vídeos com base no texto escrito no campo de pesquisa
async function buscarVideo(evento) {
    //previne o site de recarregar quando o der submit
    evento.preventDefault();
    // pelo meu entedimento, o evento é passado como paramêtro apenas para que depois possa usar o .preventDefault() nele para evitar o recarregamento da página

    // pega e armazena o valor campo de texto do input de pesquisa
    const dadosDePesquisa = document.querySelector("[data-pesquisa]").value;

    // const busca recebe -> dadosDePesquisa(conteudo digitado no campo de pesquisa) é enviado para função buscaVideo que pega esse valor e faz a busca
    const busca = await conectaApi.buscaVideo(dadosDePesquisa);

    const lista = document.querySelector("[data-lista]");

    while (lista.firstChild) {
        lista.removeChild(lista.firstChild);
    }

    busca.forEach((element) =>
        lista.appendChild(
            constroiCard(
                element.titulo,
                element.descricao,
                element.url,
                element.imagem
            )
        )
    );
}
