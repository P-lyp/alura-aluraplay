//Função que conecta na endpoint da api com os dados em json e armazena em uma const
async function listaVideos() {
    //da get no server local usando json-server
    const conexao = await fetch("http://localhost:3000/videos");
    const conexaoConvertida = await conexao.json();
    return conexaoConvertida;
}

// Exemplo de armazenar info no banco de dados
async function criaVideo(titulo, descricao, url, imagem) {
    const conexao = await fetch("http://localhost:3000/videos", {
        method: "POST",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify({
            titulo: titulo,
            descricao: `${descricao} mil visualizações`,
            url: url,
            imagem: imagem,
        }),
    });
    const conexaoConvertida = await conexao.json();
    return conexaoConvertida;
}

// Exemplo de busca
async function buscaVideo(termoDeBusca) {
    const conexao = await fetch(
        `http://localhost:3000/videos?q=${termoDeBusca}`
    );
    const conexaoConvertida = await conexao.json();
    return conexaoConvertida;
}

//exporta a função lista videos dentro do obj ConectaApi para depois ser importada em mostrarVideos.js
export const conectaApi = {
    listaVideos,
    criaVideo,
    buscaVideo,
};
