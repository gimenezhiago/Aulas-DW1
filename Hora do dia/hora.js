function carregar() {
    var msg = document.querySelector('#msg')
    var dia = new Date()
    var hora = dia.getHours()

    if (hora >= 0 && hora < 6) {
        //boa madrugada
        msg.innerHTML = `Agora são ${hora}horas, Boa Madrugada!!!`
    } else if (hora >= 6 && hora < 12) {
        //bom dia
        msg.innerHTML = `Agora são ${hora}horas, Bom Dia!!!`
    } else if (hora >= 12 && hora < 18) {
        // boa tarde
        msg.innerHTML = `Agora são ${hora}horas, Boa Tarde!!!`
    } else {
        // boa noite
        msg.innerHTML = `Agora são ${hora}horas, Boa Noite!!!`
    }
}