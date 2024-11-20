estoque = {
    produtos: [
        {
            id: 1,
            nome: "Caneta",
            quantidade: 10
        },
        {
            id: 2,
            nome: "Caderno",
            quantidade: 15
        }
    ],
    atualizarQuantidade: function(idn, quantidaden) {
        const produto = this.produtos.find(produto => produto.id === idn)
        if(produto) {
            produto.quantidade = quantidaden
            console.log(produto) 
        }
    }
}

estoque.atualizarQuantidade(2, 30)