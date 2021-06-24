// ler o nome
// ler a idade
// quantos dia de vida
var leia = require('../leitura/leitura');
console.log('ler o nome e a idade de uma pessoa, e exibir quantos dias de vida ela possui. ');
console.log('informe o nome e a idade');
var nome = leia.nome();
var idade = leia.numero();
var total = idade * 365
console.log(nome+', voce ja viveu '+total+' dias')