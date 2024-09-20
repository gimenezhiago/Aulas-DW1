idadeAtleta = 1

function calcular(a) {
    if (a >= 5 && a <= 7) {
        console.log("Infantil A")
    } else if (a >= 8 && a <= 10) {
        console.log("Infantil B")
    } if (a >= 11 && a <= 13) {
        console.log("Juvenil A")
    } if (a >= 14 && a <= 17) {
        console.log("Juvenil B")
    } if (a >= 18) {
        console.log("Adulto")
    }
}

calcular(idadeAtleta)