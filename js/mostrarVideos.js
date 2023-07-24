//importa o objeto conectaApi  que contém a função listaVideos() do arquivo conectaApi.js
import { conectaApi } from "./conectaApi.js";

// selecionando o data-atributte da lista onde será colocadas os videos
const lista = document.querySelector("[data-lista]");

// função que pega os objetos da api e em seguida é passada para função de criar os elementos do video com os parâmetros de cada chave dentro dos objetos
async function listaVideos() {
    try {
        // armazena os dados pegos na conexão com a Api na const listaApi
        const listaApi = await conectaApi.listaVideos();

        // em cada objeto da lista, ele será passado como parâmetro na arrow function
        listaApi.forEach((element) =>
            // através do .appendChild() será atribuído a lista o constroiCard
            lista.appendChild(
                // passa para o constroiCard o titulo, descricao, url e imagem dos elementos
                constroiCard(
                    element.titulo,
                    element.descricao,
                    element.url,
                    element.imagem
                )
            )
        );
    } catch {
        lista.innerHTML = `<h2 class="mensagem__titulo">Não foi possível carregar a lista de vídeos!</h2>`;
    }
}

listaVideos();

//função que recebe as chaves dos objetos como paramêtro e cria dinamicamente o componente html dos vídeos
export default function constroiCard(titulo, descricao, url, imagem) {
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
