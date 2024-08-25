var btn = document.querySelector("button")
btn.addEventListener("click", calcular)

function calcular() {
    let capital = Number(document.querySelector("#capital").value)
    let juros = Number(document.querySelector("#juros").value)
    let periodo = Number(document.querySelector("#periodo").value)
    let res = document.querySelector("div#res")
    res.innerHTML += ''
    res.innerHTML += `O capital é ${capital}, a taxa de juros é ${juros}% e o periodo em meses é ${periodo} </br>`
    juros = juros/100
    let montante = capital * (1 + juros)**periodo
    res.innerHTML += `O montante é de R$ ${montante.toFixed(2)}`
}

