//professor informe o peso
//ler peso 1
//ler peso 2
//ler peso 3
//ler peso 4
//ler nota 1
//ler nota 2
//ler nota 3
//ler nota 4
// tirar a media do aluno com os peso qeu o professor informou
// ler media 
// condição se foi aprovado, reprovado ou reprovado, mas com quebra de pre-requisito
let readlineSync = require('readline-sync')
let p1;
let p2;
let p3;
let p4;
let n1;
let n2;
let n3;
let n4;
let media;
console.log("Sistema de notas da UTFPR")
console.log("informe os pesos das notas professor(a)")
    p1 = parseFloat(readlineSync.question('informe pess 1: '));
    p2 = parseFloat(readlineSync.question('informe peso 2: '));
    p3 = parseFloat(readlineSync.question('informe peso 3: '));
    p4 = parseFloat(readlineSync.question('informe peso 4: '));
console.log("Agora informe a nota do aluno(a)")
    n1 = parseFloat(readlineSync.question('informe nota 1: '));
    n2 = parseFloat(readlineSync.question('informe nota 2: '));
    n3 = parseFloat(readlineSync.question('informe nota 3: '));
    n4 = parseFloat(readlineSync.question('informe nota 4: '));
media = ((n1*p1)+(n2*p2)+(n3*p3)+(n4*p4))/(p1+p2+p3+p4)
if (media >= 6.5){
    console.log("APROVADO, sua media foi :"+ media)
    } else {
    console.log("REPROVADO, sua media foi: "+media)
}