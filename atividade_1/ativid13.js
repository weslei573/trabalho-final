// ler inteiro
var leia = require('../leitura/leitura');
console.log('informe um numero');
var numero = leia.numero();
var centena = numero/100
var dezena = (numero%100)/10
var unidade = (numero % 100)%10
console.log('centana: '+centena.toFixed(0))
console.log('dezena: '+dezena.toFixed(0))
console.log('unidade: '+unidade.toFixed(0))
