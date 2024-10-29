function trimSpaces(str) {
    let espaço = str.trim()

    return espaço.replace(/ +/g, ' ')
}

console.log(trimSpaces("    JavaScript     é      divertido"))//"JavaScript é divertido"
console.log(trimSpaces("     Programção     é       interessante"))//"Programação é interessante"