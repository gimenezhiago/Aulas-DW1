let number = 4

function fatorial(n) {
    let res = 1
    if(n >= 0) {
        for(let i = n; i > 0; i--) {
            res *= i
        }
        console.log(`${n}! = ${res}`)
    } else {
        console.log("Valor inválido")
    }
}

fatorial(number)