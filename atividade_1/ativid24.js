//ler numero de litro a ser feito
var leia = require('../leitura/leitura');
console.log('informe a quantidade de litros para fazer o suco: ');
var litro = leia.numero();
var lagua = litro * 0.8
var lsuco = litro * 0.2
console.log('Sao necesario '+lagua+' litros de agua e '+lsuco+' litros de suco')