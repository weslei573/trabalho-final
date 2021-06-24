//ler numero 1
//ler numero 2
//ler numero 3
//condicao para orden crescente dos numero 
//imprime na tela a ontem crescente
let readlineSync = require('readline-sync')
let n1;
let n2;
let n3;
n1 = parseFloat(readlineSync.question('informe numero 1: '));
n2 = parseFloat(readlineSync.question('informe numero 2: '));
n3 = parseFloat(readlineSync.question('informe numero 3: '));
if(n1 < n2){
    if(n2 < n3){
        console.log(+n1+' '+n2+' '+n3)
     } else if( n1 < n3){
        console.log(n1+' '+n3+' '+n2)
        } else {
            console.log(n3+' '+n1+' '+n2)
    } 
 } else if(n2 < n3){
            if(n1 < n3){
                console.log(n2+' '+n1+' '+n3)
             } else {
                 console.log(n2+' '+n3+' '+n1)
            } 
 } else {
     console.log(n3+' '+n2+' '+n1)
 }