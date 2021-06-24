var leia = require('../leitura/leitura');
console.log('informe seu peso: ');
var peso = leia.numero();
var pEngo = (peso * 0.15)+peso
var pEmgr = peso - (peso * 0.20)
console.log('peso: '+peso)
console.log('pessoa engordou 15%: '+pEngo)
console.log('pessoa emagreceu 20%: '+pEmgr)
