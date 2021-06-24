//preso do prato montado pelo cliente
//quilo R$12.00
var leia = require('../leitura/leitura');
console.log('leia o peso do prato montado pelo cliente (em quilos) e imprima o valor a pagar');
console.log('informe o peso e o quilo');
var peso = leia.numero();
var quilo = leia.numero();
var pagar = quilo * peso
console.log('valor para pagamento: '+pagar.toFixed(2))