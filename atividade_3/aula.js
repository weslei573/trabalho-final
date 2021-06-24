  // for
var carros = ["Fiat", "Chevrolet", "BMW"];
for (i = 0; i < carros.length; i++) {
    console.log(carros[i]);
  }

  //while
  for(var i=1; i <= 20; i++){
    matriz[i]=[];
    for(var j =1; j<=10; j++){
        matriz[i][j] = '';
    }
}
for(var l = 1; l <= 20; l++ ){
    for(var c=1; c<= 10; c++){
        matriz[l][c] = n;
    }
}
var valores = '';
for(var l=1; l<=20; l++){
    for(var c=1; c<=10; c++){
        console.log(valores += matriz[l][c] + '\t\t');
    }
}

i=0;
while (i <= 10) {
    console.log("o numero é " + i);
    if(i%2==0){
        console.log("par")
    }else{
        console.log("Impar")
    }
    
    i++;
  }

  //dowhile

i=0
do {   
    console.log("o numero é " + i);
    i++;
  }
  while (i < 10)