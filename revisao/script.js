
function pesca() {
    let pesoPm = Number(prompt("Digite o peso permitido para pesca de peixes"));
    let peso = Number(prompt("Digite o peso pescado"));

    if (peso > pesoPm) {
        let excesso = peso - pesoPm;
        let multa = excesso * 4;

        alert("A peca excedeu o peso permitido em " + excesso + "Kg \nEntão tera uma multa de R$" + multa);
    } else {
        alert("Peso da pesca esta dentro das normas, pode passar.");
    }
}

//digitar ano de nacimento e responder se e maior ou menor de idade ou vai ficar maior de idade neste ano

function vfIdade() {
    let nome = prompt("Digite o seu nome");
    alert("Bem vindo(a) " + nome)

    let ano = Number(prompt("Digite o ano que voce nasceu: "));
    let idade;



    idade = 2024 - ano;

    if (idade < 18) {
        alert("Você tem " + idade + " entao e menor de idade")
    } else if (idade > 18) {
        alert("Você tem " + idade + " entao e maior de idade")
    } else {
        alert(nome + ", esse e o ano que voce completa 18 anos")
    }


}

function contagem() {
    let num = Number(prompt("Digite um numero"))
    let tabela = "";
    for (let i = 0; i < num; i += 3) {
        tabela += i + "\n";
    }
    alert(tabela);
}

function arrays() {
    let caixaDeBombons = [];
    let quantidade = prompt("quantos bombons deseja inserir na caixa");

    for (let i = 0; i < quantidade; i++) {
        let nomeBombom = prompt("Digite o nome do bombom que deseja");
        caixaDeBombons.push(nomeBombom);
    }
    alert(caixaDeBombons);

    let exclusao = prompt("Digite o nome do bombom que deseja excluir")
    let pos = caixaDeBombons.indexOf(exclusao);

    if (pos == -1) {
        alert("ete bombom ja foi comido")
    } else {
        caixaDeBombons.splice(pos, 1)
    }
    alert(caixaDeBombons);

    let tamanhoAtual = caixaDeBombons.length;
    alert("agora a caixa de bombom possui " + tamanhoAtual + " bombons");

}