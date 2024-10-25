function isPalindrome(str) {
    let reversePalavra = ''
    for(let i = str.length - 1; i >= 0; i--) {
        reversePalavra += str[i]

    }
    return reversePalavra === str
}

console.log(isPalindrome("arara")); // Deve exibir: true
console.log(isPalindrome("hello")); // Deve exibir: false