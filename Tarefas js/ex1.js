function reverseString(str) {
    let reversePalavra = ''
    for(let i = str.length - 1; i >= 0; i--) {
        reversePalavra += str[i]
    }
    return reversePalavra
}

console.log(reverseString("javascript")); // Deve exibir: "tpircsavaj"
console.log(reverseString("hello")); // Deve exibir: "olleh"