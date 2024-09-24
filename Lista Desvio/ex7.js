let valorAlcool = 3.14
let valorGasolina = 5.67 

function calcular(a, g) {
    if (a <= g * 0,7) {
        return true
    } else {
        return false
    }
}

console.log(calcular(valorAlcool, valorGasolina))