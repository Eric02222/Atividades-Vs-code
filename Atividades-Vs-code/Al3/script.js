let items = []; //para cria uma array, crie uma variavel = []

function addLista() {
    let produto = document.getElementById("addLi").value;
    let existe = false;
    for (let item of items) {
        if (item.toUpperCase() == produto.toUpperCase()) {
            existe = true;
            break;
        }
    }

    if (existe == false) {
        items.push(produto);
        document.getElementById("lista").innerHTML = items;
    } else {
        alert("item ja cadastrado");
    }

    /*
    let posicao = items.indexOf(produto.toUpperCase());

    if (posicao == -1) {
        items.push(produto.toUpperCase());
        document.getElementById("lista").innerHTML = items;

    } else {
        alert("item ja cadastrado");
    }
    */

}

function remove() {
    let produto = document.getElementById("addLi").value;
    let posicao = -1;

    for (let item of items) {
        if (item.toUpperCase() == produto.toUpperCase()) {
            posicao = items.indexOf(item);
            break;
        }
    }


    if (posicao == -1) {
        alert("Item não encontrado")
    } else {
        items.splice(posicao, 1)
        document.getElementById("lista").innerHTML = items;
    }


    /*
    let posicao = items.indexOf(produto.toUpperCase());
    
    if (posicao == -1) {
        alert("Item não encontrado")
    } else {
        items.splice(posicao, 1)
        document.getElementById("lista").innerHTML = items;
    }
    */

}

function editar() {
    let produto = document.getElementById("addLi").value;
    for (let item of items) {
        if (item.toUpperCase() == produto.toUpperCase()) {
            item = prompt("DIgite um novo nome para: " + item)
            break;
        }   
    }

    document.getElementById("lista").innerHTML = items;
    /*if (posicao == -1) {
        alert("Item não encontrado")
    } else {
        items.splice(posicao, 1, edit)
        document.getElementById("lista").innerHTML = items;
    }*/
}