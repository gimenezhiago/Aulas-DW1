let l1 = 10
let l2 = 20
let l3 = 15

if (ehTriangulo(l1,l2,l3)){
    console.log(`Os lados ${l1}, ${l2} e ${l3} formam um triângulo`)
}else {
    console.log(`Os lados ${l1}, ${l2} e ${l3} NÃO formam um triângulo`)
}

function ehTriangulo(lado1, lado2, lado3){
    diferenca = lado1 - lado2 - lado3
    if ((lado1 < lado2 + lado3 && lado2 < lado1 + lado3 && lado3 < lado1 + lado2)) {
        return true
    } else {
        return false
    }
}




