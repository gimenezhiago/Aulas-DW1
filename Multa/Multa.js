var btn = document.querySelector('button')
btn.addEventListener('click', () => {
    let via = Number(document.querySelector('#via').value)
    let veiculo = Number(document.querySelector('#veiculo').value)
    let res = document.querySelector('#res')
    let porcento = veiculo - via
    let multa = (porcento/100)* 100
    res.innerHTML = ''
    calcular(veiculo, via, res, porcento, multa)
}
)

function calcular(veiculo, via, res, porcento, multa) {
    if (veiculo < 0 || via < 0) return window.alert(`Insira valores válidos`)
    if (veiculo <= via) {
        res.innerHTML = `Você não excedeu a velocidade da via. Sua multa é de <b>R$ 0,00</b>`
        res.style.background = 'green'
    } else {
        res.style.background = 'red'
        if(porcento/100 < 0.2) {
            res.innerHTML = `Você excedeu a velocidade da via em ${multa}%. Sua multa é de <b>R$ 130,16</b>`
        } else if(porcento/100 >= 0.2 && porcento/100 < 0.5) {
            res.innerHTML = `Você excedeu a velocidade da via em ${multa}%. Sua multa é de <b>R$ 195,23</b>`
        } else if(porcento/100 >= 0.5){
            res.innerHTML = `Você excedeu a veocidade da via em ${multa}%. Sua multa é de <b>R$ 880,41</b>`
        }

    }
}
