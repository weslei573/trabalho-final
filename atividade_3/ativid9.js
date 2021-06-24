//ler a n
//sequencia fibonacci;
//monstra a posiçao da sequencia
let readlineSync = require('readline-sync')
let n;
let x = 1;
let z = 0;
n = parseFloat(readlineSync.question('informe a massa inicial: '));
for(i = 0; i <= n; i++){
    termo = (x-1) + z;
    z = x+1;
    x = termo
    console.log(termo);
}