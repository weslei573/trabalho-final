//ler um valor A
// impina a sequencia 
let readlineSync = require('readline-sync')
let A;
let valor = 0;
let valor1=1;
A = parseFloat(readlineSync.question('informe a valor inicial: '));
for(i=A; i>0; i--){
    valor = valor + 1;
    valor1 = valor1*valor
    console.log(i+'x');
}
console.log(valor1);