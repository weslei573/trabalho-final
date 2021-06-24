// quantia de pao que foram vendido
// quantia de broa vendida
//sabendo que o pao custa R$ 0.12 e a broa R$ 1.50
//faz o calculo de pao e o de broa 
// tira 10% para arrecada
var leia = require('../leitura/leitura');
console.log('A padaria Hotpão vende uma certa quantidade de pães franceses e uma quantidade de broas a cada dia.');
console.log('informe o numero de pão e de broa');
var pao = leia.numero();
var broa = leia.numero();
var valpao = pao * 0.12
var valbroa = broa * 1.50
var total = valpao + valbroa
var poupanca = total * 0.10
console.log('valor de pões: '+valpao)
console.log('valor de broas: '+valbroa)
console.log('foi arrecado com a venda dos poes e broas juntos, e: '+total)
console.log('voce deve guardar: '+poupanca)