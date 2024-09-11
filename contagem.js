const teclado = require('prompt-sync')({sigint:true});


let condicao = parseInt(teclado("digite a condição: "));
let cont = 0;
 
 
 
 
 do{
    cont++;
    console.log(cont);
}while(cont < 100)