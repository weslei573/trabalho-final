// raio
// area
var leia = require('../leitura/leitura');
console.log('informe a raia');
var raio = leia.numero();
var pi = 3.14
var area = pi * Math.pow(raio, 2)
console.log('a area e: '+area.toFixed(2))