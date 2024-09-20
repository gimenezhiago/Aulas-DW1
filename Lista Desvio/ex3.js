let l1 = 40
let l2 = 30
let l3 = 40

function ehTriangulo(lado1, lado2, lado3){
    diferenca = lado1 - lado2 - lado3
    if ((lado1 < lado2 + lado3 && lado2 < lado1 + lado3 && lado3 < lado1 + lado2)) {
        return true
    } else {
        return false
    }
}

function verificar(lado1, lado2, lado3) {
    if (ehTriangulo(l1,l2,l3) == true) {
        if (lado1 == lado2 && lado2 == lado3) {
            console.log("Triângulo Equilátero!!!")
        } else if (lado1 != lado2 && lado2 != lado3 && lado1 != lado3) {
            console.log("Triângulo Escaleno!!!")
        } else {
            console.log("Triângulo Isósceles!!!")
        }
    } else {
        console.log("Não é um Triângulo")
    }
}