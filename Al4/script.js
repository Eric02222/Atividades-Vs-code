function calcularSeqNum() {
    let numeroComp = 0
    let numeroUs = Number(prompt("Digite um numero"));


    while (numeroComp <= numeroUs) {
        alert(numeroComp)

        numeroComp++
    }
}

function calcAteZero() {
    let numeroUs = Number(prompt("Digite um numero"));
    let soma = 0;

    while (numeroUs != 0) {
        soma = soma + numeroUs
        numeroUs = Number(prompt("Digite um numero"));
    }
    alert(soma)

}

function calcMedia() {
    let media = 0;
    let atividadesCad = 1;
    let numAt = Number(prompt("Digite a quantidade de numeros q deseja ter a media"));

    for (atividadesCad; atividadesCad <= numAt; atividadesCad++) {
        let atv = Number(prompt("Digite um numero"));

        media += atv; //media = media + (nota * peso);

    }
    media /= atividadesCad //media = media / pesoTotal
    alert(media)

}


function calcFatorial() {
    let fatorial = Number(prompt("Digite a quantidade de numeros quq deseja calcular o sue fatorial"));
    let r = fatorial;
    let primeiroMult = fatorial - 1;

    for (let i = primeiroMult; i > 1; i--) {

        r *= i;

    }
    alert(r)

}


function tabelaMult() {
    let numeroMult = Number(prompt("Digite o numero q deseja ver a tabela de multiplicação"));
    let tabuada = "";

    for (let i = 1; i < 10; i++) {
        tabuada += numeroMult + " x " + i + " = " + (numeroMult * i) + "\n"
    }
    alert(tabuada)
}

function numPares() {
    let num = Number(prompt("Digite um numero"));
    let tabela = ""

    for (let numCad = 1; numCad <= num; numCad++) {
        if (numCad % 2 == 0) {
            tabela += numCad + " \n"
        }
    }
    alert(tabela)
}

function contarNum() {
    let num = Number(prompt("Digite um numero"));
    let espaçamento = Number(prompt("Escolha um espaçamento entre 1 a 10"));
    let numCad = 1;

    while (numCad <= num) {
        alert(numCad)
        numCad += espaçamento
    }

}

function numImpares() {
    let num = Number(prompt("Digite um numero"));
    let tabela = ""
    for (let numCad = 1; numCad <= num; numCad++) {
        if (numCad % 2 != 0) {
            tabela += numCad + " \n"
        }
    }
    alert(tabela)
}

function verificarNumMult() {
    let num1 = Number(prompt("Digite um numero"));
    let num2 = Number(prompt("Digite um possivel multiplo"));

    if (num2 % num1 == 0) {
        alert(num2 + " é multiplo de " + num1)
    } else {
        alert(num2 + " não é multiplo de " + num1)
    }
}

function verificarNumPrimo() {
    let num = Number(prompt("Digitem um numero"));
    let qtdDiv = 0;

    for (let ant = 1; ant <= num; ant++) {

        if (num % ant == 0) {
            qtdDiv++
        }

    }

    if (qtdDiv == 2) {
        alert(num + " é primo")
    } else {
        alert(num + " não e primo")
    }

}

function verificarPrimo(i) {
    let qtdDiv = 0;

    for (let ant = 1; ant <= i; ant++) {
        if (i % ant == 0) {
            qtdDiv++;
        }
    }

    if (qtdDiv == 2) {
        return true;
    } else {
        return false;
    }
}

function mostrarPrimos() {
    let n = Number(prompt("Digitem um numero"));
    let tabela = "";


    for (let i = 1; i <= n; i++) {
        if (verificarPrimo(i) == true) {
            tabela += i + " é primo \n"
        } else {
            tabela += i + " não é primo \n"
        }
    }
    alert(tabela);
}





