let medida = Number(5)
let unidade = String("m")

function converter(u, med) {
    if (u == "m") {
        let res = med*100
        console.log(`A medida em centímetros é ${res}`)
    } else if (u == "mm") {
        let res = med/10
        console.log(`A medida em centímetros é ${res}`)
    } else if (u == "km") {
        let res = med*1000000
        console.log(`A medida em centímetros é ${res}`)
    } else {
        console.log("Essa unidade de medida não é aceita")
    }
}

converter(unidade, medida)