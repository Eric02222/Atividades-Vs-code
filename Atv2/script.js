let numeros = [];
let n1;
let n2;

function atv83() {
    let num;

    for (let i = 0; i < 25; i++) {
        num = Math.ceil(Math.random() * 25);
        numeros.push(num)
    }

    /*while (numeros.length < 25) {
        num = Math.ceil(Math.random() * 25);
        numeros.push(num)
    }*/

    document.getElementById("resultado").innerHTML = "Array gerada com sucesso <br>"

    console.log(numeros)
}

function atv83b() {
    do {
        n1 = Number(prompt("Digite um numero maior que 0:"));

    } while (n1 < 0 || n1 > 24 || !n1)

    do {
        n2 = Number(prompt("Digite outro numero maior que 0:"));

    } while (n2 < 0 || n2 > 24 || !n2)

    soma = numeros[n1] + numeros[n2]

    console.log(soma)
    document.getElementById("resultado").innerHTML += "Soma de " + numeros[n1] + " + " + numeros[n2] + " = " + soma
}

function mostrarArray() {

    document.getElementById("resultado").innerHTML = '<h2>Lançamentos dos dados:</h2>'
    for (let i = 0; i < numeros.length; i++) {
        document.getElementById("resultado").innerHTML += "Dados: " + numeros[i] + "<br>"
    }

}


/*
23.9 >> 23 floor
23.9 >> 24 ceil
23.9 >> 24 round

23.2 >> 23 floor
23.2 >> 24 ceil
23.2 >> 23 round

*/