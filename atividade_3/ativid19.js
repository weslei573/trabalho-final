//ler um numero
// ser e positivo
// ser e negativo
let readlineSync = require('readline-sync')
let po=0;
let ne=0;
let n=0;
let num;
let soma = 0;
n = parseFloat(readlineSync.question('informe a Quantidade de valores: '));
for (i=1; i <= n; i++){
    num = parseFloat(readlineSync.question('informe a numero: '));
    soma = soma + num;
    if(num > 0){
        po = po + 1;
    } else {
        ne = ne + 1;
    }
    
}
let media = soma/n;
let perpo = (100/n)*po;
let perne = (100/n)*ne;
console.log('A media aritmetica e: '+media.toFixed(2));
console.log('A quantidade de valores positivos: '+po);
console.log('A quantidade de valores negativos: '+ne);
console.log('A percentual de valores positivos: '+perpo.toFixed(1));
console.log('A percentual de valores negativos: '+perne.toFixed(1));