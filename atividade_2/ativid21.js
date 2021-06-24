// ler ano
// ler preco do carro
// imprime imposto a ser pago
let readlineSync = require('readline-sync')
let ano;
let preco;
let valor
ano = parseFloat(readlineSync.question('informe o ano do carro: '));
preco = parseFloat(readlineSync.question('informe o preco do carro: '));
if (ano <= 1990){
    valor = preco + (preco * 0.01)
} else {
    valor = (preco * 0.015) + preco
}
console.log("O imposto a ser pago e: "+valor.toFixed(2))