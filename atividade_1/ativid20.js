// ler numero blusas
// ler gasta de novelos
// quando e gasto
var leia = require('../leitura/leitura');
console.log('informe o numero de blusas: ');
var blusas = leia.numero();
var novelos = 6
var total = blusas * novelos
console.log('e usado '+novelos+' novelos por blusas')
console.log('e gasto '+total+' novelos para fazer '+blusas+' blusas')