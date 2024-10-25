function countVowels(str) {
    let cont = 0
    for(let i = 0; i < str.length; i++) {
        let letra = str[i].toLowerCase()
        if(letra === 'a' || letra === 'e' || letra === 'o' || letra === 'u' || letra === 'i') {
            cont = cont + 1
        }
    }
    return cont
}

console.log(countVowels("OpenAI")); // Deve exibir: 4
console.log(countVowels("JavaScript")); // Deve exibir: 3