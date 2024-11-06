let idades = [14, 22, 34, 20, 23, 55, 45];
//let nome

function pesquisar() {
    //console.log(idades)
    //nome = prompt("digite o seu nome")
    let numero = Number(prompt("qual numero vcoe quer pesquisar"));
    let indice = idades.indexOf(numero)

    if (indice != -1) {
        console.log("Numero encontrado na posição: " + indice);
    } else {
        console.log("Numero inexistente")
    }
}

function cadastrar() {
    //let numero = idades.push(Number(prompt("Digite sua idade: "))) ou urilizar do metodo abaixo

    let numero = Number(prompt("Digite sua idade: "))

    idades.push(numero)
}

function mostrarAr() {
    //document.getElementById("indice").innerHTML = idades
    let tabela = ""
    for (let i = 0; i < idades.length; i++) {
        tabela += "Aluno " + i + ": " + idades[i] + " <br> "
        document.getElementById("indice").innerHTML = tabela 

        //document.getElementById("indice").innerHTML += "Aluno " + i + ": " + idades[i] + " <br> " pode ser feito assim tbm
    }
}


//document.getElementById("indice").innerHTML = idades