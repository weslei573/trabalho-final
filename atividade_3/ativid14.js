// ler numero n
//mostre numero n na tela
// condição de e par ou impar
let readlineSync = require('readline-sync')
let n;
let i = 0;
n = parseFloat(readlineSync.question('informe o valor 1: '));
console.log("primeiro numero pares ");
for(i=0; i<n*2; i++){
    if(i%2==0){
    console.log(i);
    }
}
console.log("primeiro numero impares ");
for(i=0; i<n*2; i++){
    if(i%2==1){
    console.log(i);
    }
}