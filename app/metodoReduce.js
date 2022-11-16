//O reducer combina dois valores e reduz ele a só um.
function calcularValorTotalDeLivrosDisponiveis(livros) {
  return livros.reduce((acc, livro) => acc + livro.preco, 0).toFixed(2);
  //começando a partir do zero.
}
