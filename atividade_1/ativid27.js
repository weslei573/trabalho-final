var leia = require('../leitura/leitura');
console.log('informe o numero 1 e 2: ');
var n1 = leia.numero();
var n2 = leia.numero();
var divisao = n1/n2
console.log('a divisão em os dois numero e : '+divisao.toFixed(2))