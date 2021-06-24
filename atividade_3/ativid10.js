//ler data 1
//ler data 2
//laço de data1 e data2
//se ano e bissexto ou nao
let readlineSync = require('readline-sync')
let d1;
let d2;
let ano = 0;
let ano1= 0;
d1 = parseFloat(readlineSync.question('informe a primeira data: '));
d2 = parseFloat(readlineSync.question('informe a segunda data : '));
for(i = d1; i <= d2 ; i++){
    if(i%4==0){
        ano1 = ano1+366;
    } else {
        ano= (d2%d1)*365;
    }
}
valor = ano +ano1;
console.log('Os dias entre '+d1+' e '+d2+', são :'+valor);
