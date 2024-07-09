function carregar() {
    var msg = document.querySelector('#msg')
    var img = document.querySelector('img')
    var agora = new Date()
    var hora = agora.getHours()

    if (hora == 0 && hora < 6) {
        //boa madrugada
        msg.innerHTML = `Agora são ${hora} horas, <strong>Boa Madrugada!!!</strong>`
        img.src = 'https://th.bing.com/th/id/OIP.kds5nTjt1Swt8v3vWiS8YwHaFj?w=248&h=186&c=7&r=0&o=5&pid=1.7'
        document.body.style.background = '#619b8a'
    } else if (hora >= 6 && hora < 12) {
        //bom dia
        msg.innerHTML = `Agora são ${hora} horas, <strong>Bom Dia!!!</strong>`
        img.src = 'https://th.bing.com/th/id/R.bebf3f12ce54a84ace12533c038d1985?rik=qgZDj6FR3DnoGw&riu=http%3a%2f%2fwww.multarte.com.br%2fwp-content%2fuploads%2f2015%2f09%2fbom-dia1.jpg&ehk=kTTu9nUIEOBjYXprj9ucjkKhmb4K8NK%2bPCxecldjeI0%3d&risl=&pid=ImgRaw&r=0'
        document.body.style.background = '#fcca46'
    } else if (hora >= 12 && hora < 18) {
        // boa tarde
        msg.innerHTML = `Agora são ${hora} horas, <strong>Boa Tarde!!!</strong>`
        img.src = 'https://th.bing.com/th/id/OIP.M9rng1MHWx7TFwaDqmmG7wHaE8?rs=1&pid=ImgDetMain'
        document.body.style.background = '#fe7f2d'
    } else {
        // boa noite
        msg.innerHTML = `Agora são ${hora} horas, <strong>Boa Noite!!!</strong>`
        img.src = 'https://th.bing.com/th/id/OIP.bq9ssfygOwo804bxZiFjEAHaEo?w=278&h=180&c=7&r=0&o=5&pid=1.7'
        document.body.style.background = '#233d4d'
    }
}