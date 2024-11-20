usuarios = [
    {
        nome: "hiago",
        idade: "16",
        email: "hiago@gmail.com"
    }
]

const novoUsuario = usuarios.map( (usuario) => ({
    nome: usuario.nome,
    email: usuario.email
}))

console.log(novoUsuario)