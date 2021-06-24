//ler o saldo medio
//condiçao de saldo
let readlineSync = require('readline-sync')
let medio;
let valor;
medio = parseFloat(readlineSync.question('informe saldo medio: '));
if(medio >= "0"  && medio <= "200"){
    console.log("Nenhum credito")
}else if(medio >= "201" && medio <= "400"){
    valor = medio + (medio*0.20)
    console.log("saldo medio: "+medio+", valor de credito: "+valor)
} else if(medio >= "401" && medio <= "600"){
    valor = medio + (medio*0.30)
    console.log("saldo medio: "+medio+", valor de credito: "+valor)
} else if(medio == "601"){
    valor = medio + (medio*0.40)
    console.log("saldo medio: "+medio+", valor de credito: "+valor)
}