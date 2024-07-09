var btn1 = document.querySelector('#btn')
btn1.addEventListener('click', verificar)

function verificar() {
    var ano = parseInt(document.querySelector('#ano').value)
    var agora = new Date()
    var anoAtual = agora.getFullYear()
    var escrita = document.querySelector('#escrita')

    var res = anoAtual - ano

    switch (escrita) {
        case res == 0 && res <= 12:
        escrita.innerHTML = 'oi'
        break
        case res > 12 && res <= 18:
        escrita.innerHTML = 'oii'
        break
        case res > 18 && res <= 60:
        escrita.innerHTML = 'oiii'
        break
        case res > 60 && res <= 100:
        escrita.innerHTML = 'oiiii'
        break 
        case res > 100:
        escrita.innerHTML = 'ja ers pra estar morto'
        break 
    }
    

}