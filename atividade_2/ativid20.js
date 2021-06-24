//le numero em reais
//calcula o menor numero possivel de notas 
//valor pode ser decomposto
let readlineSync = require('readline-sync')
let valor;
let v100;
let v50;
let v20;
let v10;
let v5;
let v2;
let v1;
valor = parseFloat(readlineSync.question('informe um valor inteiro em reais '));
if(valor >= 100){
    v100 = valor/100
    console.log("numero de notas de 100 e: "+Math.floor(v100));
}
if(valor >= 50){
    v50 = valor/50
    console.log("numero de notas de 50 e: "+Math.floor(v50));
}
if(valor >= 20){
    v20 = valor/20
    console.log("numero de notas de 20 reais e: "+Math.floor(v20));
}
if(valor >= 10){
    v10 = valor/10
    console.log("numero de notas de 10 reais e: "+Math.floor(v10));
}
if(valor >= 5){
    v5 = valor/5
    console.log("numero de notas de 5 reais e: "+Math.floor(v5));
}
if(valor >= 2){
    v2 = valor/2
    console.log("numero de notas de 2 reais e: "+Math.floor(v2));
}
v1 = valor
console.log("numero de notas de 1 real e: "+v1)