//Array de livros:
let livros = [];

//Endpoint da API:
const endPointDaApi =
  'https://guilhermeonrails.github.io/casadocodigo/livros.json';

getBuscarLivrosdaApi();

const elementoParaInserirLivros = document.getElementById('livros');

//Função fetch:
async function getBuscarLivrosdaApi() {
  const res = await fetch(endPointDaApi);
  livros = await res.json();
  let livrosComDesconto = aplicarDesconto(livros);
  exibirOsLivrosNaTela(livrosComDesconto);
}
