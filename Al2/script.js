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