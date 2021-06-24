// ler uma quantidade desconhicida
// ser entao 0-25 26-50 51-75 76-100
let readlineSync = require('readline-sync')
let n;
let n1 = 0;
let n2 = 0;
let n3 = 0;
let n4 = 0;
let numero;
let i = 0;
n = parseFloat(readlineSync.question('informe um quantidade: '));
do {
    numero = parseFloat(readlineSync.question('Digite um valor: '));
    while(numero <=0){
        console.log('numero invalido. insira um valor superior a (0)');
        numero = parseFloat(readlineSync.question('informe o valor: '));
    }  
    if(numero >= 0 && numero <= 25){
        n1 = n1 + 1;
    } else
    if(numero >=26 && numero <= 50){
        n2 = n2 + 1;
    } else
    if(numero >= 51 && numero <= 75){
        n3 = n3 + 1;
    } else 
    if(numero >=76 && numero <= 100){
        n4 = n4 + 1;
    }
    i++;
} while (i <= n);
console.log('entre 0 e 25: '+n1);
console.log('entre 26 e 50: '+n2);
console.log('entre 51 e 75: '+n3);
console.log('entre 76 e 100: '+n4);
