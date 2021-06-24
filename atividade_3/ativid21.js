//ler uma quantidade n positivos
//calcule a quantidade de numero pares e impares
//media do valores pares e media geral
let readlineSync = require('readline-sync')
let par = 0;
let media;
let mediap=0;;
let impar = 0;
let numero;
valor = 0;
total = 0;
let i = 0;
do {
    i++;
    numero = parseFloat(readlineSync.question('Digite um valor: '));
    while(numero < 0){
        console.log('numero invalido. insira um valor positivo');
        numero = parseFloat(readlineSync.question('informe o valor: '));
    }  
    if(numero % 2 == 0){
        par = par + 1;
        mediap = mediap+numero;
    } else {
        impar = impar + 1;
    }
    valor = valor + numero;
} while (numero!=0);
total = valor/i;
media = mediap/par;
console.log('quantidade de numero: '+i);
console.log('soma de todos os numeros: '+valor);
console.log('Media geral dos numeros: '+total.toFixed(2));
console.log('quantidade de numero pares: '+par);
console.log('soma dos numero par: '+mediap);
console.log('media de numero pares: '+media.toFixed(2));
console.log('quantidade de numero impares: '+impar);