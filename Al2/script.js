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

    function calcSalario1008(){
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

    function calcSalarioComBon1009(){
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

    function pedirLanche1038(){
        let codigo = Number(prompt("Digite qual lanhe você quer \n1 Cachorro Quente  R$4,00 \n2 Xsalada  R$4,50 \n"+
                                 "3 Xbacon  R$5,00 \n4 Torrada Simples  R$2,00 \n5 Refrigerante  R$1,50"));
        let quantidade = Number(prompt("Digite quantos lanches deseja"));
        let preco 

        if(codigo == 1){
            preco = 4;
        }else if(codigo == 2){
            preco = 4.5;
        }else if(codigo == 3){
            preco = 5;
        }else if(codigo == 4){
            preco = 2;
        }else if(codigo == 5){
            preco = 1.5;
        }else{
            alert("Opção invalida")
        }

        preco *= quantidade

        alert("O pedido com "+ quantidade +" lanches ficou R$" + preco.toFixed(2))

    }

    function calcTempViag(){
        let distancia = Number(prompt("Digite a distancia"));
        let distanciaX = 0;
        let distanciaY = 0;
        let tempo = 0;

        while(distanciaY - distanciaX < distancia){
            distanciaX += 1;
            distanciaY += 1.5;
            tempo++;
        }

        alert("Vai levar "+ tempo +" minutos");
    }

    function verfDDD1050(){
        let ddd = prompt("Digite o DDD desejado")
        let cidade

        let mensagem = "DDD Invalido"

        if(ddd == 61){
            cidade = "Brasilia"
            mensagem = ddd + " | " + cidade
        }else if(ddd == 71){
            cidade = "Salvador"
            mensagem = ddd + " | " + cidade
        }else if(ddd == 11){
            cidade = "São Paulo"
            mensagem = ddd + " | " + cidade
        }else if(ddd == 21){
            cidade = "Rio de Janeiro"
            mensagem = ddd + " | " + cidade
        }else if(ddd == 32){
            cidade = "Juiz de Fora"
            mensagem = ddd + " | " + cidade
        }else if(ddd == 19){
            cidade = "Campinas"
            mensagem = ddd + " | " + cidade
        }else if(ddd == 27){
            cidade = "Vitoria"
            mensagem = ddd + " | " + cidade
        }else if(ddd == 31){
            cidade = "Belo Horizonte"
            mensagem = ddd + " | " + cidade
        }

        alert(mensagem)
    }

    function quandrante1115(){
        let x = Number(prompt("Digite a cordenada de x"))
        let y = Number(prompt("Digite a cordenada de y"))
        
        if(x > 0 && y > 0){
            alert("primeiro")
        }else if(x > 0 && y < 0){
            alert("quarto")
        }else if(x < 0 && y < 0){
            alert("terceiro")
        }else if(x < 0 && y > 0){
            alert("segundo")
        }
        
        
    }

    function pum1142(){
        let n = Number(prompt("Digite 1 numero"))
        let i = 0
        let numS = 1
        let pum = ""
        while(i < n){

            pum +=  numS++ +" "+ numS++ + " "+ numS++ +" pum\n"
            
            i++
        }
        alert(pum)
    }