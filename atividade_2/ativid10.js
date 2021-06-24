//ler nota 1
//ler nota 2
//ler nota 3
//ler nota 4
// tirar a media do aluno
// ler media 
// condição se foi aprovado, reprovado ou reprovado, mas com quebra de pre-requisito
let readlineSync = require('readline-sync')
let n1;
let n2;
let n3;
let n4;
let media;
console.log("Sistema de notas da UTFPR")
n1 = parseFloat(readlineSync.question('informe nota 1: '));
n2 = parseFloat(readlineSync.question('informe nota 2: '));
n3 = parseFloat(readlineSync.question('informe nota 3: '));
n4 = parseFloat(readlineSync.question('informe nota 4: '));
media = ((n1*1)+(n2*2)+(n3*3)+(n4*4))/(1+2+3+4)
if (media >= 6.5){
    console.log("APROVADO, sua media foi :"+ media)
    } else {
    console.log("REPROVADO, sua media foi: "+media)
}