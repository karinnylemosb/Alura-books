let livros = [];
const endPointDaApi =
  'https://guilhermeonrails.github.io/casadocodigo/livros.json';

getBuscarLivrosdaApi();

async function getBuscarLivrosdaApi() {
  const res = await fetch(endPointDaApi);
  livros = await res.json();
  console.table(livros);
}
