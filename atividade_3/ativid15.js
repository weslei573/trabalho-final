//ler numero n
// condição de e primo ou nao
let readlineSync = require('readline-sync')
let n;
let i ;
let resultado = 0;
n = parseFloat(readlineSync.question('informe o valor: '));
for(i=2; i<n/2; i++){
    if(n%i==0){
        resultado++;
    }
}
if(resultado == 0){
    console.log('E numero primo: ', +n);
} else {
    console.log("numeros não e primos: "+n);
}