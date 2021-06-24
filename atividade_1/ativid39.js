var leia = require('../leitura/leitura');
console.log('informe o salario de Joao: ');
var joao = leia.numero();
var c1 = 200
var c2 = 120
var conta = (c1+c2)
var contatotal = joao - (conta - ((c1+c2)*0.02))
console.log('restaram : '+contatotal)