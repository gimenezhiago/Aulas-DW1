let ano = 1889

function bisexto(a) {
    if (a % 400 == 0 || a % 4 == 0 && a % 100 == 0) {
        console.log(`O ano ${a} é bissexto`)
    } else {
        console.log(`O ano ${a} não é bissexto`)
    }
}

bisexto(ano)