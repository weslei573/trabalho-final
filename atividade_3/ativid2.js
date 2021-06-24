//preciso de uma laso de repetição de 0 ate 10
// e uma var ou let inteiro
let readlineSync = require('readline-sync')
let x;
x = parseFloat(readlineSync.question('Qual tabuada dejesa calcular: '));
for(i=0; i<=10; i++){
    console.log(i + ' x '+x+' :'+ i*x);
}