const teclado = require('prompt-sync')({sigint:true});


let condicao = parseInt(teclado("digite a condição: "));
let cont = 0;

/*
while(condicao < 150){
   cont++;
 
   condicao++;
   console.log(condicao);
   if (condicao > 150){
     break;
   }
}
   */

do{
    cont++;
    console.log(cont);
}while(cont < 10)