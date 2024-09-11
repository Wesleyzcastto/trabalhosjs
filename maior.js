
const teclado = require('prompt-sync')({sigint:true});


let idade = parseFloat(teclado("digite sua idade "));
 
let resultado = idade;

  
 if (resultado >= 18){
   console.log (idade + "voce é maior de idade")

 }
 else if (resultado <= 17){

  console.log (idade + " voce é menor de idade")
    
 }
 