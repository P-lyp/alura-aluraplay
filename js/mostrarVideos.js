//importa o objeto conectaApi  que contém a função listaVideos() do arquivo conectaApi.js
import { conectaApi } from "./conectaApi.js";

// selecionando o data-atributte da lista onde será colocadas os videos
const lista = document.querySelector("[data-lista]");

// função que pega os objetos da api e em seguida é passada para função de criar os elementos do video com os parâmetros de cada chave dentro dos objetos
async function listaVideos() {
    // armazena os dados pegos na conexão com a Api na const listaApi
    const listaApi = await conectaApi.listaVideos();

    // em cada objeto da lista, ele será passado como parâmetro na arrow function
    listaApi.forEach((element) =>
        // as chaves de cada objeto é passado como parâmetro para a função que exibe os elementos no html, em seguida o resultado dessa função com o componente html, será atribuido através do appendChild no elemento da lista
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

listaVideos();

//função que recebe as chaves dos objetos como paramêtro e cria dinamicamente o componente html dos vídeos
function constroiCard(titulo, descricao, url, imagem) {
    // é criado o elemento li já que depois será colocado em uma ul
    const video = document.createElement("li");

    //adiciona a classe para receber a estilização do css
    video.className = "videos__item";

    // molde do html que foi pego no index.html de forma estática e transformado em forma dinâmica
    video.innerHTML = `
    <iframe width="100%" height="72%" src="${url}"
        title="${titulo}" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen></iframe>
    <div class="descricao-video">
        <img src="${imagem}" alt="logo canal alura">
        <h3>${titulo}</h3>
        <p>${descricao}</p>
    </div>
    `;

    // retorna o elemento video para que ele possa ser passada pelo método .appendChild()
    return video;
}
