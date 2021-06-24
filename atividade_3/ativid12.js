// ler varios conjuntos de tres valores
//monstra a soma, produto e sua media
//para quando a ontemm nao for crescente
let readlineSync = require('readline-sync')
let n1;
let n2;
let n3;
let soma;
let produto;
let media;
do {
    n1 = parseFloat(readlineSync.question('informe o valor 1: '));
    n2 = parseFloat(readlineSync.question('informe o valor 2: ')) 
    n3 = parseFloat(readlineSync.question('informe o valor 3: ')) 
    soma = n1+n2+n3;
   media = (n1+n2+n3)/3;
   produto = (n1*n2*n3);
   console.log('somar dos numeros: '+soma);
   console.log('A media: '+media.toFixed(2));
   console.log('O produto dos numeros: '+produto);
} while (n1 < n2 && n1 < n3 && n2 < n3);
console.log('O programa parou, pois o conjunto de valor nao esta em ordem crescente');