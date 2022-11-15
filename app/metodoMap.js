function aplicarDesconto(livros) {
  const desconto = 0.3;
  livrosComDesconto = livros.map((livro) => {
    return { ...livro, preco: livro.preco - livro.preco * desconto }; //...Pega todo livro
  });
  return livrosComDesconto;
}
