//ler valor inicial A
//uma razão R
//imprima uma sequencia em P.G
//laco de 10
let readlineSync = require('readline-sync')
let a1;
let q;
valor = 0;
a1 = parseFloat(readlineSync.question('primeiro termo da P.G: '));
q = parseFloat(readlineSync.question('Razao: '));
for(i=1; i<=10; i++){
    valor = a1*(Math.pow(q, i-1));
    console.log(valor);
}