let bancoDeDados = [];

function add() {
    let user = document.getElementById("username").value;

    if (existe(user) == false) {
        bancoDeDados.push(user.toUpperCase());
        document.getElementById("username").value = null;
        document.getElementById("aviso").innerHTML = "Cadastro efetuado com sucesso";
    } else {
        document.getElementById("aviso").innerHTML = "Pessoa ja cadastrada";
        document.getElementById("username").value = null;
    }

    /*
    let existe = false;

        for (let item of bancoDeDados) {
            if(item.toUpperCase() == user.toUpperCase()){
                existe = true;
                break;
            }
        }
    
    if(existe == true){
        document.getElementById("aviso").innerHTML = "Pessoa ja cadastrada";
        document.getElementById("username").value = null;
    }else if (!user){
        document.getElementById("aviso").innerHTML = "Preencha Todos os Campos";
    }else{
        document.getElementById("aviso").innerHTML = "Cadastro efetuado com sucesso";
        document.getElementById("username").value = null;
        bancoDeDados.push(user);
    }
    */
}

function login() {
    let user = document.getElementById("user").value

    if (existe(user) == false) {
        document.getElementById("aviso").innerHTML = "Usuario não encontrado";
        document.getElementById("user").value = null;
    } else {
        document.getElementById("aviso").innerHTML = "Login efetuado com sucesso";
        document.getElementById("user").value = null;
    }

    /*if (!loUser) {
        document.getElementById("aviso").innerHTML = "Preencha Todos os Campos";
    } else {
        for (let pos = 0; pos < bancoDeDados.length; pos++) {
            if (bancoDeDados[pos].toUpperCase() == loUser.toUpperCase()) {
                document.getElementById("aviso").innerHTML = "Login efetuado com sucesso";
                document.getElementById("user").value = null;
                break;
            }else{
                document.getElementById("aviso").innerHTML = "Dadso Incorretos";
                document.getElementById("user").value = null;
                break;
            }
        }
    }*/
}

function edit() {
    let user = document.getElementById("editar").value;

    for (let pos = 0; pos < bancoDeDados.length; pos++) {
        if (bancoDeDados[pos].toUpperCase() == user.toUpperCase()) {
            bancoDeDados[pos] = prompt("Digite a alteração que deseja fazer a " + bancoDeDados).toUpperCase()
            document.getElementById("aviso").innerHTML = "Usuario editado";
            break;
        }
    }

    /*
    let edit = prompt("Digite a alteração que deseja fazer a " + bancoDeDados) ;
    
    if(existe(user) == false){
        document.getElementById("aviso").innerHTML = "Usuario não encontrado";
    }else{
        bancoDeDados[pos] = edit;
    }
        */

    document.getElementById("aviso").value = null;
}

function remove() {
    let user = document.getElementById("removerUs").value;
    let pos = bancoDeDados.indexOf(user.toUpperCase());

    if (existe(user) == false) {
        document.getElementById("aviso").innerHTML = "Usuario não encontrado";
    } else {
        bancoDeDados.splice(pos, 1);
        document.getElementById("aviso").innerHTML = "Usuario removido";
    }
    document.getElementById("removerUs").value = null;
}

function existe(user) {
    let pos = bancoDeDados.indexOf(user.toUpperCase());
    if(pos == -1){
        return false;
    }else{
        return true;
    }
}