// ler pe direito
// ler pe esquerdo
var leia = require('../leitura/leitura');
console.log('informe o numero de frango com anel no pe direito: ');
var ped = leia.numero();
console.log('informe o numero de frango com anel no pe esquerdo: ');
var pee = leia.numero();
var totald = ped * 4.00
var totale = (pee*2)*3.50
var gatotal = totald + totale
console.log('gasto total e :'+gatotal)