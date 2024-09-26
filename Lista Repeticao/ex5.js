
function primo(n) {
    if (n > 1){
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
}

function repPrimo(h) {
    for(let i = 0; i <= h; i++) {
        if (primo(i)) {
            console.log(i)
        }
    }
}

repPrimo(10)