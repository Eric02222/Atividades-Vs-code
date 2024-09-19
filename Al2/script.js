    function calcularImcOt(){
        let altura = document.getElementById("inpAltura").value;
        let peso = document.getElementById("inpPeso").value;
        
        let IMC = peso / (altura * altura);
        //let IMC = peso / (altura ** 2); 

        //alert("O seu imc é: "+ IMC.toFixed(2));

        //document.getElementById("inpResultado").value = "O seu imc é: "+ IMC.toFixed(2);


        document.getElementById("inpResultado").innerHTML = "O seu imc é: "+ IMC.toFixed(2);

    }

    function calcularIdadeCa() {
        let idadeCa = document.getElementById("idadeCa").value;

        let resultadoId = idadeCa * 7;

        if(resultadoId <= 45){
            document.getElementById("caResultado").innerHTML = "O cachorro não pode se aposentar, pois tem "+ resultadoId +" anos humanos";
        }else{
            document.getElementById("caResultado").innerHTML = "O cachorro pode se aposentar, pois tem "+ resultadoId +" anos humanos";
        }
        
    }

    function calcSalario(){
        let salario
        let idFuncionario = Number(prompt("Digite seu Id"))
        let horasTrab = Number(prompt("Digite a quantidade de horas trabalhadas"))
        let valorPorHora = Number(prompt("Digite o valor ganho por hora"))

        salario = horasTrab * valorPorHora;

        if(salario > 0){
            alert("Id: "+ idFuncionario +"\n Salario: R$"+ salario.toFixed(2))
        }else{
            alert("Opções invalidas!")
        }

    }

    function calcSalarioComBon(){
        let comissao = 0.15
        let nomeFun = prompt("Digite seu seu nome");
        let salario = Number(prompt("Digite o seu salario"));
        let numVendas = Number(prompt("Digite o numero de vendas"));

        let pagamento = (salario + (numVendas * comissao));

        if(pagamento > 0){
            alert("Funcionario: "+ nomeFun +"\nSalario: R$"+ pagamento.toFixed(2));
        }else{
            alert("Opções invalidas!");
        }

    }

    function pedirLanche(){
        let cachorroQ = 4, xSalada = 4.50, xBacon = 5, torradaSimp = 2, refrigerante = 1.50
        let escolhaLanc = prompt("Digite qual lanhe você quer \n1  Cachorro Quente  R$4,00 \n 2  Xsalada  R$4,50 \n"+
        "3 Xbacon R$5,00 \n3 Torrada Simples R$2,00 \n5 Refrigerante R$1,50");
        let quantidadeLanc = prompt("Digite quantos lanches deseja");

        if(escolhaLanc == 1){
            let lanche = cachorroQ * quantidadeLanc;
        }else if(escolhaLanc == 2){
            let lanche = cachorroQ * quantidadeLanc;
        }else if(escolhaLanc == 2){
            let lanche = cachorroQ * quantidadeLanc;
        }else if(escolhaLanc == 2){
            let lanche = cachorroQ * quantidadeLanc;
        }else if(escolhaLanc == 2){
            let lanche = cachorroQ * quantidadeLanc;
        }
    }