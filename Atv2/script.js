let numeros = [];

function atv83() {
    let num;
    let n1 = document.getElementById("num1").value;
    let n2 = document.getElementById("num1").value;

    while (numeros.length < 25) {
        num = Math.ceil(Math.random() * 25);
        let cal;
        numeros.push(num)
    }


    
    console.log(numeros)
}


/*
23.9 >> 23 floor
23.9 >> 24 ceil
23.9 >> 24 round

23.2 >> 23 floor
23.2 >> 24 ceil
23.2 >> 23 round

*/