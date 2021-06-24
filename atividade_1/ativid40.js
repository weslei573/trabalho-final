var leia = require('../leitura/leitura');
console.log('informe os catetos: ');
var cateto1 = leia.numero();
var cateto2 = leia.numero();
var resultado = Math.sqrt(Math.pow(cateto1, 2)+Math.pow(cateto2, 2))
console.log('A hipotenusa e: '+resultado)