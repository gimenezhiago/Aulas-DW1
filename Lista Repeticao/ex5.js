
function primo(n) {
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

function repPrimo(h) {
    for(let i = 0; i <= h; i++) {
        if (primo(i)) {
            console.log(i)
        }
    }
}

repPrimo(100)