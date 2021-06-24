// ler carlos
// ler andre
// ler felipe
// conta
var leia = require('../leitura/leitura');
console.log('informe o valor da conta: ');
var vconta = leia.numero();
var carlos = vconta / 3
var andre = vconta/3
var felipe = Math.floor(vconta/3)+(vconta%3)
console.log('Carlos e Andre devem pagar R$'+Math.floor(carlos).toFixed(2)+', R$'+Math.floor(andre).toFixed(2))
console.log('Felipe deve pagar R$ '+felipe.toFixed(2))