//le numero em reais
//ler prestações 
//calcula a valor de cada prestação  
//condiçao se e (x ==12 && x <24), (x >= 24), (x >= 32)
//imprime a valor na tela
let readlineSync = require('readline-sync')
let valor;
let prestação;
let total;
let juro
valor = parseFloat(readlineSync.question('informe o valor de reais da comprar: '));
prestação = parseFloat(readlineSync.question('informe a prestaçoes: '));
if(prestação == 12 && prestação < 24 ){
    total = (valor /prestação)
    console.log("Seram "+prestação+" prestacao, com o valor de "+total.toFixed(2))
} else if(prestação >= 24){
    total = (valor / prestação)
    juro = (total * 0.10)+total
    console.log("Seram "+prestação+" prestacao, com o valor de "+juro.toFixed(2))
} else if(prestação >= 32){
    total = (valor / prestação)
    juro = (total * 0.15)+total
    console.log("Seram "+prestação+" prestacao, com o valor de "+juro.toFixed(2))
}

