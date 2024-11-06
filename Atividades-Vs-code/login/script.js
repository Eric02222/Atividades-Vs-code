let bancoDeDados = [];

function add() {
    let user = {
        username: document.getElementById("username").value.toUpperCase(),
        password: document.getElementById("senha").value
    }

    if (existe(user.username) == false) {
        bancoDeDados.push(user);
        document.getElementById("aviso").innerHTML = "Cadastro efetuado com sucesso";
    } else {
        document.getElementById("aviso").innerHTML = "Pessoa ja cadastrada";
    }

    document.getElementById("username").value = null;
    document.getElementById("senha").value = null;

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
    let usuario = document.getElementById("user").value.toUpperCase();
    let senha = document.getElementById("pass").value;

    if (authentica(usuario, senha) == false) {
        document.getElementById("aviso").innerHTML = "Usuario ou Senha Incorreta";
    } else {
        document.getElementById("aviso").innerHTML = "Login efetuado com sucesso";
    }
    document.getElementById("user").value = null;
    document.getElementById("pass").value = null;

    /*if (!user) {
        document.getElementById("aviso").innerHTML = "Preencha Todos os Campos";
    } else {
        for (let pos = 0; pos < bancoDeDados.length; pos++) {
            if (bancoDeDados[pos].toUpperCase() == user.toUpperCase()) {
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

    document.getElementById("editar").value = null;
}

function remove() {
    let user = document.getElementById("removerUs").value.toUpperCase();
    let pos = indexOfByEr(user);

    /*existe(nome de acordo q foi declarado na função) 
    EX:
    let lo = receber algoalgo
    existe(lo)
    */

    if (pos != -1) {
        bancoDeDados.splice(pos, 1);
        document.getElementById("aviso").innerHTML = "Usuario removido";
    } else {
        document.getElementById("aviso").innerHTML = "Usuario não encontrado";
    }
    document.getElementById("removerUs").value = null;
}

function existe(user) {
    for (let usuario of bancoDeDados) {
        if (usuario.username == user) {
            return true;
        }
    }
    return false;
    /*
    let pos = bancoDeDados(user);
    let posPass = bancoDeDados(password);
    if (pos == -1 || posPass) {
        return false;
    } else {
        return true;
    }
    */
}

function authentica(username, password) {
    for (let usuario of bancoDeDados) {
        if (usuario.username == username && usuario.password == password) {
            return true;
        }
    }
    return false;
}

function indexOfByEr(username) {
    for (let usuario of bancoDeDados) {
        if (usuario.username == username) {
            return bancoDeDados.indexOf(usuario);
        }
    }
    return -1;
}