function contagem(){
    let ini = document.getElementById(`inicio`)
    let fim = document.getElementById(`fim`)
    let saltos = document.getElementById(`passos`)
    let res = document.getElementById(`result`)

    if (ini.value.length == 0 || fim.value.length == 0 || saltos == 0){
        window.alert(`ERRO. verifique os dados`)
    }else {
        res.innerHTML = `Contando: <br>`
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(saltos.value)
        if(i<f){
            for (var c = i; c <= f; c+=p){
                res.innerHTML += `👉${c}`
            }
        res.innerHTML += `🏁`
        }else{
            for (var c = i; c >= f; c-=p)
            res.innerHTML += `👉${c}`
            res.innerHTML += `🏁`
        }


    }
}

