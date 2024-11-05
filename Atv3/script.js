let numSecreto = [];

function modPvp() {
    window.location = "pvp.html";
}

function modPve() {
    window.location = "pve.html"
}

function pvp() {
    let numSecreto = Number(prompt("Digite o numero o numero secreto"));
    let advNum = Number(prompt("Tente adivinhar o numero secreto"));
    let msg = "Voce Perdeu!"

    for (let tent = 1; tent <= 3; tent++) {
        if (advNum < numSecreto) {
            advNum = Number(prompt("Digite um numero maior"));
        } else if (advNum > numSecreto) {
            advNum = Number(prompt("Digite um numero menor"));
        } else if (advNum == numSecreto) {
            msg = "Parabens vocé acertou!";
            break
        }
    }
    alert(msg);
}

function facil() {
    numSecreto.splice(null);
    numSecreto.push(Math.ceil(Math.random() * 10))
}

function medio() {
    numSecreto.splice(null);
    numSecreto.push(Math.ceil(Math.random() * 50))

}

function dificil() {
    numSecreto.splice(null);
    numSecreto.push(Math.ceil(Math.random() * 100))

}

function pve() {
    let num = Number(prompt("Digite um numero"))
    let msg = "Voce perdeu!!!"

    for (let i = 0; i < 3; i++) {
       if(num < numSecreto[0]){
        num = Number(prompt("Digite um numero maior"));
       }else if(num > numSecreto[0]){
        num = Number(prompt("Digite um numero menor"));
       }else if(num == numSecreto[0]){
        msg = "Parabens Voce Acertou!!!"
       }
    }

    alert(msg)
}