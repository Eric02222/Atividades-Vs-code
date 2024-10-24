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