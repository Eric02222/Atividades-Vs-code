let items = []; //para cria uma array, crie uma variavel = []

function addLista() {
    let produto = document.getElementById("addLi").value;
    let posicao = items.indexOf(produto);
    
    if (posicao == -1) {
        items.push(produto);
        document.getElementById("lista").innerHTML = items;
    } else {
        alert("item ja cadastrado")
    }
    
}

function remove() {
    let produto = document.getElementById("addLi").value;
    let posicao = items.indexOf(produto);
    if(posicao == -1){
        alert("Item não encontrado")
    }else{
        items.splice(posicao, 1)
        document.getElementById("lista").innerHTML = items;
    }
    
}
