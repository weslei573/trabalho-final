// ler tres numeros: dia , mes, ano
// condição para sabe a dia senguinte 
let readlineSync = require('readline-sync')
let dia;
let mes;
let ano;
dia = parseFloat(readlineSync.question('que dia e hoje: '));
mes = parseFloat(readlineSync.question('qual o mes: '));
ano = parseFloat(readlineSync.question('qual o ano mesmo: '));
if (dia > 1 && mes <= 12){
    dia = (dia-1)
    console.log("O então amanha sera: "+dia+"/"+mes+"/"+ano)
} else 
if(dia == 1 && mes == 1){
    dia = (30 - dia)+1
    mes = (1 - mes)+12
    ano = ano - 1
    console.log("O então amanha sera: "+dia+"/"+mes+"/"+ano)
} else if(dia == 1 && mes <= 12) {
    dia = (30 - dia)+1
    mes = mes - 1
    console.log("O então amanha sera: "+dia+"/"+mes+"/"+ano)
 }