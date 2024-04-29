let vetorNumeros = [];

function numeros(){
    let camposelect = document.getElementById(`select`);
    let campo = document.getElementById(`numero`);
    let num = parseInt(campo.value)
    if(num > 100){
        window.alert(`Esse numero já está no vetor, ou você digitou um numero invalido`);
    } else if (vetorNumeros.includes(num)){
        window.alert(`Esse numero já está no vetor, ou você digitou um numero invalido`);
        console.log(vetorNumeros);
    }else{
        let res = document.createElement(`option`)
        res.text = `Valor adicionado: ${num}`
        camposelect.appendChild(res)
        res = "";
        vetorNumeros.push(num);
    }
    campo.value = ""
    campo.focus()
}

function resultado(){
    let maior = Math.max(...vetorNumeros);
    let menor = Math.min(...vetorNumeros);
    let soma = 0;
    let media = 0;
    for (let i = 0; i< vetorNumeros.length; i++){
        soma += vetorNumeros[i];
        media = soma / vetorNumeros.length;
    }
    let div = document.getElementById(`container`);
    div.style.height = 500 + 'px';
    let todosdovetor = `<p>Ao todo, temos ${vetorNumeros.length} números cadastrados</p>
    <br>`
    let maiordovetor = `<p>O maior valor informado foi: ${maior}</p> <br>`
    let menordovetor = `<p>O menor valor informado foi: ${menor}</p> <br>`
    let somadovetor = `<p>A soma de todos os valores deu: ${soma}</p> <br>`
    let mediadovetor = `<p>A media de todos os valores deu: ${media}</p> <br>`
    document.getElementById(`resultado`).innerHTML = `${todosdovetor} ${maiordovetor} ${menordovetor} ${somadovetor}${mediadovetor}`
}
