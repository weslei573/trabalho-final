var leia = require('../leitura/leitura');
console.log('informe o salario minino e o salario normal: ');
var salariom = leia.numero();
var salario = leia.numero();
var total = salario/salariom
console.log('o numero de salario minimos e: '+total.toFixed(2))