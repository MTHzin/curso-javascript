data = new Date()
hora = data.getHours()
var body = document.body

document.getElementById(`phora`).innerText = `Agora são ${hora} horas.`

if(hora <= 11){
    body.style.background = `#fffbe8`
    body.style.color = `black`
    document.getElementById(`fotododia`).src = `images/manha.png`
}else if (hora < 18 & hora >= 12){
    body.style.background = `##fff868` 
    document.getElementById(`fotododia`).src = `images/tarde.png`
}else{
    body.style.background = `#1c203b` 
    document.getElementById(`fotododia`).src = `images/noite.png`
}