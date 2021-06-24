// ler um numero real;
//laco de 0 ate 200
// laco diagonal de 1 ate 10;
//realiza a multiplicação do numero ate 200;
// imprime na tela 
let readlineSync = require('readline-sync')
let numero;
numero = parseFloat(readlineSync.question('informe um valor real: '));
for(i = 1; i <= 200; i++){
    console.log(i+' = '+(numero*i).toFixed(2));
}