function aplicarDesconto(livros) {
    const desconto = 0.3
    LivroComDesconto = livros.map(livro => {
        return {...livro, preco: livro.preco - (livro.preco * desconto)}
    })
    return LivroComDesconto
}