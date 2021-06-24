var leia = require('../leitura/leitura');
console.log('informe o ano de nascimento e o ano atual: ');
var ano = leia.numero();
var anoatual = leia.numero();
var idade = anoatual - ano
var idmes = idade * 12
var iddia = idade * 365
var idsema = idade *4
console.log('idade: '+idade)
console.log('idade em mes: '+idmes)
console.log('idade em dia: '+iddia)
console.log('idade em semana: '+idsema)