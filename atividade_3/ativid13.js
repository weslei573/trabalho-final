//ler media final
// varios alunos
// mostra a media maior, menor, e media aritmetica
// o programa para quando da uma media negativa
let readlineSync = require('readline-sync')
let n1;
let n2;
let n3;
let n4;
let maior;
let menor;
let media;
let mediaA;
n1 = parseFloat(readlineSync.question('informe o valor 1: '));
n2 = parseFloat(readlineSync.question('informe o valor 2: ')); 
n3 = parseFloat(readlineSync.question('informe o valor 3: ')); 
n4 = parseFloat(readlineSync.question('informe o valor 4: ')); 
media = (n1+n2+n3+n4)/4;
menor = media;
maior = media;
do { 
    n1 = parseFloat(readlineSync.question('informe o valor 1: '));
    n2 = parseFloat(readlineSync.question('informe o valor 2: ')); 
    n3 = parseFloat(readlineSync.question('informe o valor 3: ')); 
    n4 = parseFloat(readlineSync.question('informe o valor 4: ')); 
    media = (n1+n2+n3+n4)/4;
    if (media > maior){
        maior = media;
    } 
    if (media < menor) {
        menor = media;
    }
    mediaA = (menor+maior)/2;
    console.log('Media menor: '+menor.toFixed(1));
    console.log('Media maior: '+maior.toFixed(1));
    console.log('A media: '+mediaA.toFixed(2));
} while (media > 6);
console.log('!!!!uma media negativa para o programa!!!');