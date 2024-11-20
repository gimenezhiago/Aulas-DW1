carrinho = {
    itens: [
        {
            nome: "Camisa",
            preco: 50
        },
        {
            nome: "Calça",
            preco: 100
        }
    ],
    calcularTotal: function() {
        let sum = 0
        for (let i = 0; i < this.itens.length; i++) {

            sum += this.itens[i].preco 
        }
        console.log(sum)
    }
}

carrinho.calcularTotal()