function calcularSeqNum(){
    let numeroComp = 0
    let numeroUs = prompt("Digite um numero");


    while(numeroComp <= numeroUs){
        alert(numeroComp)

        numeroComp++
    }
}

function calcAteZero(){
    let numeroUs = Number(prompt("Digite um numero"));
    let soma = 0;

    while(numeroUs != 0){
        soma = soma + numeroUs
        numeroUs = Number(prompt("Digite um numero")); 
    }
    alert(soma)

}

function calcMedia(){
    let media = 0;
    let atividadesCad = 1;
    let numAt = Number(prompt("Digite a quantidade de numeros q deseja ter a media"));

    for(atividadesCad; atividadesCad <= numAt; atividadesCad++) {
        let atv = Number(prompt("Digite um numero"));

        media += atv; //media = media + (nota * peso);
        
    }   
    media /= atividadesCad //media = media / pesoTotal
    alert(media)

}   


function calcFatorial(){
    let fatorial = Number(prompt("Digite a quantidade de numeros quq deseja calcular o sue fatorial"));
    let r = fatorial;
    let primeiroMult = fatorial -1;

    for(let i = primeiroMult; i > 1; i--) {

        r *= i; 
        
    }   
    alert(r)

}


function tabelaMult(){
    let numeroMult = Number(prompt("Digite o numero q deseja ver a tabela de multiplicação"));
    let tabuada = "";

    for(let i = 1; i < 10; i++){
        tabuada += numeroMult +" x "+ i + " = " + numeroMult * i +"\n"
    }
    alert(tabuada)
}

function numPares(){
    let num = prompt("Digite um numero")

    for(let numCad = 1; numCad < num; numCad++){
        if(numCad % 2 == 0){
            alert(numCad)
        }
    }
}

function contarNum(){
    let num = prompt("Digite um numero para ser mostar");
    let espaçamento = prompt("Escolha um espaçamento entre 1 a 10")
    let quantidadeCad = 0;

    while(quantidadeCad <= num){
        if(espaçamento == 1){
                alert(quantidadeCad)
        }
        else if(espaçamento == 2){
            if(quantidadeCad % 2 == 0){
                alert(quantidadeCad)
            }
        }else if(espaçamento == 3){
            if(quantidadeCad % 3 == 0){
                alert(quantidadeCad)
            }
        }else if(espaçamento == 4){
            if(quantidadeCad % 4 == 0){
                alert(quantidadeCad)
            }
        }else if(espaçamento == 5){
            if(quantidadeCad % 5 == 0){
                alert(quantidadeCad)
            }
        }else if(espaçamento == 6){
            if(quantidadeCad % 6 == 0){
                alert(quantidadeCad)
            }
        }else if(espaçamento == 7){
            if(quantidadeCad % 7 == 0){
                alert(quantidadeCad)
            }
        }else if(espaçamento == 8){
            if(quantidadeCad % 8 == 0){
                alert(quantidadeCad)
            }
        }else if(espaçamento == 9){
            if(quantidadeCad % 9 == 0){
                alert(quantidadeCad)
            }
        }else if(espaçamento == 10){
            if(quantidadeCad % 10 == 0){
                alert(quantidadeCad)
            }
            
        }
        quantidadeCad++
    }
}

function numImpares(){
    let num = prompt("Digite um numero")

    for(let numCad = 1; numCad < num; numCad++){
        if(numCad % 2 != 0){
            alert(numCad)
        }
    }
}

function verificarNumMult(){
    let num1 = prompt("Digite um numero");
    let num2 = prompt("Digite um numero para verificar se e multiplo do primeiro");

    if( num2 % num1 == 0){
        alert("O numero "+ num2 +" é multiplo de "+ num1)
    }else{
        alert("O numero "+ num2 +" não é multiplo de "+ num1)
    }
}

function verificarNumPrimo(){
    let num = Number(prompt("Digitem um numero"));

    for(let i = 0;i < num; i++){

            if(num % 2 == 0){
                alert("O numero é primo")
                
                return
            }else{          
                alert("O numero não é primo")

                num = Number(prompt("Digitem um numero"));

            }
         
    }

}





