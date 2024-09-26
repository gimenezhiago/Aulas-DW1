let number = 23
function primo(n) {
    console.log(`O número ${n} é primo???`)

    if (n > 1){
        if ((n / n == 1 && n / 1 == n)) {
            for(let i = 2; i <= n;i++) {
                if(n % i == 0) {
                    return false
                } else {
                    return true
                }
            }
        } else {
            return false
        }
    } else {
        return false
    }
}

console.log(primo(number))