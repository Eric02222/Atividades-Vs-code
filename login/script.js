let bancoDeDados = [];

function add() {
    let user = document.getElementById("username").value;
    let pos = bancoDeDados.indexOf(user.toLowerCase());

    if (pos == -1){
        bancoDeDados.push(user.toLowerCase());
        document.getElementById("username").value = null;
        document.getElementById("aviso").innerHTML = "Cadastro efetuado com sucesso";
    }else{
        document.getElementById("aviso").innerHTML = "Pessoa ja cadastrada";
        document.getElementById("username").value = null;
    }

    /*
    let existe = false;

        for (let item of bancoDeDados) {
            if(item.toLowerCase() == user.toLowerCase()){
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
    let loUser = document.getElementById("user").value
    let pos = bancoDeDados.indexOf(loUser.toLowerCase());

    if (pos == -1){
        document.getElementById("aviso").innerHTML = "Usuario não encontrado";
        document.getElementById("user").value = null;
    }else{
        document.getElementById("aviso").innerHTML = "Login efetuado ocm sucesso";
        document.getElementById("user").value = null;
    }

    /*if (!loUser) {
        document.getElementById("aviso").innerHTML = "Preencha Todos os Campos";
    } else {
        for (let pos = 0; pos < bancoDeDados.length; pos++) {
            if (bancoDeDados[pos].toLowerCase() == loUser.toLowerCase()) {
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