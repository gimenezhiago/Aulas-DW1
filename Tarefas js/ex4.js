function countOccurrences(str, char) {
    let cont = 0
    for(let i = 0; i < str.length; i++) {
        let letra = str[i]
        if(letra === char) {
            cont += 1
        }
    }
    
    return cont
}

console.log(countOccurrences("banana", "a")); // Deve exibir: 3
console.log(countOccurrences("hello world", "l")); // Deve exibir: 3