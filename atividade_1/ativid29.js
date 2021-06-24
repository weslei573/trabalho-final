var leia = require('../leitura/leitura');
console.log('informe o preco do produto: ');
var preco = leia.numero();
var dsconto = 0.10
var total = preco - (preco * dsconto)
console.log('O preco do produtudo e: '+total)