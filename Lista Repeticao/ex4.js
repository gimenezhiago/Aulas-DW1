let number = 28
function primo(n) {
    console.log(`O número ${n} é primo???`)

    if (n > 1){
        if (n / n == 1 && n / 1 == n) {
            return true
        } else {
            return false
        }
    } else {
        return false
    }
}

console.log(primo(number))