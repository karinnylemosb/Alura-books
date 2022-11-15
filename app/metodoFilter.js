const btnFiltrarLivrosDeFront = document.getElementById(
  'btnFiltrarLivrosFront',
);
btnFiltrarLivrosDeFront.addEventListener('click', filtrarLivrosDeFront);

function filtrarLivrosDeFront() {
  let livrosFiltrados = livros.filter(
    //Esse livros vem lá do main livros = [];
    (livro) => livro.categoria == 'front-end',
  );
  console.table(livrosFiltrados);
}
