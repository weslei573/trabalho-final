//ler a base 
//ler a altura 
// realiza o calculo da area do triangulo
// ler area e imprime da tela
let readlineSync = require('readline-sync')
let base;
let altura;
let area;
console.log("Calculo da area do triangulo")
base = parseFloat(readlineSync.question('ninforme a base : '));
altura = parseFloat(readlineSync.question('informe altura: '));
area = (base * altura)/2
console.log("A area do triangulo e: "+area)