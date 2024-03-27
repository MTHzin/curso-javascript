var agora = new Date()
var hora = agora.getHours()
var min = agora.getMinutes()

if(min < 10){
    console.log(`O horario agora é: ${hora}:${`0`+min} horas`)
}else{
    console.log(`O horario agora é: ${hora}:${min} horas`)
}

if(hora < 12){
    console.log(`Bom dia`)
}else if (hora > 12 & hora < 18){
    console.log(`Boa tarde`)
}else if(hora >=19){
    console.log(`Boa noite`)
}else if(hora <=5){
    console.log(`Boa Madrugada`)
}
