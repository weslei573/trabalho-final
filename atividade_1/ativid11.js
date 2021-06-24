//ler dia
//ler mes
//ler anos
var leia = require('../leitura/leitura');
console.log('informe os dias');
var tdia = leia.numero();
var convano = tdia/365;
var ano = Math.floor(convano);
var conmes = (convano - ano)*365/30;
var mes = Math.floor(conmes);
var condia = (conmes - mes)*30;
var dia = Math.floor(condia);
console.log('quantidade em ano '+ano+', mes '+mes+', dia:'+dia);