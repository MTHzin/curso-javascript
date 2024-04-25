let num = document.getElementById(`numero`).value



function gerarTabuada() {
    let numeroInput = document.getElementById("numero").value;
    select.innerHTML = '';
    if (numeroInput == ""){
        window.alert(`O campo de numero está vazio, coloque algo no lugar!`)
    }
    for (cont = 0; cont <= 10; cont++){
        let res = document.createElement(`option`)
        let select = document.getElementById("select");
        let numfinal = numeroInput * cont
        res.text = `${numeroInput} x ${cont} = ${numfinal}`
        select.appendChild(res);
        console.log(numfinal)
    }

}
