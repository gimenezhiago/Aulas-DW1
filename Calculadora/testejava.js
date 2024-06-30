var tn1 = document.querySelector('input#txn1')
var tn2 = document.querySelector('input#txn2')

var btn1 = document.querySelector('input#resmais')
btn1.addEventListener('click', somar)

var btn2 = document.querySelector('input#resmenos')
btn2.addEventListener('click', subtrair)

var btn3 = document.querySelector('input#resx')
btn3.addEventListener('click', multiplicar)

var btn4 = document.querySelector('input#resdiv')
btn4.addEventListener('click', dividir)

var res = document.querySelector('span')

function somar(){
    var n1 = parseFloat(tn1.value)
    var n2 = parseFloat(tn2.value)
    var conta = n1 + n2
    res.innerHTML = conta
}

function subtrair(){
    var n1 = parseFloat(tn1.value)
    var n2 = parseFloat(tn2.value)
    var conta = n1 - n2
    res.innerHTML = conta
}

function multiplicar(){
    var n1 = parseFloat(tn1.value)
    var n2 = parseFloat(tn2.value)
    var conta = n1 * n2
    res.innerHTML = conta
}

function dividir(){
    var n1 = parseFloat(tn1.value)
    var n2 = parseFloat(tn2.value)
    var conta = n1 / n2
    res.innerHTML = conta
}