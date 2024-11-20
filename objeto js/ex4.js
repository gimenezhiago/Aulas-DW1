pessoa = {
    nome: "Hiago",
    idade: "16",
    cumprimentar: function() {
        console.log(`Olá meu nome é ${this.nome}`)
    }
}

pessoa.cumprimentar()