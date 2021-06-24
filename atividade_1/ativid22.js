//ler moedas de 1, 5, 10, 25, 50 , 100
var leia = require('../leitura/leitura');
console.log('informe o numero de moeda de 1, 5, 10, 25, 50 e 1real: ');
var moe1 = leia.numero();
var moe5 = leia.numero();
var moe10 = leia.numero();
var moe25 = leia.numero();
var moe50 = leia.numero();
var moe1real = leia.numero();
var vmoe5 = moe5 * 5
var vmoe10 = moe10 * 10
var vmoe25 = moe25 * 25
var vmoe50 = moe50 * 50
var total = ((moe1+vmoe5+vmoe10+vmoe25+vmoe50)/100)+moe1real
console.log('O total de dinheiro poupado foi R$ '+total.toFixed(2))