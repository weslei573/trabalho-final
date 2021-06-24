// quanta ferradura qf
// quantos cavalos
// todos de equipamento total
var leia = require('../leitura/leitura');
console.log('Quantas ferraduras são necessárias para equipar todos os cavalos');
console.log('numero de cavalos: ');
var ferradura = 4;
var cavalos = leia.numero();
var total = cavalos * ferradura
console.log('total de equipamento para equipar os cavalos e: '+total)