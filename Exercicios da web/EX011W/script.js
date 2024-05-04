resultado = document.getElementById(resultado).innerHTML
function calcular(){
    let nome = window.prompt("Qual o nome do aluno")
    let n1 = Number(window.prompt("Qual a primeira nota de " + nome))
    let n2 = Number(window.prompt("Qual a segunda nota de " + nome))
    let media = (n1+n2)/2
    resultado.innerHTML += `<p>Calculando a média final de <mark>${nome}</mark>.</p>`
    resultado.innerHTML += `<p>As notas obtidas foram <mark>${n1} e ${n2}</mark>.</p>`
    resultado.innerHTML += `<p>A média final será: <mark>${media}</mark>.</p>`
    if(media < 6){
        resultado.innerHTML += `<p>A mensagem que temos é: <span style="color: red;"><bold>Estude um pouco mais</bold></span></p>`
    }else{
        resultado.innerHTML += `<p>A mensagem que temos é: <span style="color: green;"><bold>Meus parabéns!!</bold></span></p>`
    }

}
