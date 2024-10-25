function getInitials(name) {
    let initials = ''
    let isNewWord = true
    for(let i = 0; i < name.length; i++) {
        if (name[i] === ' ') {
            isNewWord = true
        } else if (isNewWord) {
            initials += name[i].toUpperCase()
            isNewWord = false
        }
    }
    return initials
}

console.log(getInitials("João Silva")); // Deve exibir: "JS"
console.log(getInitials("Maria Oliveira")); // Deve exibir: "MO"
