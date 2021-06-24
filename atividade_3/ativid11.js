//ler inteiros positivos
//mostra
//soma os numeros pares
//soma dos impas
let readlineSync = require('readline-sync')
let numero;
let par = 0;
let impar = 0;
do {
    numero = parseFloat(readlineSync.question('Digite um valor: '));
    while(numero <=0){
        console.log('numero invalido. insira um valor superior a (0)');
        numero = parseFloat(readlineSync.question('informe o valor: '));
    }  
   if(numero%2==0){
        par = par + numero
    }else{
        impar = impar + numero
    }
} while (numero <= 1000);
console.log('somar dos numeros par: '+par);
console.log('somar dos numeros impar: '+impar);