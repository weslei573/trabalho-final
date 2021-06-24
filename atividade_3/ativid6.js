 //ler um numero e positivo
 //condição para saber ser e inteiro e positivo
 //repetição para saber se e pefeito 
 let readlineSync = require('readline-sync')
 let num;
 let soma=0;
 console.log('Verifica se o numero e perfeito');
 num = parseFloat(readlineSync.question('informe o valor: '));
while(num <=0){
    console.log('numero invalido. insira um valor superior a (0)');
    num = parseFloat(readlineSync.question('informe o valor: '))
}  
for (i = 0; i < num; i++){
    if(num%i==0){
        soma=soma+i;
    }
}
if(soma == num){
    console.log('E um numero perfeito');
} else {
    console.log('Nao e um numero perfeito');
}