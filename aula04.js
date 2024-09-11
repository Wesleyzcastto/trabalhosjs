const teclado = require('prompt-sync')({sigint:true});


let controle = parseInt(teclado("digite a condição: "));

for(let i=0;i<=controle;i++){
    console.log(i);
}
