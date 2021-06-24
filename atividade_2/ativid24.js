//ler a especificação
//condiçao de escolher o pedido
//quantidade, 
let readlineSync = require('readline-sync')
let pedido = {p1: "0", p2: "0"};
let quantidade= {q1: "", q2:""};
let outro;
let valor
let quant = {q1 : "0", q2 :"0"};
console.log("ESPECIFICACAO             PRECO UNITARIO");
console.log("100 - CACHORRO QUENTE           R$ 1,10");
console.log("101 - BAURU SIMPLES             R$ 1,30");
console.log("102 - BAURU C/OVO               R$ 1,50");
console.log("103 - HAMBURGER                 R$ 1,10");
console.log("104 - CHEESEBURGER              R$ 1,30");
console.log("105 - REFRIGERANTE              R$ 1,00");
pedido.p1 = parseFloat(readlineSync.question('informe a codigo da comprar: '));
if (pedido.p1 == "100" || pedido == "cachorro quente"){
    quantidade.q1 = parseFloat(readlineSync.question('quantas unidades: '));
    quant.q1 = quantidade.q1 * 1.10;
}
if(pedido.p1 == "101" || pedido == "bauru simples"){
    quantidade.q1 = parseFloat(readlineSync.question('quantas unidades: '));
    quant.q1 = quantidade.q1 * 1.30;
}  
if(pedido.p1 == "102" || pedido == "bauru c/ovo"){
    quantidade.q1 = parseFloat(readlineSync.question('quantas unidades: '));
    quant.q1 = quantidade.q1 * 1.50;
}
if(pedido.p1 == "103" || pedido == "hamburger"){
    quantidade.q1 = parseFloat(readlineSync.question('quantas unidades: '));
    quant.q1 = quantidade.q1 * 1.10;
} 
if(pedido.p1 == "104" || pedido == "cheeseburger"){
    quantidade.q1 = parseFloat(readlineSync.question('quantas unidades: '));
    quant.q1 = quantidade.q1 * 1.30;
}
if(pedido.p1 == "105" || pedido == "refrigerante"){
    quantidade.q1 = parseFloat(readlineSync.question('quantas unidades: '));
    quant.q1 = quantidade.q1 * 1.00;
}
console.log("Voce escolheu o item "+pedido.p1);
console.log("O valor de seu pedido e: "+quant.q1);
outro = (readlineSync.question('Que fazer outro pedido: '));
if (outro == "sim"){
    console.log("ESPECIFICACAO             PRECO UNITARIO");
    console.log("100 - CACHORRO QUENTE           R$ 1,10");
    console.log("101 - BAURU SIMPLES             R$ 1,30");
    console.log("102 - BAURU C/OVO               R$ 1,50");
    console.log("103 - HAMBURGER                 R$ 1,10");
    console.log("104 - CHEESEBURGER              R$ 1,30");
    console.log("105 - REFRIGERANTE              R$ 1,00");
    pedido.p2 = parseFloat(readlineSync.question('informe a codigo da comprar: '));
    if (pedido.p2 == "100" || pedido == "cachorro quente"){
        quantidade.q2 = parseFloat(readlineSync.question('quantas unidades: '));
        quant.q2 = quantidade.q2 * 1.10;
    }
    if(pedido.p2 == "101" || pedido == "bauru simples"){
        quantidade.q2 = parseFloat(readlineSync.question('quantas unidades: '));
        quant.q2 = quantidade.q2 * 1.30;
    }  
    if(pedido.p2 == "102" || pedido == "bauru c/ovo"){
        quantidade.q2 = parseFloat(readlineSync.question('quantas unidades: '));
        quant.q2 = quantidade.q2 * 1.50;
    }
    if(pedido.p2 == "103" || pedido == "hamburger"){
        quantidade.q2 = parseFloat(readlineSync.question('quantas unidades: '));
        quant.q2 = quantidade.q2 * 1.10;
    } 
    if(pedido.p2 == "104" || pedido == "cheeseburger"){
        quantidade.q2 = parseFloat(readlineSync.question('quantas unidades: '));
        quant.q2 = quantidade.q2 * 1.30;
    }
    if(pedido.p2 == "105" || pedido == "refrigerante"){
        quantidade.q2 = parseFloat(readlineSync.question('quantas unidades: '));
        quant.q2 = quantidade.q2 * 1.00;
    }
valor = quant.q1 + quant.q2
console.log("voce escolheu o item "+pedido.p1+", "+quantidade.q1+" unidades, segundo item: "+pedido.p2+", "+quantidade.q2+" unidades");
console.log("O valor: R$"+valor);
}else {
    console.log("PEDIDO FINALIZADO!")
}