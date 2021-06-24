//ler numero n
// condição de e primo e mostra na tela
let readlineSync = require('readline-sync')
let n;
let a = 0;
let b, c, d;
n = parseFloat(readlineSync.question('informe o valor: '));
d = n*(-1);
console.log('E numero primo: ');
do{
    a++;
    c=0;
    for(b=1; b<a; b++){
        if(a%b==0){
            c++;
        }
    }
    if(c==1){
        console.log(a);
        d++;
    }
} while(d);