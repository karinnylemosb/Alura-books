const elementoParaInserirLivros = document.getElementById('livros');

function exibirOsLivrosNaTela(listaDeLivros) {
  elementoParaInserirLivros.innerHTML = '';
  listaDeLivros.forEach((livro) => {
    elementoParaInserirLivros.innerHTML += `
    <div class="livro">
      <img class="livro__imagens" src=${livro.imagem} alt=${livro.alt} />

      <h2 class="livro__titulo">
        ${livro.titulo}
      </h2>

      <p class="livro__descricao">${livro.autor}</p>

      <p class="livro__preco" id="preco">${livro.preco.toFixed(2)}</p>

      <div class="tags">
        <span class="tag">${livro.categoria}</span>
      </div>
    </div>
    `;
  });
}

//O .map percorre cada item do array (como o forEach) para modificar algo nesses itens. Ele não altera o array original, ele cria outra variável com os dados modificados. Ela sempre retorna um valor.
//E essa é a principal diferença entre os métodos map e forEach. Sendo assim, o forEach manipula os dados reais de um array e o map cria um novo array.
