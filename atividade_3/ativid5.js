// ler numero 
// ler quantidade nao determinada
let readlineSync = require('readline-sync')
let numero;
let produto=1;
do {
    numero = parseFloat(readlineSync.question('Digite um valor: '));
    if(numero != 0){
        console.log('O produto esta em '+(produto=produto*numero));
    } else {
        console.log('programa terminado pelo usuario');
    }
} while (numero !=0);