let idade = 16
let peso = 71

function gotas(mg) {
    let ml = mg/500
    let gt = ml*20
    return gt
}

function calcular(i, p) {
    if (i >= 12) {
        if (p >= 60) {
            mg = 1000
            console.log(`A quantidade de gotas ${gotas(mg)}`)
        } else {
            console.log(`A quantidade de gotas ${gotas(mg)}`)
        }
    } else {
        if (p >= 5 && p <= 9) {
            mg = 125
            console.log(`A quantidade de gotas ${gotas(mg)}`)
        } else if (p >= 9.1 && p <= 16) {
            mg = 250
            console.log(`A quantidade de gotas ${gotas(mg)}`)
        } else if (p >= 16.1 && p <= 24) {
            mg = 500
            console.log(`A quantidade de gotas ${gotas(mg)}`)
        } else if (p > 24) {
            mg = 750
            console.log(`A quantidade de gotas ${gotas(mg)}`)
        } else { 
            mg = 0
            console.log(`A quantidade de gotas ${gotas(mg)}`)
        }
    }
}

calcular(idade, peso)