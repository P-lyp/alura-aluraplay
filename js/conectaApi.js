//Função que conecta na endpoint da api com os dados em json e armazena em uma const
async function listaVideos() {
    //da get no server local usando json-server
    const conexao = await fetch("http://localhost:3000/videos");
    const conexaoConvertida = await conexao.json();
    return conexaoConvertida;
}

// Exemplo de armazenar info no banco de dados
// os param foram passados por outra função em que pegou os valores preenchidos no form de cadastro
async function criaVideo(titulo, descricao, url, imagem) {
    //conecta na API, porém dessa vez utilizando o método POST para armazenar informações no banco de dados
    const conexao = await fetch("http://localhost:3000/videos", {
        method: "POST",
        // padrao quando for dar POST
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify({
            // aqui se insere to o texto que irá para o arquivo .json
            titulo: titulo,
            descricao: `${descricao} mil visualizações`,
            url: url,
            imagem: imagem,
        }),
    });
    //procedimento padrao de uma chamada de api
    const conexaoConvertida = await conexao.json();
    return conexaoConvertida;
}

// Exemplo de busca
//  param termoDeBusca que foi passado sendo o valor do texto digitado no input de pesquisa
async function buscaVideo(termoDeBusca) {
    //procedimento padrao de conectar com a api, porém é utilizado o '?q=' e o param da função para buscar a informação no banco de dados
    const conexao = await fetch(
        `http://localhost:3000/videos?q=${termoDeBusca}`
    );
    //procedimento padrao de uma chamada de api
    const conexaoConvertida = await conexao.json();
    return conexaoConvertida;
}

//exporta as funções dentro do obj ConectaApi para depois ser importada em outros arquivos .json
export const conectaApi = {
    listaVideos,
    criaVideo,
    buscaVideo,
};
