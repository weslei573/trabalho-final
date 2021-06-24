//ler 0 a 15 valores
//condiçao de maior 
//condicao de menor
let readlineSync = require('readline-sync')
let menor;
let maior;
let reais = [15];
let numerolido
numerolido = parseFloat(readlineSync.question('Digite um valor: '));
menor = numerolido;
maior = numerolido;
for (i = 0; i <=reais; i++) {
    numerolido = parseFloat(readlineSync.question('Digite um valor: '));
    if(numerolido > maior){
        maior = numerolido;
    }
    if(numerolido < menor){
        menor = numerolido;
    }
  }
  console.log('O menor numero lido foi: '+menor);
  console.log('O maior numero lido foi: '+maior);