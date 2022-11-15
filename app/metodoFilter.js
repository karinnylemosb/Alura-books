const botoes = document.querySelectorAll('.btn');

botoes.forEach((btn) => btn.addEventListener('click', filtrarLivros));

function filtrarLivros() {
  const elementoBtn = document.getElementById(this.id); //houve um click, qual botão to clicando?
  const categoria = elementoBtn.value; //Qual valor desse botão?
  //Esse livros vem lá do main livros = []:
  let livrosFiltrados =
    categoria == 'disponivel'
      ? livros.filter((livro) => livro.quantidade > 0)
      : livros.filter((livro) => livro.categoria == categoria); // O livro que eu quero filtrar vão ser só aqueles que o value do botão for igual ao .categoria de cada livro do array;
  exibirOsLivrosNaTela(livrosFiltrados);
  if (categoria == 'disponivel') {
    exibirValorTotalDosLivrosDisponiveisnatela();
  }
}

function exibirValorTotalDosLivrosDisponiveisnatela() {
  elementoComValorTotal.innerHTML = `
  <div class="livros__disponiveis">
      <p>Todos os livros disponíveis por R$ <span id="valor">299,00</span></p>
  </div>
  
  `;
}
