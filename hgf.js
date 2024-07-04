var idade = 12

if (idade < 16) {
    console.log(`n vota`)
} else if (idade < 18 || idade > 65) {
        console.log(`opcional`)
} else {
    console.log(`obrigatorio`)
}

var agora = new Date()
var hora = agora.getHours()

if (hora < 12) {
    console.log(`bom dia`)
} else if (hora <= 18){
    console.log(`bom tarde`)
} else {
    console.log(`bom noite`)
}

var agora = new Date()
var diaSem =  agora.getDay()
switch(diaSem) {
    case 0:
        Domigno
        break
    case 1:
        segunda
        break
    default:
        erro
        break
}