function carregar() {
    var msg = document.querySelector('#msg')
    var img = document.querySelector('img')
    var agora = new Date()
    var hora = agora.getHours()

    if (hora == 0 && hora < 6) {
        //boa madrugada
        msg.innerHTML = `Agora são ${hora}horas, Boa Madrugada!!!`
        document.body.style.background = 'red'
    } else if (hora >= 6 && hora < 12) {
        //bom dia
        msg.innerHTML = `Agora são ${hora}horas, Bom Dia!!!`
        document.body.style.background = 'red'
    } else if (hora >= 12 && hora < 18) {
        // boa tarde
        msg.innerHTML = `Agora são ${hora}horas, Boa Tarde!!!`
        document.body.style.background = 'red'
    } else {
        // boa noite
        msg.innerHTML = `Agora são ${hora}horas, Boa Noite!!!`
        document.body.style.background = 'red'
        img.src = ''
    }
}