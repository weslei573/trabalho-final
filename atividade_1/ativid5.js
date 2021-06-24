//valor de litro de gasolina
//o  valor da gasolina e R$ 5.00
var leia = require('../leitura/leitura');
console.log('Ler o preço do litro da gasolina e o valor do pagamento.');
console.log('informe os valor de reais');
var reais = leia.numero();
var valoGasolina = 5
var total = reais/valoGasolina
console.log('voce tinha '+reais+' reais')
console.log('a quantidade de litros de gasolina foi: '+total)