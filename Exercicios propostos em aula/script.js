data = new Date()
hora = data.getHours()
var body = document.body 

document.getElementById(`phora`).innerText = `Agora são ${hora} horas.`

if(hora < 12){
    body.style.background = `green`
    
}else if (hora < 18 & hora > 12){
    body.style.background = `red` 
}else{
    body.style.background = `black` 
}