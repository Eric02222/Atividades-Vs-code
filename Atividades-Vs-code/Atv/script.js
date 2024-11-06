let lista = [];

function adNomes() {
    let nomes = document.getElementById("listaNo").value;
    let existe = false;
    for (let item of lista) {
        if (item.toLowerCase() == nomes.toLowerCase()) {
            existe = true;
            break;
        }
    }
    if (existe == false) {
        lista.push(nomes.toUpperCase());
        document.getElementById("mostrarInf").innerHTML = lista;
    } else {
        alert("Pessoa ja cadastrada");
    }
}

function editar() {
    let nomes = document.getElementById("listaNo").value;
    for (let pos = 0; pos < lista.length; pos++) {
        if (lista[pos].toLowerCase() == nomes.toLowerCase()) {
            lista[pos] = prompt("Digite a alteração que deseja fazer a: " + lista).toUpperCase();
            break;
        }
    }
    document.getElementById("mostrarInf").innerHTML = lista;
    
}


function remover() {
    let nomes = document.getElementById("listaNo").value;
    let posicao = -1;

    for (let item of lista) {
        if (item.toLowerCase() == nomes.toLowerCase()) {
            posicao = lista.indexOf(item);
            break;
        }
    }

    if (posicao == -1) {
        alert("Pessoa não encontrada");
    } else {
        lista.splice(posicao, 1);
        document.getElementById("mostrarInf").innerHTML = lista;
    }
}