produto = {
    nome: "Camisa Corinthians",
    preco: "200,00",
    categoria: "Camisa"
}

for(let chave in produto) {
    console.log(`${chave}: ${produto[chave]}`)
}
