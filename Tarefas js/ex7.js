function capitalizeWords(str) {
    let palavra = str.split(' ')

    for(let i = 0; i < palavra.length; i++) {
        palavra[i] = palavra[i].charAt(0).toUpperCase() + palavra[i].slice(1).toLowerCase()

    }
    return palavra.join(' ')
}

console.log(capitalizeWords("hello world")); // Exibe: "Hello World"
console.log(capitalizeWords("javaScript is awesome")); // Exibe: "JavaScript Is Awesome"
