//ler valor inicial A
//uma razão R
//imprima uma sequencia em PA
//laco de 10
let readlineSync = require('readline-sync')
let n;
let r;
valor = 0;
n = parseFloat(readlineSync.question('primeiro termo da P.A: '));
r = parseFloat(readlineSync.question('Razao: '));
for(i=1; i<=10; i++){
    valor = n + (i-1)*r;
    console.log(valor);
}