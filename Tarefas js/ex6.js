function toSnakeCase(str) {
    let palavra = ''
    for(let i = 0; i < str.length; i++) {
        let letra = str[i]
        if (letra === ' ') {
            palavra += '_'
        } else {
            palavra += letra.toLowerCase()
        }
    }
    return palavra
}

console.log(toSnakeCase("Hello World")); // Deve exibir: "hello_world"
console.log(toSnakeCase("JavaScript is fun")); // Deve exibir: "javascript_is_fun"
