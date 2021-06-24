// laco de 1 ate 500
//soma dos numero impares que sao multiplos de tres
let n = 1;
let nt = 500;
console.log('Impar e multiplos de tres, entre 1 e 500');
for(i = n; i <= 500; i++){
    if(i%2==1 && i%3==0){
        console.log(i);
    }
}