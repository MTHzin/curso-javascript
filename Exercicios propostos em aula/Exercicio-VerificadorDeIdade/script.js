function verificar(){
    var data = new Date()
    anoatual = data.getFullYear()
    var ano = Number(document.getElementById(`nascimento`).value)
    var idade = anoatual - ano
    var genero = document.getElementsByName('radsex')


    if(idade < 12 & genero[0].checked){
        genero = 'Homem'
        document.getElementById(`pimagem`).innerText = `Detectamos ${genero} tendo ${idade} anos`
        document.getElementById(`imagem`).src = `images/criança-m.png`
    }else if (idade < 12 & genero[1].checked){
        genero = 'Mulher'
        document.getElementById(`pimagem`).innerText = `Detectamos ${genero} tendo ${idade} anos`
        document.getElementById(`imagem`).src = `images/criança-f.png`
    }else if (idade < 22 & genero[0].checked){
        genero = 'Homem'
        document.getElementById(`pimagem`).innerText = `Detectamos ${genero} tendo ${idade} anos`
        document.getElementById(`imagem`).src = `images/jovem-m.png`
    }else if (idade < 22 & genero[1].checked){
        genero = 'Mulher'
        document.getElementById(`pimagem`).innerText = `Detectamos ${genero} tendo ${idade} anos`
        document.getElementById(`imagem`).src = `images/jovem-f.png`
    }else if (idade < 48 & genero[0].checked){
        genero = 'Homem'
        document.getElementById(`pimagem`).innerText = `Detectamos ${genero} tendo ${idade} anos`
        document.getElementById(`imagem`).src = `images/adulto-m.png`
    }else if (idade < 48 & genero[1].checked){
        genero = 'Mulher'
        document.getElementById(`pimagem`).innerText = `Detectamos ${genero} tendo ${idade} anos`
        document.getElementById(`imagem`).src = `images/adulto-f.png`
    }else if (idade < 110 & genero[0].checked){
        genero = 'Homem'
        document.getElementById(`pimagem`).innerText = `Detectamos ${genero} tendo ${idade} anos`
        document.getElementById(`imagem`).src = `images/idoso-m.png`
    }else if (idade < 110 & genero[1].checked){
        genero = 'Mulher'
        document.getElementById(`pimagem`).innerText = `Detectamos ${genero} tendo ${idade} anos`
        document.getElementById(`imagem`).src = `images/idoso-f.png`
    }
}

