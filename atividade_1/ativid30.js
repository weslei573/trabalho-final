var leia = require('../leitura/leitura');
console.log('informe o salario fixo e o valor de venda: ');
var Vfixo = leia.numero();
var Vvenda = leia.numero();
var comi = (Vvenda * 0.04)
var total = comi + Vfixo
console.log('Valor de comissao: '+comi)
console.log('Salario final: '+total)