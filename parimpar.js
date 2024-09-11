const teclado = require('prompt-sync')({sigint:true});


let numero = parseFloat(teclado("digite um numero "));
 
let resultado = (numero%2);

  
 if (resultado==0) {
   console.log (numero + "par")

 }
 else { 

  console.log (numero +  " impar")
    
    
 }


