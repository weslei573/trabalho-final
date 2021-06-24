//ler a altura de 15 p
//laco de 15
//condição de maior e menor
let readlineSync = require('readline-sync')
let menor;
let maior;
let sexo;
let quantF = 0;
let quantH = 0;
let pessoa = 15;
let altura;
altura = parseFloat(readlineSync.question('informe a altura: '));
sexo = (readlineSync.question('informe o sexo: '));
menor = altura;
maior = altura;
for (i = 0; i <=pessoa; i++) {
    altura = parseFloat(readlineSync.question('informe a altura: '));
    sexo = (readlineSync.question('informe o sexo: '));
    if(altura > maior){
        maior = altura;
    }
    if(altura < menor){
        menor = altura;
    }
    if(sexo == "f" || sexo =="F"){
        quantF = quantF + 1;
    }else{
        quantH = quantH + 1;
    }
}
  console.log('A menor altura do grupo foi: '+menor);
  console.log('A maior altura do grupo foi: '+maior);
  console.log('Quantidade de muheres: '+quantF+', homens: '+quantH);